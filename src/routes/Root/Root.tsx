import { FeedbackModal } from '@/components';
import { NavMenu } from '@/components/NavMenu/NavMenu';
import { Toaster } from '@/components/Toaster/Toaster';
import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';
import { langLabels, supportedLanguageCodes, type LangCode } from '@/i18n/config';
import { getLinkTo } from '@/utils/routeUtils';
import {
  Button,
  Chatbot,
  Footer,
  LanguageButton,
  MatomoTracker,
  MenuButton,
  NavigationBar,
  ServiceVariantProvider,
  SkipLink,
  useNoteStack,
} from '@jod/design-system';
import { JodOpenInNew } from '@jod/design-system/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet, ScrollRestoration, useLocation } from 'react-router';

const useAddBetaFeedbackNote = () => {
  const { t } = useTranslation();
  const { addTemporaryNote } = useNoteStack();

  React.useEffect(() => {
    addTemporaryNote(() => ({
      id: 'beta-feedback-note',
      title: t('beta.note.title'),
      description: t('beta.note.description'),
      variant: 'feedback',
      readMoreComponent: (
        <Button
          size="sm"
          variant="white"
          label={t('beta.note.to-feedback')}
          icon={<JodOpenInNew ariaLabel={t('external-link')} />}
          iconSide="right"
          linkComponent={getLinkTo('https://link.webropolsurveys.com/S/8AF8E63BF83D39FE', {
            useAnchor: true,
            target: '_blank',
          })}
          className="whitespace-nowrap"
        />
      ),
      isCollapsed: false,
    }));
    addTemporaryNote(() => ({
      id: 'maintenance-warning-note',
      title: t('maintenance.note.title'),
      description: t('maintenance.note.description'),
      variant: 'warning',
      isCollapsed: false,
    }));
  }, [addTemporaryNote, t]);
};

const Root = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [navMenuOpen, setNavMenuOpen] = React.useState(false);
  const [feedbackVisible, setFeedbackVisible] = React.useState(false);
  const location = useLocation();

  const hostname = window.location.hostname;
  const { siteId } = React.useMemo(() => {
    if (hostname === 'osaamispolku.fi') {
      return { siteId: 36 };
    } else if (hostname === 'jodtestaus.fi') {
      return { siteId: 38 };
    } else {
      return { siteId: 37 };
    }
  }, [hostname]);

  const moreInfoLinks = [
    {
      href: `/${language}/${t('slugs.about-service')}`,
      label: t('footer.more-info-links.about-service'),
    },
    {
      href: `/${language}/${t('slugs.privacy-and-cookies')}`,
      label: t('footer.more-info-links.privacy-and-cookies'),
    },
    {
      href: `/${language}/${t('slugs.data-sources')}`,
      label: t('footer.more-info-links.data-sources'),
    },
    {
      href: `/${language}/${t('slugs.ai-usage')}`,
      label: t('footer.more-info-links.ai-usage'),
    },
    {
      href: `/${language}/${t('slugs.accessibility')}`,
      label: t('footer.more-info-links.accessibility'),
    },
  ];

  React.useEffect(() => {
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const { generateLocalizedPath } = useLocalizedRoutes();

  useAddBetaFeedbackNote();

  return (
    <div className="bg-bg-gray">
      <link rel="manifest" href={`/manifest-${language}.json`} crossOrigin="use-credentials" />
      <header role="banner" className="sticky top-0 z-30 print:hidden">
        <SkipLink hash="#jod-main" label={t('skiplinks.main')} />
        <NavigationBar
          logo={{ to: `/${language}`, language, srText: t('osaamispolku') }}
          menuComponent={<MenuButton onClick={() => setNavMenuOpen(!navMenuOpen)} label={t('menu')} />}
          languageButtonComponent={
            <LanguageButton
              serviceVariant="palveluportaali"
              testId="language-button"
              language={language as LangCode}
              supportedLanguageCodes={supportedLanguageCodes}
              generateLocalizedPath={generateLocalizedPath}
              linkComponent={Link}
              translations={{
                fi: { change: 'Vaihda kieli.', label: langLabels.fi },
                sv: { change: 'Andra språk.', label: langLabels.sv },
                en: { change: 'Change language.', label: langLabels.en },
              }}
            />
          }
          renderLink={({ to, className, children }) => (
            <Link to={to} className={className}>
              {children as React.ReactNode}
            </Link>
          )}
          serviceBarVariant="palveluportaali"
          serviceBarTitle={t('service-banner')}
          translations={{
            versionLabel: t('version'),
            showAllNotesLabel: t('show-all'),
            ariaLabelCloseNote: t('note.close'),
          }}
        />
      </header>
      <NavMenu open={navMenuOpen} onClose={() => setNavMenuOpen(false)} />
      <ServiceVariantProvider value="palveluportaali">
        <Outlet />
      </ServiceVariantProvider>
      <Chatbot />
      <Footer
        language={language}
        okmLabel={t('footer.logos.okm-label')}
        temLabel={t('footer.logos.tem-label')}
        ophLabel={t('footer.logos.oph-label')}
        kehaLabel={t('footer.logos.keha-label')}
        cooperationTitle={t('footer.cooperation-title')}
        fundingTitle={t('footer.funding-title')}
        moreInfoTitle={t('footer.more-info-title')}
        moreInfoDescription={t('footer.more-info-description')}
        moreInfoLinks={moreInfoLinks}
        moreInfoComponent={Link}
        feedbackTitle={t('footer.feedback-title')}
        feedbackContent={t('footer.feedback-content')}
        feedbackButtonLabel={t('footer.feedback-button-label')}
        feedbackOnClick={() => setFeedbackVisible(true)}
        feedbackBgImageClassName="bg-[url(@/../assets/feedback.jpg)] bg-cover bg-[50%_50%]"
        copyright={t('footer.copyright')}
        externalLinkIconAriaLabel={t('external-link')}
        testId="footer"
      />
      <FeedbackModal
        isOpen={feedbackVisible}
        onClose={() => setFeedbackVisible(false)}
        section="Koko palvelu tai muu palaute"
        area="Alatunniste"
        language={language as LangCode}
      />
      <Toaster />
      <ScrollRestoration />
      <MatomoTracker trackerUrl="https://analytiikka.opintopolku.fi" siteId={siteId} pathname={location.pathname} />
    </div>
  );
};

export default Root;
