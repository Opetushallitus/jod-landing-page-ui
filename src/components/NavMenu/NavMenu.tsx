import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';
import { langLabels, supportedLanguageCodes } from '@/i18n/config';
import {
  cx,
  type ExternalLinkSection,
  type LinkComponent,
  NavigationMenu,
  tidyClasses as tc,
} from '@jod/design-system';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router';

const PortalLink = ({ children, className }: LinkComponent) => {
  const {
    i18n: { language },
  } = useTranslation();

  const activeClasses = tc([
    'text-white!',
    'bg-secondary-gray',
    'hover:bg-secondary-5-light-3!',
    'hover:text-black!',
    'active:bg-primary-gray!',
    'active:text-white!',
  ]);

  return (
    <NavLink className={({ isActive }) => cx(className, { [activeClasses]: isActive })} to={`/${language}`}>
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
          label: t('navigation.extra.palveluhakemisto.label'),
          url: t('navigation.extra.palveluhakemisto.url'),
        },
        {
          label: t('navigation.extra.urataidot.label'),
          url: t('navigation.extra.urataidot.url'),
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
      onClose={onClose}
      open={open}
      openSubMenuLabel={''}
      PortalLinkComponent={PortalLink}
      portalLinkLabel={t('competency-path-portal')}
      selectedLanguage={language}
      serviceVariant="palveluportaali"
      externalLinkIconAriaLabel={t('external-link')}
    />
  );
};
