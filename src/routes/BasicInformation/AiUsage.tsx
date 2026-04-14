import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { useMediaQueries } from '@jod/design-system';
import { JodAi } from '@jod/design-system/icons';

import { MainLayout } from '@/components';
import { ArticleAccordion } from '@/components/ArticleAccordion';
import { ArticleSectionNavigation } from '@/components/ArticleSectionNavigation/ArticleSectionNavigation';
import { IconHeading } from '@/components/IconHeading';
import { InfoBox, InfoboxItem } from '@/components/InfoBox';
import { ScrollHeading } from '@/components/ScrollHeading/ScrollHeading';

import type { ArticleSection } from '../types';

const AiUsage = () => {
  const { t } = useTranslation();
  const { lg } = useMediaQueries();
  const title = t('ai-usage.title');

  const infoBoxItems: InfoboxItem[] = React.useMemo(() => {
    return [
      {
        label: t('ai-usage.ai-methods.data-location'),
        content: t('ai-usage.ai-methods.data-location-eu'),
      },
      {
        label: t('ai-usage.ai-methods.data-preservation-time'),
        content: t('ai-usage.ai-methods.data-preservation-time-until-delete'),
      },
    ];
  }, [t]);

  const sections: ArticleSection[] = React.useMemo(() => {
    return [
      {
        navTitle: t('ai-usage.why-ai.title'),
        content: (
          <div className="max-w-full">
            <p className="mb-7 text-body-lg-mobile sm:text-body-lg">{t('ai-usage.why-ai.description')}</p>
            <p className="mb-5 text-body-md-mobile sm:text-body-md">{t('ai-usage.why-ai.possibilities.title')}</p>

            <div className="flex flex-col gap-2">
              <ArticleAccordion
                titleText={t('ai-usage.why-ai.possibilities.item-1.title')}
                content={<Trans i18nKey="ai-usage.why-ai.possibilities.item-1.description" />}
              />

              <ArticleAccordion
                titleText={t('ai-usage.why-ai.possibilities.item-2.title')}
                content={
                  <>
                    <p className="mb-5 font-poppins text-heading-5 sm:mb-3">
                      <Trans i18nKey="ai-usage.why-ai.possibilities.item-2.work.title" />
                    </p>
                    <p>{t('ai-usage.why-ai.possibilities.item-2.work.description-1')}</p>
                    <ul className="mb-4 ml-6 list-disc">
                      <li>{t('ai-usage.why-ai.possibilities.item-2.work.list.item-1')}</li>
                      <li>{t('ai-usage.why-ai.possibilities.item-2.work.list.item-2')}</li>
                      <li>{t('ai-usage.why-ai.possibilities.item-2.work.list.item-3')}</li>
                    </ul>
                    <Trans i18nKey="ai-usage.why-ai.possibilities.item-2.work.description-2" />

                    <p className="mt-8 mb-5 font-poppins text-heading-5 sm:mt-7 sm:mb-3">
                      <Trans i18nKey="ai-usage.why-ai.possibilities.item-2.education.title" />
                    </p>
                    <p>{t('ai-usage.why-ai.possibilities.item-2.education.description-1')}</p>
                    <ul className="mb-3 ml-6 list-disc">
                      <li>{t('ai-usage.why-ai.possibilities.item-2.education.list.item-1')}</li>
                      <li>{t('ai-usage.why-ai.possibilities.item-2.education.list.item-2')}</li>
                      <li>{t('ai-usage.why-ai.possibilities.item-2.education.list.item-3')}</li>
                    </ul>
                    <p>{t('ai-usage.why-ai.possibilities.item-2.education.description-2')}</p>
                  </>
                }
              />

              <ArticleAccordion
                titleText={t('ai-usage.why-ai.possibilities.item-3.title')}
                content={<Trans i18nKey="ai-usage.why-ai.possibilities.item-3.description" />}
              />

              <ArticleAccordion
                titleText={t('ai-usage.why-ai.possibilities.item-4.title')}
                content={<Trans i18nKey="ai-usage.why-ai.possibilities.item-4.description" />}
              />

              <ArticleAccordion
                titleText={t('ai-usage.why-ai.possibilities.item-5.title')}
                content={<Trans i18nKey="ai-usage.why-ai.possibilities.item-5.description" />}
              />
            </div>
          </div>
        ),
      },
      {
        navTitle: t('ai-usage.ai-methods.title'),
        content: (
          <div className="[&_p]:mt-6 [&_p]:first:mt-0 sm:[&_p]:mt-5">
            {t('ai-usage.ai-methods.description-1')}
            <ul className="mt-3 mb-5 ml-6 list-disc sm:mb-4">
              <li>{t('ai-usage.ai-methods.list.item-1')}</li>
              <li>{t('ai-usage.ai-methods.list.item-2')}</li>
              <li>{t('ai-usage.ai-methods.list.item-3')}</li>
              <li>{t('ai-usage.ai-methods.list.item-4')}</li>
              <li>{t('ai-usage.ai-methods.list.item-5')}</li>
            </ul>
            <p>{t('ai-usage.ai-methods.description-2')}</p>

            <InfoBox items={infoBoxItems} />
          </div>
        ),
      },
      {
        navTitle: t('ai-usage.security.title'),
        content: (
          <div className="[&_p]:mt-6 [&_p]:first:mt-0 sm:[&_p]:mt-5">
            <Trans i18nKey="ai-usage.security.description-1" />

            <ul className="mt-3 ml-6 list-disc">
              <li>{t('ai-usage.security.list.item-1')}</li>
              <li>{t('ai-usage.security.list.item-2')}</li>
              <li>{t('ai-usage.security.list.item-3')}</li>
              <li>{t('ai-usage.security.list.item-4')}</li>
            </ul>
            <Trans i18nKey="ai-usage.security.description-2" />
          </div>
        ),
      },
      {
        navTitle: t('ai-usage.effect.title'),
        content: (
          <div className="[&_p]:mt-6 [&_p]:first:mt-0 sm:[&_p]:mt-5">
            <Trans i18nKey="ai-usage.effect.description" />

            <ul className="mt-3 ml-6 list-disc">
              <li>{t('ai-usage.effect.list.item-1')}</li>
              <li>{t('ai-usage.effect.list.item-2')}</li>
              <li>{t('ai-usage.effect.list.item-3')}</li>
              <li>{t('ai-usage.effect.list.item-4')}</li>
            </ul>
          </div>
        ),
      },
      {
        navTitle: t('ai-usage.functionality-tracking.title'),
        content: (
          <div className="[&_p]:mt-6 [&_p]:first:mt-0 sm:[&_p]:mt-5">
            {t('ai-usage.functionality-tracking.description-1')}
            <ul className="mt-3 ml-6 list-disc">
              <li>{t('ai-usage.functionality-tracking.list.item-1')}</li>
              <li>{t('ai-usage.functionality-tracking.list.item-2')}</li>
              <li>{t('ai-usage.functionality-tracking.list.item-3')}</li>
              <li>{t('ai-usage.functionality-tracking.list.item-4')}</li>
            </ul>
            {t('ai-usage.functionality-tracking.description-2')}
          </div>
        ),
      },
      {
        navTitle: t('ai-usage.limitation-of-liability.title'),
        content: (
          <div className="[&_p]:mt-6 [&_p]:first:mt-0 sm:[&_p]:mt-5">
            <Trans i18nKey="ai-usage.limitation-of-liability.description" />
          </div>
        ),
      },
    ];
  }, [t, infoBoxItems]);

  return (
    <MainLayout navChildren={<ArticleSectionNavigation sections={sections} />}>
      {!lg && (
        <div className="mb-8">
          <ArticleSectionNavigation sections={sections} activeIndicator="dot" collapsed />
        </div>
      )}
      <title>{title}</title>
      <IconHeading icon={<JodAi />} title={title} testId="about-ai-title" />

      <div>
        {sections.map((section) => (
          <div key={section.navTitle} className="mb-8 flex flex-col sm:mb-7">
            <ScrollHeading
              title={section.navTitle}
              heading="h2"
              className={`font-poppins text-heading-2-mobile sm:text-heading-2 ${(section.showNavTitle ?? true) ? 'mb-3' : 'size-0 text-[0px] text-transparent'}`}
            />
            <div className="flex flex-row justify-between font-arial text-body-md-mobile sm:text-body-md">
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default AiUsage;
