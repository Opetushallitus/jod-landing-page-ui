import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';
import { langLabels, supportedLanguageCodes } from '@/i18n/config';
import { ExternalLinkSection, LinkComponent, MenuSection, NavigationMenu, tidyClasses as tc } from '@jod/design-system';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router';

const PortalLink = ({ children, className }: LinkComponent) => {
  const {
    i18n: { language },
  } = useTranslation();

  const classes = tc(['ml-3 w-[calc(100%-48px)]!', className]);
  return (
    <NavLink
      className={({ isActive }) =>
        tc([
          classes,
          isActive ? 'bg-secondary-3-dark hover:bg-secondary-3-dark! active:bg-secondary-3-dark-2! text-white!' : '',
        ])
      }
      to={`/${language}`}
    >
      {children}
    </NavLink>
  );
};

const LanguageSelectionLinkComponent = (generateLocalizedPath: (langCode: string) => string, langCode: string) => {
  const LanguageSelectionLink = (props: LinkComponent) => {
    const localizedPath = generateLocalizedPath(langCode);
    return <Link to={localizedPath} {...props} />;
  };
  return LanguageSelectionLink;
};

export const NavMenu = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { generateLocalizedPath } = useLocalizedRoutes();

  const getLanguageSelectionItems = React.useCallback(() => {
    return supportedLanguageCodes.map((code) => ({
      label: langLabels[code] ?? code,
      value: code,
      linkComponent: LanguageSelectionLinkComponent(generateLocalizedPath, code),
    }));
  }, [generateLocalizedPath]);

  const languageSelectionItems = getLanguageSelectionItems();
  const menuSection: MenuSection = {
    linkItems: [],
  };

  const externalLinkSections: ExternalLinkSection[] = [
    {
      title: t('navigation.external.title'),
      linkItems: [
        {
          label: t('navigation.external.osaamispolku.label'),
          url: t('navigation.external.osaamispolku.url'),
          description: t('navigation.external.osaamispolku.description'),
          accentColor: '#006DB3',
        },
        {
          label: t('navigation.external.ohjaaja.label'),
          url: t('navigation.external.ohjaaja.url'),
          description: t('navigation.external.ohjaaja.description'),
          accentColor: '#00818A',
        },
        {
          label: t('navigation.external.tietopalvelu.label'),
          url: t('navigation.external.tietopalvelu.url'),
          description: t('navigation.external.tietopalvelu.description'),
          accentColor: '#AD4298',
        },
      ],
    },
    {
      title: t('navigation.extra.title'),
      linkItems: [
        {
          label: t('navigation.extra.urataidot.label'),
          url: t('navigation.extra.urataidot.url'),
        },
        {
          label: t('navigation.extra.palveluhakemisto.label'),
          url: t('navigation.extra.palveluhakemisto.url'),
        },
      ],
    },
  ];

  return (
    <NavigationMenu
      ariaCloseMenu={t('close-menu')}
      externalLinkSections={externalLinkSections}
      languageSelectionItems={languageSelectionItems}
      languageSelectionTitle={t('language-selection')}
      menuSection={menuSection}
      onClose={onClose}
      open={open}
      openSubMenuLabel={''}
      PortalLinkComponent={PortalLink}
      portalLinkLabel={t('competency-path-portal')}
      selectedLanguage={language}
      serviceVariant="palveluportaali"
    />
  );
};
