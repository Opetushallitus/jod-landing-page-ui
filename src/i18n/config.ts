import i18n, { type Resource } from 'i18next';
import ChainedBackend from 'i18next-chained-backend';
import HttpBackend from 'i18next-http-backend';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

import commonEn from './common/en.json';
import commonFi from './common/fi.json';
import commonSv from './common/sv.json';
import landingPageEn from './landing-page/en.json';
import landingPageFI from './landing-page/fi.json';
import landingPageSv from './landing-page/sv.json';

export type LangCode = 'fi' | 'sv' | 'en';
export const supportedLanguageCodes: LangCode[] = ['fi', 'sv', 'en'];
export const defaultLang = 'fi';

export const langLabels = {
  en: 'In English',
  fi: 'Suomeksi',
  sv: 'På svenska',
};

const bundledResources: Record<string, Resource> = {
  en: { common: commonEn, 'landing-page': landingPageEn },
  fi: { common: commonFi, 'landing-page': landingPageFI },
  sv: { common: commonSv, 'landing-page': landingPageSv },
};

await i18n
  .use(ChainedBackend)
  .use(initReactI18next)
  .init({
    lng: defaultLang,
    ns: ['landing-page', 'common'],
    defaultNS: 'landing-page',
    supportedLngs: supportedLanguageCodes,
    fallbackLng: defaultLang,
    preload: supportedLanguageCodes,
    backend: {
      backends: [HttpBackend, resourcesToBackend((lng: string, ns: string) => bundledResources[lng]?.[ns])],
      backendOptions: [
        {
          loadPath: '/i18n/{{ns}}/{{lng}}.json',
        },
      ],
    },
    interpolation: {
      escapeValue: false,
    },
    returnEmptyString: false,
    saveMissing: false,
  });

export default i18n;
