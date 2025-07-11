import { LanguageButton } from '@/components';
import { FeedbackModal } from '@/components/FeedbackModal/FeedbackModal';
import { NavMenu } from '@/components/NavMenu/NavMenu';
import { useMenuClickHandler } from '@/hooks/useMenuClickHandler';
import { Footer, MatomoTracker, NavigationBar, SkipLink } from '@jod/design-system';
import { JodMenu } from '@jod/design-system/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, Outlet, ScrollRestoration, useLocation } from 'react-router';

const Root = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);
  const [navMenuOpen, setNavMenuOpen] = React.useState(false);
  const [feedbackVisible, setFeedbackVisible] = React.useState(false);
  const location = useLocation();

  const hostname = window.location.hostname;
  const siteId = React.useMemo(() => {
    if (hostname === 'localhost' || hostname === 'jodkehitys.fi') {
      return 37;
    } else if (hostname === 'jodtestaus.fi') {
      return 38;
    }
  }, [hostname]);

  const userGuide = t('slugs.user-guide.index');
  const basicInformation = t('slugs.basic-information');

  const moreInfoLinks = [
    {
      to: `${userGuide}/${t('slugs.about-us')}`,
      label: t('about-us'),
    },
    {
      to: `${basicInformation}/${t('slugs.privacy-policy')}`,
      label: t('privacy-policy-and-cookies'),
    },
    {
      to: `${basicInformation}/${t('slugs.data-sources')}`,
      label: t('data-sources'),
    },
    {
      to: `${basicInformation}/${t('slugs.about-ai')}`,
      label: t('about-ai'),
    },
    {
      to: `${basicInformation}/${t('slugs.accessibility-statement')}`,
      label: t('accessibility-statement'),
    },
  ];

  const langMenuButtonRef = React.useRef<HTMLLIElement>(null);
  const langMenuRef = useMenuClickHandler(() => setLangMenuOpen(false), langMenuButtonRef);

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (langMenuRef.current && !langMenuRef.current.contains(event.relatedTarget as Node)) {
      setLangMenuOpen(false);
    }
  };

  React.useEffect(() => {
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  return (
    <div className="bg-bg-gray">
      <link rel="manifest" href={`/manifest-${language}.json`} crossOrigin="use-credentials" />
      <header role="banner" className="sticky top-0 z-30 print:hidden">
        <SkipLink hash="#jod-main" label={t('skiplinks.main')} />
        <NavigationBar
          logo={{
            to: `/${language}`,
            language,
            srText: t('osaamispolku'),
          }}
          menuComponent={
            <button
              onClick={() => setNavMenuOpen(!navMenuOpen)}
              aria-label={t('open-menu')}
              className="flex gap-2 justify-center items-center select-none cursor-pointer"
            >
              <span className="size-7 flex justify-center items-center">
                <JodMenu />
              </span>
              <span className="py-3 pr-2">{t('menu')}</span>
            </button>
          }
          languageButtonComponent={
            <LanguageButton
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              langMenuOpen={langMenuOpen}
              menuRef={langMenuRef}
              onMenuBlur={handleBlur}
              onMenuClick={() => setLangMenuOpen(false)}
            />
          }
          refs={{ langMenuButtonRef: langMenuButtonRef }}
          renderLink={({ to, className, children }) => (
            <Link to={to} className={className}>
              {children as React.ReactNode}
            </Link>
          )}
        />
      </header>
      <NavMenu open={navMenuOpen} onClose={() => setNavMenuOpen(false)} />
      <Outlet />
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
        MoreInfoLinkComponent={NavLink}
        feedbackTitle={t('footer.feedback-title')}
        feedbackContent={t('footer.feedback-content')}
        feedbackButtonLabel={t('footer.feedback-button-label')}
        feedbackOnClick={() => setFeedbackVisible(true)}
        feedbackBgImageClassName="bg-[url(@/../assets/home-1.avif)] bg-cover bg-[length:auto_auto] sm:bg-[length:auto_1000px] bg-[top_-0rem_right_-0rem] sm:bg-[top_-21rem_right_0rem]"
        copyright={t('copyright')}
      />
      <FeedbackModal isOpen={feedbackVisible} onClose={() => setFeedbackVisible(false)} />
      <ScrollRestoration />
      {siteId && (
        <MatomoTracker trackerUrl="https://analytiikka.opintopolku.fi" siteId={siteId} pathname={location.pathname} />
      )}
    </div>
  );
};

export default Root;
