import { IconHeading } from '@/components/IconHeading';
import { MainLayout } from '@/components/MainLayout/MainLayout';
import { ScrollHeading } from '@/components/ScrollHeading/ScrollHeading';
import { getLinkTo } from '@/utils/routeUtils';
import { MenuSection, PageNavigation } from '@jod/design-system';
import { JodInfo } from '@jod/design-system/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSection } from '../types';

const DataSources = () => {
  const { t } = useTranslation();
  const title = t('data-sources.title');

  const sections: ArticleSection[] = React.useMemo(() => {
    const baseKey = 'data-sources.sections';
    const sectionKeys = [
      'vipunen',
      'tyomarkkinatori',
      'tilastokeskus',
      'opintopolku',
      'koto',
      'cedefop',
      'oef',
      'eperusteet',
      'prh',
    ];

    return sectionKeys.map<ArticleSection>((key) => {
      const navTitle = t(`${baseKey}.${key}.navTitle`);
      const paragraphs = t(`${baseKey}.${key}.paragraphs`, { returnObjects: true }) as unknown as string[];
      const links = t(`${baseKey}.${key}.links`, { returnObjects: true }) as unknown as {
        label: string;
        href: string;
      }[];
      const readMore = t('data-sources.read-more');

      return {
        navTitle,
        content: (
          <div>
            {paragraphs.map((p) => (
              <p key={p.slice(0, 25)} className="mb-4 last:mb-0">
                {p}
              </p>
            ))}
            {links?.length > 1 ? (
              <>
                <p className="mb-2">{readMore}</p>
                <ul className="ml-6 list-disc">
                  {links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="mb-2">
                {readMore}{' '}
                <a
                  href={links[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {links[0].label}
                </a>
              </p>
            )}
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

      <IconHeading icon={<JodInfo />} title={title} dataTestId="data-sources-title" />

      <div className="font-arial">
        <div className="flex flex-col mb-7">
          <p className="text-body-lg-mobile sm:text-body-lg">{t('data-sources.intro')}</p>
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

export default DataSources;
