import type { Page, Request, Route } from '@playwright/test';

const EMPTY_IMAGE = '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>';

type Localized = Record<'fi' | 'sv' | 'en', string>;

export interface Notification {
  id: string;
  title: Localized;
  description: Localized;
  variant: 'success' | 'warning' | 'error';
}

const json = (route: Route, body: unknown, status = 200) =>
  route.fulfill({ status, contentType: 'application/json', body: JSON.stringify(body) });

/**
 * In-memory stand-in for everything the landing page loads besides its own build.
 *
 * Requests that are not handled here fail with 501 and are collected in `unhandledRequests`; the test fixture
 * fails the test if any were made, so that new requests are noticed instead of silently hitting the network.
 */
export class FakeBackend {
  /** Feedback sent with the feedback form (`POST /api/palaute`). */
  palautteet: Record<string, unknown>[] = [];
  /** Service notifications served from `/config/notifications.json`. */
  notifications: Notification[] = [];
  readonly unhandledRequests: string[] = [];

  async install(page: Page) {
    // Keep the tests hermetic: third-party scripts (e.g. the chatbot) are not loaded.
    await page.route(
      (url) => url.hostname !== 'localhost',
      (route) => route.abort('blockedbyclient'),
    );
    await page.route(
      (url) => url.pathname.startsWith('/api/'),
      (route) => this.handleApi(route),
    );
    // Translations are bundled; a missing translation origin makes the app use them.
    await page.route(
      (url) => url.pathname.startsWith('/i18n/'),
      (route) => route.fulfill({ status: 404 }),
    );
    await page.route(
      (url) => url.pathname === '/config/notifications.json',
      (route) => json(route, this.notifications),
    );
    await page.route(/\/(favicon[^/]*|apple-touch-icon\.png|safari-pinned-tab\.svg)$/, (route) =>
      route.fulfill({ status: 200, contentType: 'image/svg+xml', body: EMPTY_IMAGE }),
    );
  }

  private unhandled(route: Route, request: Request) {
    this.unhandledRequests.push(`${request.method()} ${request.url()}`);
    return route.fulfill({ status: 501, body: 'Not mocked in e2e/backend.ts' });
  }

  private async handleApi(route: Route) {
    const request = route.request();
    const path = new URL(request.url()).pathname;

    if (path === '/api/palaute' && request.method() === 'POST') {
      this.palautteet.push(request.postDataJSON() as Record<string, unknown>);
      return route.fulfill({ status: 201 });
    }

    return this.unhandled(route, request);
  }
}
