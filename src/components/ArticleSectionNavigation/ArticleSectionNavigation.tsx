import { ArticleSection } from '@/routes/types';
import { getLinkTo } from '@/utils/routeUtils';
import { MenuSection, PageNavigation } from '@jod/design-system';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const ArticleSectionNavigation = ({ sections }: { sections: ArticleSection[] }) => {
  const { t } = useTranslation();

  return React.useMemo(() => {
    const menuSection: MenuSection = {
      title: t('on-this-page'),
      linkItems: sections.map((section) => ({
        label: section.navTitle,
        linkComponent: getLinkTo(`#${section.navTitle}`),
      })),
    };
    return <PageNavigation menuSection={menuSection} activeIndicator="dot" className="mb-4" />;
  }, [t, sections]);
};
