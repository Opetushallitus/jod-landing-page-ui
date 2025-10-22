import { BasicArticleSectionContent } from '@/components/ArticleSectionContent/BasicArticleSectionContent';
import { ArticleSectionPage } from '@/components/ArticleSectionPage/ArticleSectionPage';
import { createBasicArticleSectionData } from '@/utils';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSection } from '../types';

const Accessibility = () => {
  const { t } = useTranslation();

  const sections: ArticleSection[] = React.useMemo(() => {
    return [
      createBasicArticleSectionData(
        t('accessibility.sections.status.navTitle'),
        t('accessibility.sections.status.description'),
      ),
      createBasicArticleSectionData(
        t('accessibility.sections.planned-fixes.navTitle'),
        t('accessibility.sections.planned-fixes.description'),
      ),
      createBasicArticleSectionData(
        t('accessibility.sections.feedback.navTitle'),
        t('accessibility.sections.feedback.description'),
      ),
    ].map((item) => {
      const { navTitle, text } = item;

      return {
        navTitle,
        content: <BasicArticleSectionContent key={text.slice(0, 25)} text={text} />,
      };
    });
  }, [t]);

  return <ArticleSectionPage title={t('accessibility.title')} intro={t('accessibility.intro')} sections={sections} />;
};

export default Accessibility;
