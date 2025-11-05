import { ArticleSectionNavigation } from '@/components/ArticleSectionNavigation/ArticleSectionNavigation';
import { IconHeading } from '@/components/IconHeading';
import { MainLayout } from '@/components/MainLayout/MainLayout';
import { ScrollHeading } from '@/components/ScrollHeading/ScrollHeading';
import { JodInfo, JodOpenInNew } from '@jod/design-system/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSection } from '../types';

const DataSources = () => {
  const { t } = useTranslation();
  const title = t('data-sources.title');

  const sections: ArticleSection[] = React.useMemo(() => {
    const contents = [
      getContentData(
        t('data-sources.sections.vipunen.navTitle'),
        [
          t('data-sources.sections.vipunen.paragraph-1'),
          t('data-sources.sections.vipunen.paragraph-2'),
          t('data-sources.sections.vipunen.paragraph-3'),
        ],
        [
          getLinkData(
            t('data-sources.sections.vipunen.links.main.label'),
            t('data-sources.sections.vipunen.links.main.href'),
          ),
        ],
      ),
      getContentData(
        t('data-sources.sections.tyomarkkinatori.navTitle'),
        [
          t('data-sources.sections.tyomarkkinatori.paragraph-1'),
          t('data-sources.sections.tyomarkkinatori.paragraph-2'),
          t('data-sources.sections.tyomarkkinatori.paragraph-3'),
          t('data-sources.sections.tyomarkkinatori.paragraph-4'),
        ],
        [
          getLinkData(
            t('data-sources.sections.tyomarkkinatori.links.main.label'),
            t('data-sources.sections.tyomarkkinatori.links.main.href'),
          ),
          getLinkData(
            t('data-sources.sections.tyomarkkinatori.links.jobs.label'),
            t('data-sources.sections.tyomarkkinatori.links.jobs.href'),
          ),
          getLinkData(
            t('data-sources.sections.tyomarkkinatori.links.skills.label'),
            t('data-sources.sections.tyomarkkinatori.links.skills.href'),
          ),
          getLinkData(
            t('data-sources.sections.tyomarkkinatori.links.statistics.label'),
            t('data-sources.sections.tyomarkkinatori.links.statistics.href'),
          ),
        ],
      ),
      getContentData(
        t('data-sources.sections.tilastokeskus.navTitle'),
        [
          t('data-sources.sections.tilastokeskus.paragraph-1'),
          t('data-sources.sections.tilastokeskus.paragraph-2'),
          t('data-sources.sections.tilastokeskus.paragraph-3'),
          t('data-sources.sections.tilastokeskus.paragraph-4'),
        ],
        [
          getLinkData(
            t('data-sources.sections.tilastokeskus.links.main.label'),
            t('data-sources.sections.tilastokeskus.links.main.href'),
          ),
        ],
      ),
      getContentData(
        t('data-sources.sections.opintopolku.navTitle'),
        [
          t('data-sources.sections.opintopolku.paragraph-1'),
          t('data-sources.sections.opintopolku.paragraph-2'),
          t('data-sources.sections.opintopolku.paragraph-3'),
          t('data-sources.sections.opintopolku.paragraph-4'),
        ],
        [
          getLinkData(
            t('data-sources.sections.opintopolku.links.main.label'),
            t('data-sources.sections.opintopolku.links.main.href'),
          ),
        ],
      ),
      getContentData(
        t('data-sources.sections.koto.navTitle'),
        [t('data-sources.sections.koto.paragraph-1'), t('data-sources.sections.koto.paragraph-2')],
        [
          getLinkData(
            t('data-sources.sections.koto.links.main.label'),
            t('data-sources.sections.koto.links.main.href'),
          ),
        ],
      ),
      getContentData(
        t('data-sources.sections.cedefop.navTitle'),
        [
          t('data-sources.sections.cedefop.paragraph-1'),
          t('data-sources.sections.cedefop.paragraph-2'),
          t('data-sources.sections.cedefop.paragraph-3'),
        ],
        [
          getLinkData(
            t('data-sources.sections.cedefop.links.main.label'),
            t('data-sources.sections.cedefop.links.main.href'),
          ),
        ],
      ),
      getContentData(
        t('data-sources.sections.oef.navTitle'),
        [
          t('data-sources.sections.oef.paragraph-1'),
          t('data-sources.sections.oef.paragraph-2'),
          t('data-sources.sections.oef.paragraph-3'),
          t('data-sources.sections.oef.paragraph-4'),
        ],
        [getLinkData(t('data-sources.sections.oef.links.main.label'), t('data-sources.sections.oef.links.main.href'))],
      ),
      getContentData(
        t('data-sources.sections.eperusteet.navTitle'),
        [
          t('data-sources.sections.eperusteet.paragraph-1'),
          t('data-sources.sections.eperusteet.paragraph-2'),
          t('data-sources.sections.eperusteet.paragraph-3'),
        ],
        [
          getLinkData(
            t('data-sources.sections.eperusteet.links.main.label'),
            t('data-sources.sections.eperusteet.links.main.href'),
          ),
        ],
      ),
      getContentData(
        t('data-sources.sections.prh.navTitle'),
        [t('data-sources.sections.prh.paragraph-1'), t('data-sources.sections.prh.paragraph-2')],
        [getLinkData(t('data-sources.sections.prh.links.main.label'), t('data-sources.sections.prh.links.main.href'))],
      ),
    ];

    return contents.map<ArticleSection>(({ navTitle, paragraphs, links }) => {
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
                        className="inline-flex text-accent hover:underline"
                      >
                        {l.label}
                        <JodOpenInNew ariaLabel={t('external-link')} />
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
                  className="inline-flex text-accent hover:underline"
                >
                  {links[0].label}
                  <JodOpenInNew ariaLabel={t('external-link')} />
                </a>
              </p>
            )}
          </div>
        ),
      };
    });
  }, [t]);

  return (
    <MainLayout navChildren={<ArticleSectionNavigation sections={sections} />}>
      <title>{title}</title>

      <IconHeading icon={<JodInfo />} title={title} testId="data-sources-title" />

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

const getLinkData = (label: string, href: string) => {
  return { label, href };
};

const getContentData = (navTitle: string, paragraphs: string[], links: { label: string; href: string }[]) => {
  return { navTitle, paragraphs, links };
};

export default DataSources;
