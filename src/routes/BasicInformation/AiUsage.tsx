import { MainLayout } from '@/components';
import { ArticleAccordion } from '@/components/ArticleAccordion';
import { IconHeading } from '@/components/IconHeading';
import { InfoBox, InfoboxItem } from '@/components/InfoBox';
import { ScrollHeading } from '@/components/ScrollHeading/ScrollHeading';
import { getLinkTo } from '@/utils/routeUtils';
import { MenuSection, PageNavigation } from '@jod/design-system';
import { JodAi } from '@jod/design-system/icons';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { ArticleSection } from '../types';

const AiUsage = () => {
  const { t } = useTranslation();
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
          <div>
            <p className="mb-6 text-body-lg-mobile sm:text-body-lg">{t('ai-usage.why-ai.description')}</p>
            <p className="mb-5 text-body-md-mobile sm:text-body-md">{t('ai-usage.why-ai.possibilities.title')}</p>

            <div className="flex flex-col gap-1">
              <ArticleAccordion
                titleText={t('ai-usage.why-ai.possibilities.item-1.title')}
                content={<Trans i18nKey="ai-usage.why-ai.possibilities.item-1.description" />}
              />

              <ArticleAccordion
                titleText={t('ai-usage.why-ai.possibilities.item-2.title')}
                content={
                  <>
                    <p className="mb-3 font-poppins text-heading-5">
                      <Trans i18nKey="ai-usage.why-ai.possibilities.item-2.work.title" />
                    </p>
                    <p>{t('ai-usage.why-ai.possibilities.item-2.work.description-1')}</p>
                    <ul className="ml-6 mb-4 list-disc">
                      <li>{t('ai-usage.why-ai.possibilities.item-2.work.list.item-1')}</li>
                      <li>{t('ai-usage.why-ai.possibilities.item-2.work.list.item-2')}</li>
                      <li>{t('ai-usage.why-ai.possibilities.item-2.work.list.item-3')}</li>
                    </ul>
                    <Trans i18nKey="ai-usage.why-ai.possibilities.item-2.work.description-2" />

                    <p className="mt-4 mb-3 font-poppins text-heading-5">
                      <Trans i18nKey="ai-usage.why-ai.possibilities.item-2.education.title" />
                    </p>
                    <p>{t('ai-usage.why-ai.possibilities.item-2.education.description-1')}</p>
                    <ul className="ml-6 mb-3 list-disc">
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
          <div>
            <p>{t('ai-usage.ai-methods.description-1')}</p>
            <ul className="mt-3 ml-6 mb-3 list-disc">
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
          <div>
            <p>
              <Trans i18nKey={'ai-usage.security.description-1'} />
            </p>
            <ul className="ml-6 mb-4 list-disc">
              <li>{t('ai-usage.security.list.item-1')}</li>
              <li>{t('ai-usage.security.list.item-2')}</li>
              <li>{t('ai-usage.security.list.item-3')}</li>
              <li>{t('ai-usage.security.list.item-4')}</li>
            </ul>
            <Trans i18nKey={'ai-usage.security.description-2'} />
          </div>
        ),
      },
      {
        navTitle: t('ai-usage.effect.title'),
        content: (
          <div>
            <p>{t('ai-usage.effect.description')}</p>
            <ul className="ml-6 mb-3 list-disc">
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
          <div>
            <p>{t('ai-usage.functionality-tracking.description-1')}</p>
            <ul className="ml-6 mb-4 list-disc">
              <li>{t('ai-usage.functionality-tracking.list.item-1')}</li>
              <li>{t('ai-usage.functionality-tracking.list.item-2')}</li>
              <li>{t('ai-usage.functionality-tracking.list.item-3')}</li>
              <li>{t('ai-usage.functionality-tracking.list.item-4')}</li>
            </ul>
            <p>{t('ai-usage.functionality-tracking.description-2')}</p>
          </div>
        ),
      },
      {
        navTitle: t('ai-usage.limitation-of-liability.title'),
        content: (
          <p>
            <Trans i18nKey={'ai-usage.limitation-of-liability.description'} />
          </p>
        ),
      },
    ];
  }, [t, infoBoxItems]);

  const navChildren = React.useMemo(() => {
    const menuSection: MenuSection = {
      title: t('on-this-page'),
      linkItems: sections.map((section) => ({
        label: section.navTitle,
        LinkComponent: getLinkTo(`#${section.navTitle}`),
      })),
    };
    return <PageNavigation menuSection={menuSection} activeIndicator="dot" className="mb-4" />;
  }, [t, sections]);

  return (
    <MainLayout navChildren={navChildren}>
      <title>{title}</title>

      <IconHeading icon={<JodAi />} title={title} dataTestId="about-ai-title" />

      <div className="font-arial">
        {sections.map((section) => (
          <div key={section.navTitle} className="flex flex-col mb-7">
            <ScrollHeading
              title={section.navTitle}
              heading="h2"
              className={`text-heading-2-mobile sm:text-heading-2 font-poppins ${(section.showNavTitle ?? true) ? 'mb-3' : 'text-transparent text-[0px] size-0'}`}
            />
            <div className="flex flex-row justify-between">{section.content}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default AiUsage;
