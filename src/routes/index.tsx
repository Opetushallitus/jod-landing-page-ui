import i18n, { supportedLanguageCodes } from '@/i18n/config';
import { RouteObject, replace } from 'react-router';
import { AboutService, AiUsage, BasicInformation, DataSources, PrivacyAndCookies } from './BasicInformation';
import Accessibility from './BasicInformation/Accessibility';
import { Home } from './Home';
import { NoMatch, Root } from './Root';
import loader from './Root/loader';

const basicInformation: RouteObject[] = supportedLanguageCodes.map((lng) => ({
  id: `{slugs.about-service}|${lng}`,
  element: <BasicInformation />,
  handle: {
    title: i18n.t('about-service', { lng }),
  },
  children: [
    {
      path: i18n.t('slugs.about-service', { lng }),
      element: <AboutService />,
    },
    {
      path: i18n.t('slugs.privacy-and-cookies', { lng }),
      element: <PrivacyAndCookies />,
    },
    {
      path: i18n.t('slugs.data-sources', { lng }),
      element: <DataSources />,
    },
    {
      path: i18n.t('slugs.ai-usage', { lng }),
      element: <AiUsage />,
    },
    {
      path: i18n.t('slugs.accessibility', { lng }),
      element: <Accessibility />,
    },
  ],
}));

const rootRoute: RouteObject = {
  id: 'root',
  path: '/:lng',
  loader: loader,
  element: <Root />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    ...basicInformation,
  ],
};

export const routes: RouteObject[] = [
  {
    path: '/',
    loader: () => replace(`/${i18n.language}`),
  },
  rootRoute,
  { path: '*', element: <NoMatch /> },
];
