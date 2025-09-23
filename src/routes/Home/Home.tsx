import betaPlanImageDesktop from '@/../assets/gra_front_timeline_2.svg';
import betaPlanImageMobile from '@/../assets/gra_front_timeline_mob_2.svg';
import { getLinkTo } from '@/utils/routeUtils';
import { Button, cx, HeroCard, tidyClasses as tc, useMediaQueries } from '@jod/design-system';
import { JodArrowRight, JodOpenInNew } from '@jod/design-system/icons';
import { JSX } from 'react';
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
  <a href={to as string} className={className}>
    {children}
  </a>
);

const MainCard = () => {
  const { t } = useTranslation();

  return (
    <div className="sm:h-auto mx-auto bg-cover bg-[url(@/../assets/landing-page-hero.jpg)] xl:bg-[50%_50%] lg:bg-[58.5%_50%] md:bg-[67.3%_50%] sm:bg-[70%_50%] bg-[71.7%_50%]">
      {/* Hero aspect ratio = ((9 / 21) * 1440px) = 617px */}
      <div className="sm:h-[617px] h-[calc(100vh-64px)] mx-auto max-w-[1092px] flex flex-row items-center justify-start hyphens-auto cols-3 px-5 sm:px-6">
        <div className="max-w-[716px] col-span-3 sm:col-span-2">
          <HeroCard
            backgroundColor="#006db3"
            content={t('home.hero-content')}
            title={t('home.hero-title')}
            buttonLabel={t('home.hero-button-label')}
            to={t('home.hero-url')}
            LinkComponent={ExternalLink}
          />
        </div>
      </div>
    </div>
  );
};

const SecondaryCard = ({
  title,
  content,
  color,
  buttonLabel,
  to,
  bgImageClassName,
}: {
  title: string;
  content: string;
  color: string;
  buttonLabel: string;
  to: string;
  bgImageClassName: string;
}) => {
  return (
    <div className={`h-auto ${bgImageClassName} py-8`}>
      <div className="max-w-[1092px] mx-auto px-5 sm:px-6">
        <div className="max-w-[716px]">
          <HeroCard
            size="sm"
            backgroundColor={color}
            content={content}
            title={title}
            to={to}
            LinkComponent={ExternalLink}
            buttonLabel={buttonLabel}
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
  return (
    <div className="w-full">
      <h3 className="text-heading-3-mobile sm:text-heading-3 mb-5">{title}</h3>
      <p className="text-body-sm-mobile sm:text-body-sm mb-6">{text}</p>
      <Button
        className={cx('active:hover:underline', 'group-focus:underline', className)}
        variant="accent"
        label={buttonLabel}
        icon={<JodArrowRight />}
        iconSide="right"
        // eslint-disable-next-line react/no-unstable-nested-components
        LinkComponent={({ children }) => (
          <ExternalLink to={to} className="group focus:outline-hidden">
            <>{children}</>
          </ExternalLink>
        )}
      />
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
      className={`mt-10 px-5 sm:px-6 max-w-[1092px] mx-auto print:px-0 print:mx-0 bg-white ${isLast ? 'pb-8' : 'mb-8'}`}
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
  const { t } = useTranslation();
  return (
    <div className={tc(['mx-auto', 'max-w-[1092px]', 'py-7', 'px-5 sm:px-6', 'flex', 'flex-col', 'gap-7', className])}>
      {title && <h2 className="text-heading-1">{t(`home.${title}`)}</h2>}
      {children}
    </div>
  );
};

const Home = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { sm } = useMediaQueries();

  return (
    <main role="main" className="mx-auto w-full max-w-(--breakpoint-xl) bg-white" id="jod-main">
      <title>{t('osaamispolku')}</title>
      <MainCard />

      <Content title="how-competency-path-helps-you" className="mb-[128px] mt-11">
        <p className="text-body-lg whitespace-pre-line max-w-[716px]">
          {t('home.how-competency-path-helps-you-content')}
        </p>
        <div className="flex flex-col sm:flex-row gap-7 sm:flex-wrap">
          <div className="flex flex-col gap-5 md:max-w-[320px]">
            <div className="md:text-heading-3 text-heading-3-mobile ">
              {t('home.how-competency-path-helps-you-opintopolku-title')}
            </div>
            <div>{t('home.how-competency-path-helps-you-opintopolku-description')}</div>
            <div className="mt-auto">
              <Button
                size="lg"
                variant="accent"
                className="mt-5"
                serviceVariant="yksilo"
                label={t('home.how-competency-path-helps-you-opintopolku-link')}
                icon={<JodOpenInNew />}
                iconSide="right"
                LinkComponent={getLinkTo(`https://opintopolku.fi/konfo/${language}/`, {
                  useAnchor: true,
                  target: '_blank',
                })}
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 md:max-w-[320px]">
            <div className="sm:text-heading-3 text-heading-3-mobile">
              {t('home.how-competency-path-helps-you-tmt-title')}
            </div>
            <div>{t('home.how-competency-path-helps-you-tmt-description')}</div>
            <div className="mt-auto">
              <Button
                size="lg"
                variant="accent"
                className="mt-5"
                serviceVariant="yksilo"
                label={t('home.how-competency-path-helps-you-tmt-link')}
                icon={<JodOpenInNew />}
                iconSide="right"
                LinkComponent={getLinkTo(`https://tyomarkkinatori.fi/${language === 'fi' ? '' : language}`, {
                  useAnchor: true,
                  target: '_blank',
                })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 md:max-w-[320px]">
            <div className="sm:text-heading-3 text-heading-3-mobile">
              {t('home.how-competency-path-helps-you-opinfi-title')}
            </div>
            <div>{t('home.how-competency-path-helps-you-opinfi-description')}</div>
            <div className="mt-auto">
              <Button
                size="lg"
                variant="accent"
                className="mt-5"
                serviceVariant="yksilo"
                label={t('home.how-competency-path-helps-you-opinfi-link')}
                icon={<JodOpenInNew />}
                iconSide="right"
                LinkComponent={getLinkTo(`https://opin.fi/${language === 'fi' ? '' : language}`, {
                  useAnchor: true,
                  target: '_blank',
                })}
              />
            </div>
          </div>
        </div>
      </Content>

      <Content title="beta">
        <p className="text-body-lg max-w-[716px]">
          <Trans
            i18nKey="home.beta-content"
            components={{
              Icon: <JodOpenInNew size={18} className="ml-1" />,
              CustomLink: (
                <Link
                  to="https://wiki.eduuni.fi/x/Ok-bJ"
                  className="inline-flex underline text-accent items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
            }}
          />
        </p>
        <div className="flex justify-center aspect-auto">
          {
            <img
              className="max-w-[372px] sm:max-w-full"
              src={sm ? betaPlanImageDesktop : betaPlanImageMobile}
              alt={t('home.beta')}
            />
          }
        </div>
      </Content>

      <SecondaryCard
        color="#00a8b3"
        content={t('home.ohjaaja-content')}
        title={t('home.ohjaaja-title')}
        to={`/ohjaaja/${language}`}
        buttonLabel={t('home.ohjaaja-call-to-action')}
        bgImageClassName=" bg-[url(@/../assets/pre-launch-5.avif)] bg-[top_-4rem_right_-10rem] sm:bg-[top_-10rem_left_-20rem]"
      />
      <SecondaryCard
        color="#cd4eb3"
        content={t('home.tietopalvelu-content')}
        title={t('home.tietopalvelu-title')}
        to={`/tietopalvelu/${language}`}
        buttonLabel={t('home.tietopalvelu-call-to-action')}
        bgImageClassName="bg-[url(@/../assets/pre-launch-2.avif)] bg-[length:auto_650px] sm:bg-[length:auto_1000px] bg-[top_-3rem_right_-10rem] sm:bg-[top_-20rem_right_2rem]"
      />

      <Block title={t('home.services.title')} isLast={true}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-7 sm:gap-y-11">
          <ServiceBlock
            title={t('home.services.tool.title')}
            text={t('home.services.tool.content')}
            buttonLabel={t('home.services.tool.buttonLabel')}
            to={t('home.services.tool.path', { language })}
          />
          <ServiceBlock
            title={t('home.services.osaamispolku.title')}
            text={t('home.services.osaamispolku.content')}
            buttonLabel={t('home.services.osaamispolku.buttonLabel')}
            to={t('home.services.osaamispolku.path', { language })}
          />
          <ServiceBlock
            title={t('home.services.ohjaus.title')}
            text={t('home.services.ohjaus.content')}
            buttonLabel={t('home.services.ohjaus.buttonLabel')}
            to={t('home.services.ohjaus.path', { language })}
            className="bg-secondary-2! active:bg-[#00889b]!"
          />
          <ServiceBlock
            title={t('home.services.tietopalvelu.title')}
            text={t('home.services.tietopalvelu.content')}
            buttonLabel={t('home.services.tietopalvelu.buttonLabel')}
            to={t('home.services.tietopalvelu.path', { language })}
            className="bg-secondary-4! active:bg-[#ad3ea3]!"
          />
        </div>
      </Block>
    </main>
  );
};

export default Home;
