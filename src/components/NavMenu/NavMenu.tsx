import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';
import { langLabels, supportedLanguageCodes } from '@/i18n/config';
import { ExternalLinkSection, LinkComponent, NavigationMenu } from '@jod/design-system';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

const FrontPageLink = ({ children, className }: LinkComponent) => {
  // Navigate to the landing page
  return (
    <a href="/" className={className}>
      {children}
    </a>
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
          accentColor: '#85C4EC',
        },
        {
          label: t('navigation.external.ohjaaja.label'),
          url: t('navigation.external.ohjaaja.url'),
          description: t('navigation.external.ohjaaja.description'),
          accentColor: '#66CBD1',
        },
        {
          label: t('navigation.external.tietopalvelu.label'),
          url: t('navigation.external.tietopalvelu.url'),
          description: t('navigation.external.tietopalvelu.description'),
          accentColor: '#EBB8E1',
        },
      ],
    },
  ];

  return (
    <NavigationMenu
      open={open}
      accentColor="#85C4EC"
      FrontPageLinkComponent={FrontPageLink}
      backLabel={''}
      menuItems={[]}
      ariaCloseMenu={t('close-menu')}
      openSubMenuLabel={''}
      frontPageLinkLabel={t('front-page')}
      onClose={onClose}
      selectedLanguage={language}
      languageSelectionItems={languageSelectionItems}
      externalLinkSections={externalLinkSections}
    />
  );
};
