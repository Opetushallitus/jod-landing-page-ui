import i18n from '@/i18n/config';
import { RouteObject, replace } from 'react-router';
import { Root, loader as rootLoader } from './Root';

export const routes: RouteObject[] = [
  {
    path: '/',
    loader: () => replace(`/${i18n.language}`),
  },
  {
    id: 'root',
    path: '/:lng',
    loader: rootLoader,
    element: <Root />,
  },
  { path: '*', loader: () => replace(`/${i18n.language}`) },
];
