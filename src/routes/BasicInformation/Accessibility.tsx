import { BasicArticleSectionContent } from '@/components/ArticleSectionContent/BasicArticleSectionContent';
import { ArticleSectionPage } from '@/components/ArticleSectionPage/ArticleSectionPage';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { ArticleSection } from '../types';

const createArticleSectionData = (navTitle: string, text: React.ReactNode) => {
  return {
    navTitle,
    text,
  };
};
const Accessibility = () => {
  const { t } = useTranslation();

  const sections: ArticleSection[] = React.useMemo(() => {
    return [
      createArticleSectionData(
        t('accessibility.sections.status.navTitle'),
        t('accessibility.sections.status.description'),
      ),
      createArticleSectionData(
        t('accessibility.sections.missing.navTitle'),
        <Trans i18nKey="accessibility.sections.missing.description" />,
      ),
      createArticleSectionData(
        t('accessibility.sections.planned-fixes.navTitle'),
        t('accessibility.sections.planned-fixes.description'),
      ),
      createArticleSectionData(
        t('accessibility.sections.updates.navTitle'),
        t('accessibility.sections.updates.description'),
      ),
      createArticleSectionData(
        t('accessibility.sections.feedback.navTitle'),
        <Trans i18nKey="accessibility.sections.feedback.description" />,
      ),
    ].map((item) => {
      const { navTitle, text } = item;

      return {
        navTitle,
        content: <BasicArticleSectionContent key={navTitle} text={text} />,
      };
    });
  }, [t]);

  return <ArticleSectionPage title={t('accessibility.title')} intro={t('accessibility.intro')} sections={sections} />;
};

export default Accessibility;
