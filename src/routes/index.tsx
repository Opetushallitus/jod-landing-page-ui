import i18n from '@/i18n/config';
import { RouteObject, replace } from 'react-router';
import { Home } from './Home';
import { NoMatch, Root } from './Root';
import loader from './Root/loader';

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
