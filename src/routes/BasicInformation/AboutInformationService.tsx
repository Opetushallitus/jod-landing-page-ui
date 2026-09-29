import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { Picture } from '@jod/design-system';

import articleImage1SrcFi from '@/../assets/landing-page-tietopalvelu-image-1-FI.jpg?preset=article';
import articleImage1SrcSv from '@/../assets/landing-page-tietopalvelu-image-1-SV.jpg?preset=article';
import articleIntroImageSrc from '@/../assets/landing-page-tietopalvelu-intro.jpg?preset=article';
import { BasicArticleSectionContent } from '@/components/ArticleSectionContent/BasicArticleSectionContent';
import { ArticleSectionPage } from '@/components/ArticleSectionPage/ArticleSectionPage';
import { articleImageSizes, createArticleSectionData } from '@/utils';

import { ArticleSection } from '../types';

const AboutInformationService = () => {
  const { t, i18n } = useTranslation();

  const articleImage1Src = i18n.language === 'sv' ? articleImage1SrcSv : articleImage1SrcFi;

  const sections: ArticleSection[] = React.useMemo(() => {
    return [
      createArticleSectionData(
        'image',
        <Picture picture={articleIntroImageSrc} alt="" className="h-auto w-full rounded" sizes={articleImageSizes} />,
        false,
        false,
      ),
      createArticleSectionData('1', <Trans i18nKey="about-information-service.sections.1.description" />, true, false),
      createArticleSectionData(
        t('about-information-service.sections.2.navTitle'),
        <Trans i18nKey="about-information-service.sections.2.description" />,
      ),

      createArticleSectionData(
        t('about-information-service.sections.3.navTitle'),
        <Trans i18nKey="about-information-service.sections.3.description-1" />,
      ),

      createArticleSectionData(
        'image2',
        <figure>
          <Picture
            picture={articleImage1Src}
            alt={t('about-information-service.sections.3.imageAlt')}
            className="h-auto w-full rounded"
            sizes={articleImageSizes}
          />
          <figcaption className="text-sm text-text-secondary mt-2 italic">
            {t('about-information-service.sections.3.imageCaption')}
          </figcaption>
        </figure>,
        false,
        false,
      ),
      createArticleSectionData(
        '',
        <Trans
          components={{
            ListItem: <li></li>,
            List: <ul className="mt-4 ml-7 list-outside list-disc"></ul>,
            Link: <a className="inline-flex text-accent hover:underline"></a>,
          }}
          i18nKey="about-information-service.sections.3.description-2"
        />,
      ),
    ].map((item) => {
      const { navTitle, text, onlyText, showNavTitle } = item;

      return {
        navTitle,
        content: <BasicArticleSectionContent key={navTitle} text={text} onlyText={onlyText} />,
        showNavTitle,
      };
    });
    // oxlint-disable-next-line eslint-plugin-react-hooks/exhaustive-deps
  }, [t]);

  return (
    <ArticleSectionPage
      title={t('about-information-service.title')}
      intro={t('about-information-service.intro')}
      sections={sections}
      hideNavigation
    />
  );
};

export default AboutInformationService;
