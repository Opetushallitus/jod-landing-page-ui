import { test as base, expect, type Page } from '@playwright/test';

import { FakeBackend } from './backend';

interface Fixtures {
  backend: FakeBackend;
  /** Opens a page under /{lang} and accepts all cookies, like a returning user would have done. */
  open: (path?: string, lang?: 'fi' | 'sv' | 'en') => Promise<void>;
}

export const acceptAllCookies = async (page: Page) => {
  const modal = page.getByTestId('cookie-consent-modal');
  await modal.getByTestId('accept-all').click();
  // The modal element itself is a zero-size wrapper that is never "visible", so check its content instead.
  await expect(modal.getByTestId('title')).toBeHidden();
};

export const test = base.extend<Fixtures>({
  // Installed for every test, also those that use only `page`, so that no test can reach a real service.
  backend: [
    async ({ page }, use) => {
      const backend = new FakeBackend();
      await backend.install(page);
      await use(backend);
      expect(backend.unhandledRequests, 'Requests not handled by e2e/backend.ts').toEqual([]);
    },
    { auto: true },
  ],
  open: async ({ page }, use) => {
    let cookiesAccepted = false;
    await use(async (path = '', lang = 'fi') => {
      await page.goto(`/${lang}/${path}`);
      if (!cookiesAccepted) {
        await acceptAllCookies(page);
        cookiesAccepted = true;
      }
    });
  },
});

export { expect };
