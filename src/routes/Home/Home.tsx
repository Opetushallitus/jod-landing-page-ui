import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { Accordion, cx, HeroCard, useMediaQueries } from '@jod/design-system';
import { JodBuild, JodCertificate, JodFavs, JodOpenInNew, JodQuestionMark } from '@jod/design-system/icons';

import heroSrc1 from '@/../assets/landing-page-hero-1.jpg';
import heroSrc2 from '@/../assets/landing-page-hero-2.jpg';
import heroSrc3 from '@/../assets/landing-page-hero-3.jpg';
import heroSrc4 from '@/../assets/landing-page-hero-4.jpg';
import {
  LogoOpinfi,
  LogoOpintopolkuEn,
  LogoOpintopolkuFi,
  LogoOpintopolkuSv,
  LogoTyomarkkinatoriEn,
  LogoTyomarkkinatoriFi,
  LogoTyomarkkinatoriSv,
} from '@/components/Logos';

const ExternalLink = ({
  children,
  to,
  className,
}: {
  to: object | string;
  className?: string;
  children: React.ReactNode;
}) => (
  <a href={to as string} className={className} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const MainCard = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const { sm } = useMediaQueries();

  const firstCardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (firstCardRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.target.isSameNode(firstCardRef.current) && firstCardRef.current?.style) {
            firstCardRef.current.style.marginTop = `-${(2 * entry.contentRect.height) / 3}px`;
          }
        }
      });
      resizeObserver.observe(firstCardRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  // Rotate hero image weekly
  const heroSrc = React.useMemo(() => {
    const heroImages = [heroSrc1, heroSrc2, heroSrc3, heroSrc4];
    const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
    return heroImages[weekNumber % heroImages.length];
  }, []);

  const heroHeight = React.useMemo(() => {
    return window.innerHeight - 68;
    // oxlint-disable-next-line eslint-plugin-react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  return (
    <>
      {/* Hero aspect ratio = ((9 / 21) * 1440px) = 617px */}
      <img
        src={heroSrc}
        alt=""
        role="none"
        className="pointer-events-none w-(--breakpoint-xl) touch-none object-cover object-[71.7%_50%] select-none sm:h-[617px] sm:object-[70%_50%] md:object-[67.3%_50%] lg:object-[58.5%_50%] xl:object-[50%_50%]"
        style={sm ? undefined : { height: heroHeight }}
        data-testid="home-hero"
      />
      <div className="relative mx-auto max-w-[1092px] px-5 sm:px-6 xl:px-0" ref={firstCardRef}>
        <div className="max-w-[716px]">
          <HeroCard
            backgroundColor="var(--color-secondary-1-dark-2)"
            content={t('home.hero.content')}
            title={t('home.hero.title')}
            titleLevel={1}
            buttonLabel={t('home.hero.link-text')}
            buttonIcon={<JodOpenInNew ariaLabel={t('common:external-link')} />}
            to={`/yksilo/${language}`}
            linkComponent={ExternalLink}
          />
        </div>
      </div>
    </>
  );
};

interface ContentProps {
  className?: string;
  children?: React.ReactNode;
  /** For the css-classname */
  headingLevel?: 1 | 2;
  verticalPaddingClass?: string;
  headingClassName?: string;
}

const Content = ({
  className = '',
  headingClassName = '',
  title,
  children,
  headingLevel = 1,
  verticalPaddingClass = 'py-7 lg:py-8',
}: ContentProps & { title?: string }) => {
  const headingClass = `sm:text-heading-${headingLevel} text-heading-${headingLevel}-mobile`;

  return (
    <div
      className={cx(
        'mx-auto',
        'max-w-[1092px]',
        verticalPaddingClass,
        'px-5 sm:px-6 xl:px-0',
        'flex',
        'flex-col',
        'gap-5 sm:gap-6',
        className,
      )}
    >
      {title && <h2 className={`${headingClass} ${headingClassName} max-w-[716px]`}>{title}</h2>}
      {children}
    </div>
  );
};

interface HomeAccordionProps {
  title: string;
  content: string;
  icon: React.ReactNode;
  setIsOpen?: (isOpen: boolean) => void;
  isOpen?: boolean;
}
const HomeAccordion = ({ title, content, icon, isOpen, setIsOpen }: HomeAccordionProps) => {
  const triggerId = React.useId();
  const contentId = `${triggerId}-panel`;
  return (
    <div className="flex w-full items-center gap-4 bg-white px-4 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.15)] sm:max-w-[717px]">
      <Accordion
        ariaLabel={title}
        triggerId={triggerId}
        ariaControls={contentId}
        initialState={false}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={
          <div className="flex items-center gap-4">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary-gray text-white">
              {icon}
            </div>
            {title}
          </div>
        }
        ellipsis={false}
        className="w-full"
      >
        <section id={contentId} className="mt-3 mb-6 ml-[44px] font-arial text-body-md-mobile sm:text-body-md">
          {content}
        </section>
      </Accordion>
    </div>
  );
};

const Home = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const opintopolkuLogo = React.useMemo(() => {
    switch (language) {
      case 'sv':
        return (
          <LogoOpintopolkuSv
            aria-label={t('home.how-competency-path-helps-you-opintopolku-title')}
            className="h-7 max-w-full"
          />
        );
      case 'en':
        return (
          <LogoOpintopolkuEn
            aria-label={t('home.how-competency-path-helps-you-opintopolku-title')}
            className="h-7 max-w-full"
          />
        );
      default:
        return (
          <LogoOpintopolkuFi aria-label={t('home.how-competency-path-helps-you-opintopolku-title')} className="h-7" />
        );
    }
  }, [language, t]);

  const tmtLogo = React.useMemo(() => {
    switch (language) {
      case 'sv':
        return (
          <LogoTyomarkkinatoriSv
            aria-label={t('home.how-competency-path-helps-you-tmt-title')}
            className="h-10 max-w-full"
          />
        );
      case 'en':
        return (
          <LogoTyomarkkinatoriEn
            aria-label={t('home.how-competency-path-helps-you-tmt-title')}
            className="h-10 max-w-full"
          />
        );
      default:
        return (
          <LogoTyomarkkinatoriFi
            aria-label={t('home.how-competency-path-helps-you-tmt-title')}
            className="h-10 max-w-full"
          />
        );
    }
  }, [language, t]);

  const [openAccordion, setOpenAccordion] = React.useState<1 | 2 | 3 | 4 | null>(null);

  return (
    <main role="main" className="mx-auto w-full max-w-(--breakpoint-xl) bg-white pb-11" id="jod-main">
      <title>{t('common:osaamispolku')}</title>
      <MainCard />
      <Content title={t('home.welcome.title')} className="mt-7 lg:mt-8" verticalPaddingClass="pt-7 lg:pt-8">
        <p className="max-w-[716px] text-body-lg whitespace-pre-line">{t('home.welcome.content')}</p>
      </Content>
      <Content title={t('home.competency-path-help.situation.title')} headingLevel={2}>
        <div className="flex flex-col gap-3">
          <HomeAccordion
            isOpen={openAccordion === 1}
            setIsOpen={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
            title={t('home.competency-path-help.situation.accordion-1-title')}
            content={t('home.competency-path-help.situation.accordion-1-text')}
            icon={<JodQuestionMark size={18} />}
          />
          <HomeAccordion
            isOpen={openAccordion === 2}
            setIsOpen={() => setOpenAccordion(openAccordion === 2 ? null : 2)}
            title={t('home.competency-path-help.situation.accordion-2-title')}
            content={t('home.competency-path-help.situation.accordion-2-text')}
            icon={<JodBuild size={18} />}
          />
          <HomeAccordion
            isOpen={openAccordion === 3}
            setIsOpen={() => setOpenAccordion(openAccordion === 3 ? null : 3)}
            title={t('home.competency-path-help.situation.accordion-3-title')}
            content={t('home.competency-path-help.situation.accordion-3-text')}
            icon={<JodCertificate size={18} />}
          />
          <HomeAccordion
            isOpen={openAccordion === 4}
            setIsOpen={() => setOpenAccordion(openAccordion === 4 ? null : 4)}
            title={t('home.competency-path-help.situation.accordion-4-title')}
            content={t('home.competency-path-help.situation.accordion-4-text')}
            icon={<JodFavs size={18} />}
          />
        </div>
      </Content>
      <Content className="grid grid-cols-1 gap-7 lg:grid-cols-3">
        <HeroCard
          backgroundColor="var(--color-secondary-1-dark-2)"
          content={t('home.sections.osaamispolku.content')}
          title={t('home.sections.osaamispolku.title')}
          size="sm"
          titleLevel={2}
          linkComponent={ExternalLink}
          buttonLabel={t('home.sections.osaamispolku.link-text')}
          buttonVariant="white"
          to={`/yksilo/${language}`}
          buttonIcon={<JodOpenInNew ariaLabel={t('common:external-link')} />}
        />
        <HeroCard
          backgroundColor="var(--color-secondary-2-dark)"
          content={t('home.sections.ohjaaja.content')}
          title={t('home.sections.ohjaaja.title')}
          size="sm"
          titleLevel={2}
          linkComponent={ExternalLink}
          to={`/ohjaaja/${language}`}
          buttonLabel={t('home.sections.ohjaaja.link-text')}
          buttonIcon={<JodOpenInNew ariaLabel={t('common:external-link')} />}
        />
        <HeroCard
          backgroundColor="var(--color-secondary-4-dark)"
          content={t('home.sections.tietopalvelu.content')}
          title={t('home.sections.tietopalvelu.title')}
          to={`/tietopalvelu/${language}`}
          size="sm"
          titleLevel={2}
          linkComponent={ExternalLink}
          buttonLabel={t('home.sections.tietopalvelu.link-text')}
          buttonIcon={<JodOpenInNew ariaLabel={t('common:external-link')} />}
        />
      </Content>
      <Content title={t('home.competency-path-help.you.title')} headingLevel={2} headingClassName="max-w-[748px]!">
        <div className="flex max-w-[748px] flex-col gap-5 text-body-lg whitespace-pre-line sm:gap-6">
          <p>{t('home.competency-path-help.you.text-1')}</p>
          <p>{t('home.competency-path-help.you.text-2')}</p>
        </div>
        <div className="mt-6 flex flex-col gap-7 sm:flex-row sm:flex-wrap">
          <div className="flex flex-col gap-5 md:max-w-[320px]">
            <div className="flex h-[70px] flex-col items-start justify-center">{opintopolkuLogo}</div>
            <div>
              <Trans
                i18nKey="home.competency-path-help.opintopolku.text-1"
                components={{
                  Icon: <JodOpenInNew size={18} className="ml-1" ariaLabel={t('common:external-link')} />,
                  CustomLink: (
                    <Link
                      to={t('home.competency-path-help.opintopolku.url')}
                      className="inline-flex items-center text-accent underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  ),
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 md:max-w-[320px]">
            <div className="flex h-[70px] flex-col items-start justify-center">{tmtLogo}</div>
            <div>
              <Trans
                i18nKey="home.competency-path-help.tyomarkkinatori.text-1"
                components={{
                  Icon: <JodOpenInNew size={18} className="ml-1" ariaLabel={t('common:external-link')} />,
                  CustomLink: (
                    <Link
                      to={t('home.competency-path-help.tyomarkkinatori.url')}
                      className="inline-flex items-center text-accent underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  ),
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 md:max-w-[320px]">
            <div className="flex h-[70px] flex-col items-start justify-center">
              <LogoOpinfi
                aria-label={t('home.how-competency-path-helps-you-opinfi-title')}
                className="h-6 max-w-full"
              />
            </div>
            <div>
              <Trans
                i18nKey="home.competency-path-help.opinfi.text-1"
                components={{
                  Icon: <JodOpenInNew size={18} className="ml-1" ariaLabel={t('common:external-link')} />,
                  CustomLink: (
                    <Link
                      to={t('home.competency-path-help.opinfi.url')}
                      className="inline-flex items-center text-accent underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </Content>

      <Content className="mb-11">
        <div className="mb-11 max-w-[716px]">
          <HeroCard
            content={t('home.personal-guidance.content')}
            title={t('home.personal-guidance.title')}
            to={t('common:navigation.extra.palveluhakemisto.url')}
            linkComponent={ExternalLink}
            buttonLabel={t('home.personal-guidance.link-text')}
            buttonIcon={<JodOpenInNew ariaLabel={t('common:external-link')} />}
            titleLevel={2}
            titleClassName="text-heading-2"
            backgroundColor="var(--color-secondary-2-dark)"
          />
        </div>
      </Content>
    </main>
  );
};

export default Home;
