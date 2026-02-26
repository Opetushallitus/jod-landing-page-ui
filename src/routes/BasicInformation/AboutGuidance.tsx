import articleImageSrc from '@/../assets/landing-page-osaamispolku-ohjaajille.jpg';
import { BasicArticleSectionContent } from '@/components/ArticleSectionContent/BasicArticleSectionContent';
import { ArticleSectionPage } from '@/components/ArticleSectionPage/ArticleSectionPage';
import { createArticleSectionData } from '@/utils';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { ArticleSection } from '../types';

const AboutGuidance = () => {
  const { t } = useTranslation();

  const sections: ArticleSection[] = React.useMemo(() => {
    return [
      createArticleSectionData('1', <img src={articleImageSrc} alt="" className="w-full rounded" />, false, false),
      createArticleSectionData('2', <Trans i18nKey="about-guidance.sections.1.description" />, true, false),

      createArticleSectionData(
        t('about-guidance.sections.2.navTitle'),
        <Trans i18nKey="about-guidance.sections.2.description" />,
      ),
      createArticleSectionData(
        t('about-guidance.sections.3.navTitle'),
        <Trans
          i18nKey="about-guidance.sections.3.description"
          // eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content
          components={{ Link: <a className="inline-flex text-accent hover:underline"></a> }}
        />,
      ),
      createArticleSectionData(
        t('about-guidance.sections.4.navTitle'),
        <Trans i18nKey="about-guidance.sections.4.description" />,
      ),
      createArticleSectionData(
        '3',
        <Trans
          i18nKey="about-guidance.sections.5.description"
          components={{
            List: <ul className="list-disc list-outside ml-7 mt-4"></ul>,
            ListItem: <li></li>,
            // eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content
            Link: <a className="inline-flex text-accent hover:underline"></a>,
          }}
        />,
        false,
        false,
      ),
    ].map((item) => {
      const { navTitle, text, onlyText, showNavTitle } = item;

      return {
        navTitle,
        content: <BasicArticleSectionContent key={navTitle} text={text} onlyText={onlyText} />,
        showNavTitle,
      };
    });
  }, [t]);

  return (
    <ArticleSectionPage
      title={t('about-guidance.title')}
      intro={t('about-guidance.intro')}
      sections={sections}
      hideNavigation
    />
  );
};

export default AboutGuidance;
