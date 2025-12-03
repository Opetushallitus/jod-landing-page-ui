import heroSrc from '@/../assets/landing-page-hero.jpg';
import { TimelineImage } from '@/components/TimelineImage';
import { getLinkTo } from '@/utils/routeUtils';
import { Button, cx, HeroCard, tidyClasses as tc } from '@jod/design-system';
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

  return (
    <>
      {/* Hero aspect ratio = ((9 / 21) * 1440px) = 617px */}
      <img
        src={heroSrc}
        alt=""
        role="none"
        className="w-(--breakpoint-xl) sm:h-[617px] h-[calc(100vh-64px)] object-cover xl:object-[50%_50%] lg:object-[58.5%_50%] md:object-[67.3%_50%] sm:object-[70%_50%] object-[71.7%_50%]"
        data-testid="home-hero"
      />

      <div
        className="mx-auto max-w-[1092px] grid grid-cols-1 lg:grid-cols-2 px-5 sm:px-6 xl:px-0 relative"
        ref={firstCardRef}
      >
        <HeroCard
          backgroundColor="var(--color-secondary-1-dark)"
          content={t('home.hero-content')}
          title={t('home.hero-title')}
          titleLevel={1}
          buttonLabel={t('home.hero-button-label')}
          buttonIcon={<JodOpenInNew ariaLabel={t('external-link')} />}
          to={`/yksilo/${language}`}
          linkComponent={ExternalLink}
        />
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
          icon={<JodOpenInNew ariaLabel={t('external-link')} />}
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
      className={`mt-10 px-5 sm:px-6 xl:px-0 max-w-[1092px] mx-auto print:px-0 print:mx-0 bg-white ${isLast ? 'pb-11' : 'mb-8'}`}
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
}

const Content = ({ className = '', title, children }: ContainerProps & { title?: string }) => {
  return (
    <div
      className={tc([
        'mx-auto',
        'max-w-[1092px]',
        'py-7 lg:py-8',
        'px-5 sm:px-6 xl:px-0',
        'flex',
        'flex-col',
        'gap-7',
        className,
      ])}
    >
      {title && <h2 className="sm:text-heading-1 text-heading-1-mobile max-w-[716px]">{title}</h2>}
      {children}
    </div>
  );
};

const Home = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <main role="main" className="mx-auto w-full max-w-(--breakpoint-xl) bg-white" id="jod-main">
      <title>{t('osaamispolku')}</title>
      <MainCard />

      <Content title={t('home.how-competency-path-helps-you')} className="mt-7 lg:mt-8">
        <p className="text-body-lg whitespace-pre-line max-w-[716px]">
          <Trans i18nKey="home.how-competency-path-helps-you-content" />
        </p>
        <div className="flex flex-col sm:flex-row gap-7 sm:flex-wrap">
          <div className="flex flex-col gap-5 md:max-w-[320px]">
            <div className="md:text-heading-3 text-heading-3-mobile ">
              {t('home.how-competency-path-helps-you-opintopolku-title')}
            </div>
            <div>
              <Trans i18nKey="home.how-competency-path-helps-you-opintopolku-description" />
            </div>
          </div>

          <div className="flex flex-col gap-5 md:max-w-[320px]">
            <div className="sm:text-heading-3 text-heading-3-mobile">
              {t('home.how-competency-path-helps-you-tmt-title')}
            </div>
            <div>
              <Trans i18nKey="home.how-competency-path-helps-you-tmt-description" />
            </div>
          </div>
          <div className="flex flex-col gap-5 md:max-w-[320px]">
            <div className="sm:text-heading-3 text-heading-3-mobile">
              {t('home.how-competency-path-helps-you-opinfi-title')}
            </div>
            <div>{t('home.how-competency-path-helps-you-opinfi-description')}</div>
          </div>
        </div>
      </Content>
      <div className="mt-8">
        <h2 className="mb-8 mx-auto max-w-[1092px] px-5 sm:px-6 xl:px-0 text-heading-1">{t('home.sections-title')}</h2>
        <SecondaryCard
          color="#004e82"
          content={t('home.osaamispolkuni-content')}
          title={t('home.osaamispolkuni-title')}
          to={`/yksilo/${language}`}
          buttonLabel={t('home.osaamispolkuni-call-to-action')}
          buttonIcon={<JodOpenInNew ariaLabel={t('external-link')} />}
          bgImageClassName=" bg-[url(@/../assets/osaamispolkuni.jpg)] bg-cover bg-[50%_50%]"
        />
        <SecondaryCard
          color="#00818A"
          content={t('home.ohjaaja-content')}
          title={t('home.ohjaaja-title')}
          to={`/ohjaaja/${language}`}
          buttonLabel={t('home.ohjaaja-call-to-action')}
          buttonIcon={<JodOpenInNew ariaLabel={t('external-link')} />}
          bgImageClassName=" bg-[url(@/../assets/ohjaaja.jpg)] bg-cover bg-[50%_50%]"
        />
        <SecondaryCard
          color="#AD4298"
          content={t('home.tietopalvelu-content')}
          title={t('home.tietopalvelu-title')}
          to={`/tietopalvelu/${language}`}
          buttonIcon={<JodOpenInNew ariaLabel={t('external-link')} />}
          buttonLabel={t('home.tietopalvelu-call-to-action')}
          bgImageClassName="bg-[url(@/../assets/tietopalvelu.jpg)] bg-cover bg-[50%_50%]"
        />
      </div>

      <Content title={t('home.beta')}>
        <p className="text-body-lg max-w-[716px]">{t('home.beta-content-1')}</p>
        <TimelineImage />
        <div className="max-w-[716px]">
          <Trans
            i18nKey="home.beta-content-2"
            components={{
              Icon: <JodOpenInNew size={18} className="ml-1" ariaLabel={t('external-link')} />,
              CustomLink: (
                <Link
                  to="https://wiki.eduuni.fi/spaces/JOD/pages/641042258/Osaamispolun+suljettu+betatestaus"
                  className="inline-flex underline text-accent items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
            }}
          />
        </div>
      </Content>

      <Block title={t('home.services.title')} isLast={true}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-7 sm:gap-y-11 mb-11 sm:mb-[176px]">
          <ServiceBlock
            title={t('home.services.tool.title')}
            text={t('home.services.tool.content')}
            buttonLabel={t('home.services.tool.buttonLabel')}
            to={`/yksilo/${language}/${t('home.services.tool.path')}`}
          />
          <ServiceBlock
            title={t('home.services.ohjaus.title')}
            text={t('home.services.ohjaus.content')}
            buttonLabel={t('home.services.ohjaus.buttonLabel')}
            to={`/ohjaaja/${language}/${t('home.services.ohjaus.path')}`}
            className="bg-secondary-2! active:bg-[#00889b]!"
          />
          <ServiceBlock
            title={t('home.services.tietopalvelu.title')}
            text={t('home.services.tietopalvelu.content')}
            buttonLabel={t('home.services.tietopalvelu.buttonLabel')}
            to={`/tietopalvelu/${language}/${t('home.services.tietopalvelu.path')}`}
            className="bg-secondary-4! active:bg-[#ad3ea3]!"
          />
        </div>
      </Block>
    </main>
  );
};

export default Home;
