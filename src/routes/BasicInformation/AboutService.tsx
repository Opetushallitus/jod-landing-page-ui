import { IconHeading } from '@/components/IconHeading';
import { MainLayout } from '@/components/MainLayout/MainLayout';
import { ScrollHeading } from '@/components/ScrollHeading/ScrollHeading';
import { getLinkTo } from '@/utils/routeUtils';
import { MenuSection, PageNavigation } from '@jod/design-system';
import { JodInfo } from '@jod/design-system/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSection } from '../types';

const AboutService = () => {
  const { t } = useTranslation();
  const title = t('about-service.title');

  const sections: ArticleSection[] = React.useMemo(() => {
    return (
      t('about-service.sections', { returnObjects: true }) as unknown as {
        navTitle: string;
        paragraphs: string[];
      }[]
    ).map((item) => {
      const { navTitle, paragraphs } = item;

      return {
        navTitle,
        content: (
          <div>
            {paragraphs.map((p) => (
              <p key={p.slice(0, 25)} className="mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        ),
      };
    });
  }, [t]);

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

      <IconHeading icon={<JodInfo />} title={title} dataTestId="about-service-title" />

      <div className="font-arial">
        <div className="flex flex-col mb-7">
          <p className="text-body-lg-mobile sm:text-body-lg">{t('about-service.intro')}</p>
        </div>

        {sections.map((section) => (
          <div key={section.navTitle} className="flex flex-col mb-7">
            <ScrollHeading
              title={section.navTitle}
              heading="h2"
              className="text-heading-2-mobile sm:text-heading-2 font-poppins mb-3"
            />
            <div className="flex flex-row justify-between">{section.content}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default AboutService;
