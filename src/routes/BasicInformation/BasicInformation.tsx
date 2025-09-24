import { MainLayout } from '@/components';
import { LinkComponent, MenuSection, PageNavigation } from '@jod/design-system';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet, useLocation } from 'react-router';

const BasicInformation = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { pathname } = useLocation();

  const linkConfigs = React.useMemo(
    () => [
      { label: 'Tietoa palvelusta', slugKey: 'slugs.about-service' },
      { label: 'Tietosuojaseloste ja evästeet', slugKey: 'slugs.privacy-and-cookies' },
      { label: 'Datalähteet', slugKey: 'slugs.data-sources' },
      { label: 'Tietoa tekoälyn käytöstä', slugKey: 'slugs.ai-usage' },
      { label: 'Tietoa saavutettavuudesta', slugKey: 'slugs.accessibility' },
    ],
    [],
  );

  const menuSection: MenuSection = React.useMemo(() => {
    const linkItems: MenuSection['linkItems'] = linkConfigs.map(({ label, slugKey }) => {
      const path = `/${language}/${t(slugKey)}`;
      const linkComponent = (props: LinkComponent) => <Link {...props} to={path} />;
      return {
        label,
        LinkComponent: linkComponent,
        selected: pathname === path,
      };
    });
    return { title: 'Tällä sivulla', linkItems } as MenuSection;
  }, [language, pathname, t, linkConfigs]);

  return (
    <MainLayout
      navChildren={
        <PageNavigation
          menuSection={menuSection}
          openSubMenuLabel=""
          activeIndicator="dot"
          data-testid="basic-information-nav"
        />
      }
    >
      <Outlet />
    </MainLayout>
  );
};

export default BasicInformation;
