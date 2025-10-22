import { BasicArticleSectionContent } from '@/components/ArticleSectionContent/BasicArticleSectionContent';
import { ArticleSectionPage } from '@/components/ArticleSectionPage/ArticleSectionPage';
import { createBasicArticleSectionData } from '@/utils';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSection } from '../types';

const AboutService = () => {
  const { t } = useTranslation();

  const sections: ArticleSection[] = React.useMemo(() => {
    return [
      createBasicArticleSectionData(
        t('about-service.sections.my-path.navTitle'),
        t('about-service.sections.my-path.description'),
      ),
      createBasicArticleSectionData(
        t('about-service.sections.advisor-section.navTitle'),
        t('about-service.sections.advisor-section.description'),
      ),
      createBasicArticleSectionData(
        t('about-service.sections.info-service.navTitle'),
        t('about-service.sections.info-service.description'),
      ),
      createBasicArticleSectionData(
        t('about-service.sections.guidance-and-counseling.navTitle'),
        t('about-service.sections.guidance-and-counseling.description'),
      ),
      createBasicArticleSectionData(
        t('about-service.sections.jod-project.navTitle'),
        t('about-service.sections.jod-project.description'),
      ),
    ].map((item) => {
      const { navTitle, text } = item;

      return {
        navTitle,
        content: <BasicArticleSectionContent key={text.slice(0, 25)} text={text} />,
      };
    });
  }, [t]);

  return <ArticleSectionPage title={t('about-service.title')} intro={t('about-service.intro')} sections={sections} />;
};

export default AboutService;
