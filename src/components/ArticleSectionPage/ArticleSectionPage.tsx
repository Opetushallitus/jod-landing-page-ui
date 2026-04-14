import { useMediaQueries } from '@jod/design-system';
import { JodInfo } from '@jod/design-system/icons';

import type { ArticleSection } from '@/routes/types';

import { ArticleSectionNavigation } from '../ArticleSectionNavigation/ArticleSectionNavigation';
import { IconHeading } from '../IconHeading';
import { MainLayout } from '../MainLayout/MainLayout';
import { ScrollHeading } from '../ScrollHeading/ScrollHeading';

interface ArticleSectionPageProps {
  title: string;
  intro: string;
  sections: ArticleSection[];
  hideNavigation?: boolean;
}

export const ArticleSectionPage = ({ title, intro, sections, hideNavigation }: ArticleSectionPageProps) => {
  const { lg } = useMediaQueries();
  return (
    <MainLayout navChildren={!hideNavigation && <ArticleSectionNavigation sections={sections} />}>
      {!lg && !hideNavigation && (
        <div className="mb-8">
          <ArticleSectionNavigation sections={sections} activeIndicator="dot" collapsed />
        </div>
      )}
      <title>{title}</title>
      <IconHeading icon={<JodInfo />} title={title} testId="about-service-title" />

      <div>
        <div className="mb-7 flex flex-col">
          <p className="text-body-lg-mobile sm:text-body-lg">{intro}</p>
        </div>

        {sections.map((section) => (
          <div key={section.navTitle} className="mb-8 flex flex-col sm:mb-7">
            {section.showNavTitle ? (
              <ScrollHeading
                title={section.navTitle}
                heading="h2"
                className="mb-5 font-poppins text-heading-2-mobile sm:mb-3 sm:text-heading-2"
              />
            ) : null}
            <div className="font-arial text-body-md-mobile sm:text-body-md [&_p]:mt-6 [&_p]:first:mt-0 sm:[&_p]:mt-5">
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};
