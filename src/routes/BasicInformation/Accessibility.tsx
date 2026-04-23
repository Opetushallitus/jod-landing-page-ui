import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { BasicArticleSectionContent } from '@/components/ArticleSectionContent/BasicArticleSectionContent';
import { ArticleSectionPage } from '@/components/ArticleSectionPage/ArticleSectionPage';
import { createArticleSectionData } from '@/utils';

import { ArticleSection } from '../types';

const Accessibility = () => {
  const { t } = useTranslation();

  const sections: ArticleSection[] = React.useMemo(() => {
    return [
      createArticleSectionData(
        t('accessibility.sections.status.navTitle'),
        <>
          <p>{t('accessibility.sections.status.description')}</p>
          <ol className="mt-4 mb-2 ml-7 flex list-decimal flex-col gap-5">
            <Trans i18nKey="accessibility.sections.status.items" components={{ li: <li></li> }}></Trans>
          </ol>
        </>,
        false,
      ),

      createArticleSectionData(
        t('accessibility.sections.planned-fixes.navTitle'),
        <Trans i18nKey="accessibility.sections.planned-fixes.description" />,
      ),
      createArticleSectionData(
        t('accessibility.sections.updates.navTitle'),
        <Trans i18nKey="accessibility.sections.updates.description" />,
      ),
      createArticleSectionData(
        t('accessibility.sections.feedback.navTitle'),
        <Trans i18nKey="accessibility.sections.feedback.description" />,
      ),
    ].map((item) => {
      const { navTitle, text, showNavTitle } = item;

      return {
        navTitle,
        content: <BasicArticleSectionContent key={navTitle} text={text} onlyText={item.onlyText} />,
        showNavTitle,
      };
    });
  }, [t]);

  return <ArticleSectionPage title={t('accessibility.title')} intro={t('accessibility.intro')} sections={sections} />;
};

export default Accessibility;
