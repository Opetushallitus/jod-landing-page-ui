import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { BasicArticleSectionContent } from '@/components/ArticleSectionContent/BasicArticleSectionContent';
import { ArticleSectionPage } from '@/components/ArticleSectionPage/ArticleSectionPage';
import { createArticleSectionData } from '@/utils';

import { ArticleSection } from '../types';
import { MyPathImage } from './MyPathImage';

const AboutService = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const sections: ArticleSection[] = React.useMemo(() => {
    return [
      createArticleSectionData(
        t('about-service.sections.my-path.navTitle'),
        <>
          <p className="mb-5">
            <Trans i18nKey="about-service.sections.my-path.description" />
          </p>
          <h3 className="mb-5 font-poppins text-heading-3-mobile sm:text-heading-3">
            {t('about-service.sections.my-path.data-sources.title')}
          </h3>
          <p className="mb-8">
            {t('about-service.sections.my-path.data-sources.description')}{' '}
            <Link to={`/${language}/${t('common:slugs.ai-usage')}`} className="text-accent hover:underline">
              {t('about-service.sections.my-path.data-sources.read-more-link')}
            </Link>
            .
          </p>
          <div className="relative mb-3 lg:-mr-[calc(50%+12px)]">
            <MyPathImage />
          </div>
        </>,
        false,
      ),
      createArticleSectionData(
        t('about-service.sections.advisor-section.navTitle'),
        <Trans i18nKey="about-service.sections.advisor-section.description" />,
      ),
      createArticleSectionData(
        t('about-service.sections.info-service.navTitle'),
        <Trans i18nKey="about-service.sections.info-service.description" />,
      ),
      createArticleSectionData(
        t('about-service.sections.guidance-and-counseling.navTitle'),
        <Trans i18nKey="about-service.sections.guidance-and-counseling.description" />,
      ),
      createArticleSectionData(
        t('about-service.sections.jod-project.navTitle'),
        <Trans i18nKey="about-service.sections.jod-project.description" />,
      ),
    ].map((item) => {
      const { navTitle, text, onlyText, showNavTitle } = item;

      return {
        navTitle,
        content: <BasicArticleSectionContent key={navTitle} text={text} onlyText={onlyText} />,
        showNavTitle,
      };
    });
  }, [t, language]);

  return <ArticleSectionPage title={t('about-service.title')} intro={t('about-service.intro')} sections={sections} />;
};

export default AboutService;
