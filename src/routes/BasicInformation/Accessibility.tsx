import { BasicArticleSectionContent } from '@/components/ArticleSectionContent/BasicArticleSectionContent';
import { ArticleSectionPage } from '@/components/ArticleSectionPage/ArticleSectionPage';
import { createArticleSectionData } from '@/utils';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { ArticleSection } from '../types';

const Accessibility = () => {
  const { t } = useTranslation();

  const sections: ArticleSection[] = React.useMemo(() => {
    return [
      createArticleSectionData(
        t('accessibility.sections.status.navTitle'),
        <>
          <p>{t('accessibility.sections.status.description')}</p>
          <ol className="ml-7 mt-4 mb-2 list-decimal flex flex-col gap-5">
            <li>{t('accessibility.sections.status.item-1')}</li>
            <li>{t('accessibility.sections.status.item-2')}</li>
            <li>{t('accessibility.sections.status.item-3')}</li>
            <li>{t('accessibility.sections.status.item-4')}</li>
            <li>{t('accessibility.sections.status.item-5')}</li>
            <li>{t('accessibility.sections.status.item-6')}</li>
            <li>{t('accessibility.sections.status.item-7')}</li>
            <li>{t('accessibility.sections.status.item-8')}</li>
            <li>{t('accessibility.sections.status.item-9')}</li>
            <li>{t('accessibility.sections.status.item-10')}</li>
            <li>{t('accessibility.sections.status.item-11')}</li>
            <li>{t('accessibility.sections.status.item-12')}</li>
            <li>{t('accessibility.sections.status.item-13')}</li>
            <li>{t('accessibility.sections.status.item-14')}</li>
          </ol>
        </>,
        false,
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
        content: <BasicArticleSectionContent key={navTitle} text={text} onlyText={item.onlyText} />,
      };
    });
  }, [t]);

  return <ArticleSectionPage title={t('accessibility.title')} intro={t('accessibility.intro')} sections={sections} />;
};

export default Accessibility;
