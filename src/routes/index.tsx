import { RouteObject, replace } from 'react-router';

import { NoteStackProvider } from '@jod/design-system';

import i18n, { supportedLanguageCodes } from '@/i18n/config';

import { AboutService, AiUsage, DataSources, PrivacyAndCookies } from './BasicInformation';
import AboutGuidance from './BasicInformation/AboutGuidance';
import AboutIndividuals from './BasicInformation/AboutIndividuals';
import Accessibility from './BasicInformation/Accessibility';
import { Home } from './Home';
import { NoMatch, Root } from './Root';
import loader from './Root/loader';

const aboutService: RouteObject[] = supportedLanguageCodes.map((lng) => ({
  id: `{common:slugs.about-service}|${lng}`,
  path: i18n.t('common:slugs.about-service', { lng }),
  handle: {
    title: i18n.t('about-service.title', { lng }),
  },
  children: [
    {
      element: <AboutService />,
      index: true,
    },
    {
      id: `{slugs.about-guidance}|${lng}`,
      path: i18n.t('slugs.about-guidance', { lng }),
      element: <AboutGuidance />,
      handle: {
        title: i18n.t('about-guidance.title', { lng }),
      },
    },
    {
      id: `{slugs.about-individuals}|${lng}`,
      path: i18n.t('slugs.about-individuals', { lng }),
      element: <AboutIndividuals />,
      handle: {
        title: i18n.t('about-individuals.title', { lng }),
      },
    },
  ],
}));

const privacyAndCookies: RouteObject[] = supportedLanguageCodes.map((lng) => ({
  id: `{common:slugs.privacy-and-cookies}|${lng}`,
  path: i18n.t('common:slugs.privacy-and-cookies', { lng }),
  element: <PrivacyAndCookies />,
  handle: {
    title: i18n.t('privacy-policy-and-cookies.title', { lng }),
  },
}));

const dataSources: RouteObject[] = supportedLanguageCodes.map((lng) => ({
  id: `{common:slugs.data-sources}|${lng}`,
  path: i18n.t('common:slugs.data-sources', { lng }),
  element: <DataSources />,
  handle: {
    title: i18n.t('data-sources.title', { lng }),
  },
}));

const aiUsage: RouteObject[] = supportedLanguageCodes.map((lng) => ({
  id: `{common:slugs.ai-usage}|${lng}`,
  path: i18n.t('common:slugs.ai-usage', { lng }),
  element: <AiUsage />,
  handle: {
    title: i18n.t('ai-usage.title', { lng }),
  },
}));

const accessibility: RouteObject[] = supportedLanguageCodes.map((lng) => ({
  id: `{common:slugs.accessibility}|${lng}`,
  path: i18n.t('common:slugs.accessibility', { lng }),
  element: <Accessibility />,
  handle: {
    title: i18n.t('accessibility.title', { lng }),
  },
}));

const rootRoute: RouteObject = {
  id: 'root',
  path: '/:lng',
  loader: loader,
  element: (
    <NoteStackProvider>
      <Root />
    </NoteStackProvider>
  ),
  children: [
    {
      index: true,
      element: <Home />,
    },
    ...aboutService,
    ...privacyAndCookies,
    ...dataSources,
    ...aiUsage,
    ...accessibility,
    {
      path: '*',
      element: <NoMatch />,
    },
  ],
};

export const routes: RouteObject[] = [
  {
    path: '/',
    loader: () => replace(`/${i18n.language}`),
  },
  rootRoute,
];
