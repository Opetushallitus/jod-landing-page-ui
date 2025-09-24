import { MainLayout } from '@/components/MainLayout/MainLayout';
import { MenuSection, PageNavigation } from '@jod/design-system';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Accessibility = () => {
  const { t } = useTranslation();
  const title = t('accessibility.title');

  const navChildren = React.useMemo(() => {
    const menuSection: MenuSection = {
      title: t('on-this-page'),
      linkItems: [],
    };
    return <PageNavigation menuSection={menuSection} activeIndicator="dot" className="mb-4" />;
  }, [t]);

  return (
    <MainLayout navChildren={navChildren}>
      <title>{title}</title>
      <h1 data-testid="accessibility-title" className="mb-5 text-heading-2 sm:text-heading-1">
        {title}
      </h1>
      <p className="mb-8 text-body-md font-arial">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </MainLayout>
  );
};

export default Accessibility;
