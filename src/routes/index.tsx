import i18n from '@/i18n/config';
import { RouteObject, replace } from 'react-router';
import { Home } from './Home';
import { NoMatch, Root } from './Root';

const rootRoute: RouteObject = {
  id: 'root',
  path: '/:lng',
  element: <Root />,
  children: [
    {
      index: true,
      element: <Home />,
    },
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
