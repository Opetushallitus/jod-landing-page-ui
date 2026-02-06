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
import { getLinkTo } from '@/utils/routeUtils';
import { Button, cx, HeroCard, tidyClasses as tc, useMediaQueries } from '@jod/design-system';
import { JodOpenInNew } from '@jod/design-system/icons';
import React, { JSX } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  return (
    <>
      {/* Hero aspect ratio = ((9 / 21) * 1440px) = 617px */}
      <img
        src={heroSrc}
        alt=""
        role="none"
        className="w-(--breakpoint-xl) sm:h-[617px] object-cover xl:object-[50%_50%] lg:object-[58.5%_50%] md:object-[67.3%_50%] sm:object-[70%_50%] object-[71.7%_50%] pointer-events-none select-none touch-none"
        style={sm ? undefined : { height: heroHeight }}
        data-testid="home-hero"
      />
      <div className="mx-auto max-w-[1092px] px-5 sm:px-6 xl:px-0 relative" ref={firstCardRef}>
        <div className="max-w-[716px]">
          <HeroCard
            backgroundColor="var(--color-secondary-1-dark)"
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

const SecondaryCard = ({
  title,
  content,
  color,
  buttonIcon,
  buttonLabel,
  to,
  bgImageClassName,
}: {
  title: string;
  content: string;
  color: string;
  buttonIcon?: JSX.Element;
  buttonLabel: string;
  to: string;
  bgImageClassName: string;
}) => {
  return (
    <div className={`h-auto ${bgImageClassName} py-8`}>
      <div className="max-w-[1092px] mx-auto px-5 sm:px-6 xl:px-0">
        <div className="max-w-[716px]">
          <HeroCard
            size="sm"
            backgroundColor={color}
            content={content}
            title={title}
            to={to}
            linkComponent={ExternalLink}
            buttonLabel={buttonLabel}
            buttonIcon={buttonIcon}
          />
        </div>
      </div>
    </div>
  );
};

const ServiceBlock = ({
  title,
  text,
  buttonLabel,
  to,
  className,
}: {
  title: string;
  text: string;
  buttonLabel: string;
  to: string;
  className?: string;
}) => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div>
        <h3 className="text-heading-3-mobile sm:text-heading-3 mb-5">{title}</h3>
        <p className="text-body-sm-mobile sm:text-body-sm mb-6">{text}</p>
      </div>
      <div>
        <Button
          className={cx('active:hover:underline', 'group-focus:underline', className)}
          variant="accent"
          label={buttonLabel}
          icon={<JodOpenInNew ariaLabel={t('common:external-link')} />}
          iconSide="right"
          linkComponent={getLinkTo(to, {
            useAnchor: true,
            target: '_blank',
          })}
        />
      </div>
    </div>
  );
};

const Block = ({
  title,
  content,
  children,
  isLast,
}: {
  title: string;
  content?: string;
  children?: JSX.Element;
  isLast?: boolean;
}) => {
  return (
    <div
      className={`sm:pt-5 mt-11 px-5 sm:px-6 xl:px-0 max-w-[1092px] mx-auto print:px-0 print:mx-0 bg-white ${isLast ? 'pb-11' : 'mb-8'}`}
    >
      <h2 className="text-heading-1-mobile sm:text-heading-1 mb-6">{title}</h2>
      {content && <p className="text-body-lg-mobile sm:text-body-lg mb-8">{content}</p>}
      {children}
    </div>
  );
};

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
  /** For the css-classname */
  headingLevel?: 1 | 2;
  verticalPaddingClass?: string;
}

const Content = ({
  className = '',
  title,
  children,
  headingLevel = 1,
  verticalPaddingClass = 'py-7 lg:py-8',
}: ContainerProps & { title?: string }) => {
  const headingClass = `sm:text-heading-${headingLevel} text-heading-${headingLevel}-mobile`;

  return (
    <div
      className={tc([
        'mx-auto',
        'max-w-[1092px]',
        verticalPaddingClass,
        'px-5 sm:px-6 xl:px-0',
        'flex',
        'flex-col',
        'gap-5 sm:gap-6',
        className,
      ])}
    >
      {title && <h2 className={`${headingClass} max-w-[716px]`}>{title}</h2>}
      {children}
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

  return (
    <main role="main" className="mx-auto w-full max-w-(--breakpoint-xl) bg-white" id="jod-main">
      <title>{t('common:osaamispolku')}</title>
      <MainCard />
      <Content title={t('home.welcome.title')} className="mt-7 lg:mt-8" verticalPaddingClass="pt-7 lg:pt-8">
        <p className="text-body-lg whitespace-pre-line max-w-[716px]">{t('home.welcome.content')}</p>
      </Content>
      <Content title={t('home.competency-path-help.you.title')} headingLevel={2}>
        <div className="text-body-lg whitespace-pre-line max-w-[716px] flex flex-col sm:gap-6 gap-5">
          <p>{t('home.competency-path-help.you.text-1')}</p>
          <p>{t('home.competency-path-help.you.text-2')}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-7 sm:flex-wrap mt-6">
          <div className="flex flex-col gap-5 md:max-w-[320px]">
            <div className="h-[70px] flex flex-col justify-center items-start">{opintopolkuLogo}</div>
            <div>
              <Trans
                i18nKey="home.competency-path-help.opintopolku.text-1"
                components={{
                  Icon: <JodOpenInNew size={18} className="ml-1" ariaLabel={t('common:external-link')} />,
                  CustomLink: (
                    <Link
                      to={t('home.competency-path-help.opintopolku.url')}
                      className="inline-flex underline text-accent items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  ),
                }}
              />
            </div>
            <div>{t('home.competency-path-help.opintopolku.text-2')}</div>
          </div>
          <div className="flex flex-col gap-5 md:max-w-[320px]">
            <div className="h-[70px] flex flex-col justify-center items-start">{tmtLogo}</div>
            <div>
              <Trans
                i18nKey="home.competency-path-help.tyomarkkinatori.text-1"
                components={{
                  Icon: <JodOpenInNew size={18} className="ml-1" ariaLabel={t('common:external-link')} />,
                  CustomLink: (
                    <Link
                      to={t('home.competency-path-help.tyomarkkinatori.url')}
                      className="inline-flex underline text-accent items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  ),
                }}
              />
            </div>
            <div>{t('home.competency-path-help.tyomarkkinatori.text-2')}</div>
          </div>
          <div className="flex flex-col gap-5 md:max-w-[320px]">
            <div className="h-[70px] flex flex-col justify-center items-start">
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
                      className="inline-flex underline text-accent items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  ),
                }}
              />
            </div>
            <div>{t('home.competency-path-help.opinfi.text-2')}</div>
          </div>
        </div>
      </Content>
      <div className="mt-8">
        <h2 className="mb-8 mx-auto max-w-[1092px] px-5 sm:px-6 xl:px-0 text-heading-2 sm:text-heading-1">
          {t('home.sections.title')}
        </h2>
        <SecondaryCard
          color="#004e82"
          content={t('home.sections.osaamispolku.content')}
          title={t('home.sections.osaamispolku.title')}
          to={`/yksilo/${language}`}
          buttonLabel={t('home.sections.osaamispolku.link-text')}
          buttonIcon={<JodOpenInNew ariaLabel={t('common:external-link')} />}
          bgImageClassName=" bg-[url(@/../assets/osaamispolkuni.jpg)] bg-cover bg-[50%_50%]"
        />
        <SecondaryCard
          color="#00818A"
          content={t('home.sections.ohjaaja.content')}
          title={t('home.sections.ohjaaja.title')}
          to={`/ohjaaja/${language}`}
          buttonLabel={t('home.sections.ohjaaja.link-text')}
          buttonIcon={<JodOpenInNew ariaLabel={t('common:external-link')} />}
          bgImageClassName=" bg-[url(@/../assets/ohjaaja.jpg)] bg-cover bg-[50%_50%]"
        />
        <SecondaryCard
          color="#AD4298"
          content={t('home.sections.tietopalvelu.content')}
          title={t('home.sections.tietopalvelu.title')}
          to={`/tietopalvelu/${language}`}
          buttonIcon={<JodOpenInNew ariaLabel={t('common:external-link')} />}
          buttonLabel={t('home.sections.tietopalvelu.link-text')}
          bgImageClassName="bg-[url(@/../assets/tietopalvelu.jpg)] bg-cover bg-[50%_50%]"
        />
      </div>

      <Block title={t('home.palvelut.title')} isLast={true}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-7 sm:gap-y-11 mb-11 sm:mb-[176px]">
          <ServiceBlock
            title={t('home.palvelut.tool.title')}
            text={t('home.palvelut.tool.content')}
            buttonLabel={t('home.palvelut.tool.link-text')}
            to={`/yksilo/${language}/${t('home.services.tool.path')}`}
          />
          <ServiceBlock
            title={t('home.palvelut.ohjaus.title')}
            text={t('home.palvelut.ohjaus.content')}
            buttonLabel={t('home.palvelut.ohjaus.link-text')}
            to={`/ohjaaja/${language}/${t('home.services.ohjaus.path')}`}
            className="bg-secondary-2! active:bg-[#00889b]!"
          />
          <ServiceBlock
            title={t('home.palvelut.tietopalvelu.title')}
            text={t('home.palvelut.tietopalvelu.content')}
            buttonLabel={t('home.palvelut.tietopalvelu.link-text')}
            to={`/tietopalvelu/${language}/${t('home.palvelut.tietopalvelu.path')}`}
            className="bg-secondary-4! active:bg-[#ad3ea3]!"
          />
        </div>
      </Block>

      <SecondaryCard
        color="#00818A"
        content={t('home.personal-guidance.content')}
        title={t('home.personal-guidance.title')}
        to={t('common:navigation.extra.palveluhakemisto.url')}
        buttonLabel={t('home.personal-guidance.link-text')}
        buttonIcon={<JodOpenInNew ariaLabel={t('common:external-link')} />}
        bgImageClassName=" bg-[url(@/../assets/palveluhakemisto.jpg)] bg-cover bg-[50%_50%]"
      />
    </main>
  );
};

export default Home;
