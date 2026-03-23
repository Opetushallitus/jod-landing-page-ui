import React from 'react';
import { useTranslation } from 'react-i18next';
import { UIMatch, useMatches } from 'react-router';

import { type BreadcrumbItem, Breadcrumb as DSBreadCrumb } from '@jod/design-system';

import { BreadcrumbLink } from '../BreadcrumbLink/BreadcrumbLink';

interface YksiloHandle {
  title?: string;
  type?: string;
}

const useTypedMatches = () => useMatches() as UIMatch<unknown, YksiloHandle>[];

export const Breadcrumb = () => {
  const matches = useTypedMatches();
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [items, setItems] = React.useState<BreadcrumbItem[]>([]);

  React.useEffect(() => {
    const validMatches = matches.filter((m) => m.handle?.title || m.id === 'root' || m.handle?.type);

    setItems(
      validMatches.map((match) => {
        const isRoot = match.id === 'root';
        return {
          label: isRoot ? t('front-page', { lng: language }) : match.handle?.title || '',
          to: match.pathname,
        };
      }),
    );
  }, [language, matches, t]);

  return (
    <DSBreadCrumb
      items={items}
      serviceVariant="palveluportaali"
      linkComponent={BreadcrumbLink}
      testId="breadcrumb"
      ariaLabel={t('common:breadcrumb')}
    />
  );
};
