import { LanguageMenu, LogoIconRgb, LogoRgbEn, LogoRgbFi, LogoRgbSv, NavigationBar } from '@/components';
import i18n from '@/i18n/config';
import { Footer, SkipLink, useMediaQueries } from '@jod/design-system';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdClose, MdMenu } from 'react-icons/md';
import { NavLink, Outlet, ScrollRestoration } from 'react-router';
import {
  LogoEuEn,
  LogoEuFi,
  LogoEuSv,
  LogoKehaEn,
  LogoKehaFi,
  LogoKehaSv,
  LogoOkmEn,
  LogoOkmFiSv,
  LogoOphEn,
  LogoOphFiSv,
  LogoTemEn,
  LogoTemFiSv,
} from './logos';

const NavigationBarItem = (to: string, text: string) => ({
  key: to,
  component: ({ className }: { className: string }) => (
    <NavLink to={to} className={className}>
      {text}
    </NavLink>
  ),
});

const LogoRgb = ({ language, size }: { language: string; size: number }) => {
  switch (language) {
    case 'sv':
      return <LogoRgbSv size={size} />;
    case 'en':
      return <LogoRgbEn size={size} />;
    default:
      return <LogoRgbFi size={size} />;
  }
};

const Root = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { sm } = useMediaQueries();
  const [megaMenuOpen, setMegaMenuOpen] = React.useState(false);
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);

  const userGuide = t('slugs.user-guide.index');
  const basicInformation = t('slugs.basic-information');
  const footerItems: React.ComponentProps<typeof Footer>['items'] = [
    NavigationBarItem(`${userGuide}/${t('slugs.user-guide.what-is-the-service')}`, t('about-us-and-user-guide')),
    NavigationBarItem(`${basicInformation}/${t('slugs.cookie-policy')}`, t('cookie-policy')),
    NavigationBarItem(`${basicInformation}/${t('slugs.data-sources')}`, t('data-sources')),
    NavigationBarItem(`${basicInformation}/${t('slugs.terms-of-service')}`, t('terms-of-service')),
    NavigationBarItem(`${basicInformation}/${t('slugs.accessibility-statement')}`, t('accessibility-statement')),
    NavigationBarItem(`${basicInformation}/${t('slugs.privacy-policy')}`, t('privacy-policy')),
  ];
  const logos = React.useMemo(() => {
    switch (language) {
      case 'sv':
        return [
          <div key="LogoEuSv" className="flex">
            <LogoEuSv className="h-10 max-w-full" />
          </div>,
          <div key="LogoOkmFiSv" className="flex">
            <LogoOkmFiSv className="h-10 max-w-full" />
          </div>,
          <div key="LogoTemFiSv" className="flex">
            <LogoTemFiSv className="h-10 max-w-full" />
          </div>,
          <div key="LogoKehaSv" className="flex">
            <LogoKehaSv className="h-10 max-w-full" />
          </div>,
          <div key="LogoOphFiSv" className="flex">
            <LogoOphFiSv className="h-10 max-w-full" />
          </div>,
        ];
      case 'en':
        return [
          <div key="LogoEuEn" className="flex">
            <LogoEuEn className="h-10 max-w-full" />
          </div>,
          <div key="LogoOkmEn" className="flex">
            <LogoOkmEn className="h-10 max-w-full" />
          </div>,
          <div key="LogoTemEn" className="flex">
            <LogoTemEn className="h-10 max-w-full" />
          </div>,
          <div key="LogoKehaEn" className="flex">
            <LogoKehaEn className="h-10 max-w-full" />
          </div>,
          <div key="LogoOphEn" className="flex">
            <LogoOphEn className="h-10 max-w-full" />
          </div>,
        ];
      default:
        return [
          <div key="LogoEuFi" className="flex">
            <LogoEuFi className="h-10 max-w-full" />
          </div>,
          <div key="LogoOkmFiSv" className="flex">
            <LogoOkmFiSv className="h-10 max-w-full" />
          </div>,
          <div key="LogoTemFiSv" className="flex">
            <LogoTemFiSv className="h-10 max-w-full" />
          </div>,
          <div key="LogoKehaFi" className="flex">
            <LogoKehaFi className="h-10 max-w-full" />
          </div>,
          <div key="LogoOphFiSv" className="flex">
            <LogoOphFiSv className="h-10 max-w-full" />
          </div>,
        ];
    }
  }, [language]);

  const toggleMenu = (menu: 'mega' | 'user' | 'lang') => () => {
    setMegaMenuOpen(false);
    setUserMenuOpen(false);
    setLangMenuOpen(false);
    switch (menu) {
      case 'mega':
        setMegaMenuOpen(!megaMenuOpen);
        break;
      case 'user':
        setUserMenuOpen(!userMenuOpen);
        break;
      case 'lang':
        setLangMenuOpen(!langMenuOpen);
        break;
    }
  };

  const changeLanguage = () => {
    setLangMenuOpen(false);
    setMegaMenuOpen(false);
  };

  React.useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  return (
    <div className="bg-bg-gray">
      <link rel="manifest" href={`/manifest-${language}.json`} crossOrigin="use-credentials" />
      <header role="banner" className="sticky top-0 z-30 print:hidden">
        <SkipLink hash="#jod-main" label={t('skiplinks.main')} />
        <NavigationBar
          onLanguageClick={toggleMenu('lang')}
          logo={
            <NavLink to={`/${language}`} className="flex">
              <div className="inline-flex select-none items-center p-3">
                {sm ? <LogoRgb language={language} size={32} /> : <LogoIconRgb size={32} />}
                <span className="sr-only">{t('osaamispolku')}</span>
              </div>
            </NavLink>
          }
          menuComponent={
            sm ? (
              <button
                className="flex gap-4 justify-center items-center select-none"
                aria-label={t('open-menu')}
                onClick={toggleMenu('mega')}
              >
                <span className="py-3 pl-3">{t('menu')}</span>
                <span className="size-7 flex justify-center items-center">
                  <MdMenu size={24} />
                </span>
              </button>
            ) : (
              <button className="flex justify-self-end p-3" aria-label={t('open-menu')} onClick={toggleMenu('mega')}>
                {megaMenuOpen ? (
                  <span className="size-7 flex justify-center items-center">
                    <MdClose size={24} />
                  </span>
                ) : (
                  <span className="size-7 flex justify-center items-center">
                    <MdMenu size={24} />
                  </span>
                )}
              </button>
            )
          }
        />
        {langMenuOpen && (
          <div className="relative xl:container mx-auto">
            <div className="absolute right-[50px] translate-y-7">
              <LanguageMenu onClick={changeLanguage} />
            </div>
          </div>
        )}
      </header>
      <Outlet />
      <Footer
        items={footerItems}
        logos={
          logos ? (
            <div className="px-5 sm:px-0 grid sm:grid-cols-3 gap-6 sm:gap-9 items-center">{logos}</div>
          ) : undefined
        }
        copyright={t('copyright')}
        variant="light"
        className={!sm ? 'py-7' : undefined}
      />
      <ScrollRestoration />
    </div>
  );
};

export default Root;
