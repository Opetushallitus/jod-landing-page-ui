import i18n from '@/i18n/config';

/**
 * Accesses a nested property using dot notation.
 * @param obj The object to access.
 * @param path The dot notation path.
 * @returns The value of the nested property.
 */
export const getNestedProperty = <T>(obj: T, path: string) => {
  return path.split('.').reduce((acc, part) => (acc as never)?.[part], obj);
};

/**
 * Gets the localized text from "LokalisoituTeksti" object. Uses current i18next language by default.
 * @param entry Object with localized texts
 * @param lang Language code. Uses current i18next language by default.
 * @returns The text in current i18next language
 */
export const getLocalizedText = (entry?: Record<string, string | undefined>, lang = i18n.language) =>
  entry?.[lang]?.trim() ??
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  entry?.[i18n.options.fallbackLng]?.trim() ??
  '';

export const createArticleSectionData = (
  navTitle: string,
  text: React.ReactNode,
  onlyText: boolean = true,
  showNavTitle: boolean = true,
) => {
  return {
    navTitle,
    text,
    onlyText,
    showNavTitle,
  };
};
