import { BasicArticleSectionContent } from '@/components/ArticleSectionContent/BasicArticleSectionContent';
import { ArticleSectionPage } from '@/components/ArticleSectionPage/ArticleSectionPage';
import { createArticleSectionData } from '@/utils';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { ArticleSection } from '../types';

const AboutService = () => {
  const { t } = useTranslation();

  const sections: ArticleSection[] = React.useMemo(() => {
    return [
      createArticleSectionData(
        t('about-service.sections.my-path.navTitle'),
        t('about-service.sections.my-path.description'),
      ),
      createArticleSectionData(
        t('about-service.sections.advisor-section.navTitle'),
        t('about-service.sections.advisor-section.description'),
      ),
      createArticleSectionData(
        t('about-service.sections.info-service.navTitle'),
        t('about-service.sections.info-service.description'),
      ),
      createArticleSectionData(
        t('about-service.sections.guidance-and-counseling.navTitle'),
        t('about-service.sections.guidance-and-counseling.description'),
      ),
      createArticleSectionData(
        t('about-service.sections.jod-project.navTitle'),
        <Trans i18nKey="about-service.sections.jod-project.description" />,
      ),
    ].map((item) => {
      const { navTitle, text } = item;

      return {
        navTitle,
        content: <BasicArticleSectionContent key={navTitle} text={text} />,
      };
    });
  }, [t]);

  return <ArticleSectionPage title={t('about-service.title')} intro={t('about-service.intro')} sections={sections} />;
};

export default AboutService;
