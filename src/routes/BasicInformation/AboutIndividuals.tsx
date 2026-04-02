import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import articleImageSrcFi from '@/../assets/landing-page-osaamispolku-yksiloille-FI.jpg';
import articleIntroImageSrc from '@/../assets/landing-page-osaamispolku-yksiloille-intro.jpg';
import articleImageSrcSv from '@/../assets/landing-page-osaamispolku-yksiloille-SV.jpg';
import { BasicArticleSectionContent } from '@/components/ArticleSectionContent/BasicArticleSectionContent';
import { ArticleSectionPage } from '@/components/ArticleSectionPage/ArticleSectionPage';
import { createArticleSectionData } from '@/utils';

import { ArticleSection } from '../types';

const AboutIndividuals = () => {
  const { t, i18n } = useTranslation();

  const articleImageSrc = i18n.language === 'sv' ? articleImageSrcSv : articleImageSrcFi;

  const sections: ArticleSection[] = React.useMemo(() => {
    return [
      createArticleSectionData(
        'image',
        <img src={articleIntroImageSrc} alt="" className="w-full rounded" />,
        false,
        false,
      ),
      createArticleSectionData('1', <Trans i18nKey="about-individuals.sections.1.description" />, true, false),
      createArticleSectionData(
        t('about-individuals.sections.2.navTitle'),
        <Trans i18nKey="about-individuals.sections.2.description" />,
      ),
      createArticleSectionData(
        t('about-individuals.sections.3.navTitle'),
        <Trans i18nKey="about-individuals.sections.3.description" />,
      ),
      createArticleSectionData(
        t('about-individuals.sections.4.navTitle'),
        <Trans i18nKey="about-individuals.sections.4.description" />,
      ),
      createArticleSectionData(
        t('about-individuals.sections.5.navTitle'),
        <Trans i18nKey="about-individuals.sections.5.description" />,
      ),

      createArticleSectionData(
        'image2',
        <figure>
          <img src={articleImageSrc} alt={t('about-individuals.sections.5.navTitle')} className="w-full rounded" />
          <figcaption className="text-sm text-text-secondary mt-2 italic">
            {t('about-individuals.sections.6.description')}
          </figcaption>
        </figure>,
        false,
        false,
      ),
      createArticleSectionData(
        t('about-individuals.sections.7.navTitle'),
        <Trans i18nKey="about-individuals.sections.7.description" />,
      ),
      createArticleSectionData(
        t('about-individuals.sections.8.navTitle'),
        <Trans i18nKey="about-individuals.sections.8.description" />,
      ),
      createArticleSectionData(
        t('about-individuals.sections.9.navTitle'),
        <Trans i18nKey="about-individuals.sections.9.description" />,
      ),
      createArticleSectionData(
        t('about-individuals.sections.10.navTitle'),
        <Trans
          i18nKey="about-individuals.sections.10.description"
          components={{
            List: <ol className="mt-4 ml-7 list-outside list-decimal"></ol>,
            ListItem: <li></li>,
            // oxlint-disable-next-line jsx_a11y/anchor-has-content, jsx_a11y/anchor-is-valid
            Link: <a className="inline-flex text-accent hover:underline"></a>,
          }}
        />,
        false,
        true,
      ),
      createArticleSectionData(
        '11',
        <Trans
          i18nKey="about-individuals.sections.11.description"
          components={{
            // oxlint-disable-next-line jsx_a11y/anchor-has-content, jsx_a11y/anchor-is-valid
            Link: <a className="inline-flex text-accent hover:underline"></a>,
          }}
        />,
        true,
        false,
      ),
      createArticleSectionData(
        '12',
        <Trans
          i18nKey="about-individuals.sections.12.description"
          components={{
            List: <ul className="mt-4 ml-7 list-outside list-disc"></ul>,
            ListItem: <li></li>,
            // oxlint-disable-next-line jsx_a11y/anchor-has-content, jsx_a11y/anchor-is-valid
            Link: <a className="inline-flex text-accent hover:underline"></a>,
          }}
        />,
        true,
        false,
      ),
      createArticleSectionData('13', <Trans i18nKey="about-individuals.sections.13.description" />, true, false),
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
      title={t('about-individuals.title')}
      intro={t('about-individuals.intro')}
      sections={sections}
      hideNavigation
    />
  );
};

export default AboutIndividuals;
