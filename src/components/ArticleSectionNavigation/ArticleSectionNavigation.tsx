import type { ArticleSection } from '@/routes/types';
import { getLinkTo } from '@/utils/routeUtils';
import { type MenuSection, PageNavigation } from '@jod/design-system';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const ArticleSectionNavigation = ({
  sections,
  collapsed,
  activeIndicator,
}: {
  sections: ArticleSection[];
  collapsed?: boolean;
  activeIndicator?: React.ComponentProps<typeof PageNavigation>['activeIndicator'];
}) => {
  const { t } = useTranslation();

  return React.useMemo(() => {
    const menuSection: MenuSection = {
      title: t('on-this-page'),
      linkItems: sections.map((section) => ({
        label: section.navTitle,
        linkComponent: getLinkTo(`#${section.navTitle}`),
      })),
    };
    return (
      <PageNavigation
        menuSection={menuSection}
        activeIndicator={activeIndicator}
        className="mb-4"
        collapsed={collapsed}
      />
    );
  }, [t, sections, collapsed, activeIndicator]);
};
