import { type BreadcrumbItem, Breadcrumb as DSBreadCrumb } from '@jod/design-system';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { UIMatch, useMatches } from 'react-router';
import { BreadcrumbLink } from '../BreadcrumbLink/BreadcrumbLink';

interface YksiloHandle {
  title?: string;
  type?: string;
}

const useTypedMatches = () => useMatches() as UIMatch<unknown, YksiloHandle>[];

export const Breadcrumb = () => {
  const matches = useTypedMatches();
  const { t } = useTranslation();
  const [items, setItems] = React.useState<BreadcrumbItem[]>([]);

  React.useEffect(() => {
    const validMatches = matches.filter((m) => m.handle?.title || m.id === 'root' || m.handle?.type);

    setItems(
      validMatches.map((match) => {
        const isRoot = match.id === 'root';
        return {
          label: isRoot ? t('front-page') : match.handle?.title || '',
          to: match.pathname,
        };
      }),
    );
    // Breadcrumb only needs to be initialized once per page load.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DSBreadCrumb
      items={items}
      serviceVariant="palveluportaali"
      linkComponent={BreadcrumbLink}
      dataTestId="breadcrumb"
      ariaLabel={t('breadcrumb')}
    />
  );
};
