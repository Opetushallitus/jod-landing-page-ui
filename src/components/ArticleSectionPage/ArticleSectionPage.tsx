import { type ArticleSection } from '@/routes/types';
import { JodInfo } from '@jod/design-system/icons';
import { ArticleSectionNavigation } from '../ArticleSectionNavigation/ArticleSectionNavigation';
import { IconHeading } from '../IconHeading';
import { MainLayout } from '../MainLayout/MainLayout';
import { ScrollHeading } from '../ScrollHeading/ScrollHeading';

interface ArticleSectionPageProps {
  title: string;
  intro: string;
  sections: ArticleSection[];
}

export const ArticleSectionPage = ({ title, intro, sections }: ArticleSectionPageProps) => {
  return (
    <MainLayout navChildren={<ArticleSectionNavigation sections={sections} />}>
      <title>{title}</title>

      <IconHeading icon={<JodInfo />} title={title} dataTestId="about-service-title" />

      <div className="font-arial">
        <div className="flex flex-col mb-7">
          <p className="text-body-lg-mobile sm:text-body-lg">{intro}</p>
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
