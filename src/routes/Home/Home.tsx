import { Button, HeroCard, MoreInfo } from '@jod/design-system';
import { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { MdArrowForward } from 'react-icons/md';
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
    <div className="sm:h-auto mx-auto bg-[url(@/../assets/pre-launch-1.avif)] bg-cover bg-size-[1500px] bg-center bg-[top_-0rem_right_0rem] sm:bg-[top_0rem_left_0rem]">
      <div className="mx-auto h-[650px] max-w-[1092px] flex flex-row items-center justify-start hyphens-auto grid cols-3 px-5 sm:px-6">
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
        <div className="max-w-2xl">
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
}: {
  title: string;
  text: string;
  buttonLabel: string;
  to: string;
}) => {
  return (
    <div className="max-w-[342px]">
      <h3 className="text-heading-3-mobile sm:text-heading-3 mb-5">{title}</h3>
      <p className="text-body-sm-mobile sm:text-body-sm mb-6">{text}</p>
      <Button
        variant="accent"
        label={buttonLabel}
        icon={<MdArrowForward size={24} />}
        iconSide="right"
        // eslint-disable-next-line react/no-unstable-nested-components
        LinkComponent={({ children }) => (
          <ExternalLink to={to}>
            <>{children}</>
          </ExternalLink>
        )}
      />
    </div>
  );
};

const Block = ({ title, content, children }: { title: string; content?: string; children?: JSX.Element }) => {
  return (
    <div className="mt-10 px-5 sm:px-6 max-w-[1092px] mx-auto mb-8 print:px-0 print:mx-0">
      <h2 className="text-heading-1-mobile sm:text-heading-1 mb-6">{title}</h2>
      {content && <p className="text-body-lg-mobile sm:text-body-lg mb-8">{content}</p>}
      {children}
    </div>
  );
};

const Home = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const infoSlug = t('slugs.basic-information');

  const moreInfoLinks = [
    {
      to: `${t('slugs.slugs.user-guide.index')}/${t('slugs.about-us')}`,
      label: t('about-us'),
    },
    {
      to: `${infoSlug}/${t('slugs.privacy-policy')}`,
      label: t('privacy-policy-and-cookies'),
    },
    {
      to: `${infoSlug}/${t('slugs.data-sources')}`,
      label: t('data-sources'),
    },
    {
      to: `${infoSlug}/${t('slugs.about-ai')}`,
      label: t('about-ai'),
    },
    {
      to: `${infoSlug}/${t('slugs.accessibility-statement')}`,
      label: t('accessibility-statement'),
    },
  ];

  return (
    <main role="main" className="mx-auto w-full max-w-(--breakpoint-xl) bg-white" id="jod-main">
      <title>{t('osaamispolku')}</title>
      <MainCard />

      <Block title={t('home.osaamispolku-helping-heading')} content={t('home.osaamispolku-helping-description')}>
        <p className="bg-todo h-[328px] flex items-center justify-center rounded">TODO</p>
      </Block>

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

      <Block title={t('home.services.title')}>
        <div className="flex gap-7 md:gap-y-11 flex-wrap flex-row">
          <ServiceBlock
            title={t('home.services.tool.title')}
            text={t('home.services.tool.content')}
            buttonLabel={t('home.services.tool.buttonLabel')}
            to={`/yksilo/${language}`}
          />
          <ServiceBlock
            title={t('home.services.osaamispolku.title')}
            text={t('home.services.osaamispolku.content')}
            buttonLabel={t('home.services.osaamispolku.buttonLabel')}
            to="#"
          />
          <ServiceBlock
            title={t('home.services.ohjaus.title')}
            text={t('home.services.ohjaus.content')}
            buttonLabel={t('home.services.ohjaus.buttonLabel')}
            to={`/ohjaaja/${language}`}
          />
          <ServiceBlock
            title={t('home.services.tietopalvelu.title')}
            text={t('home.services.tietopalvelu.content')}
            buttonLabel={t('home.services.tietopalvelu.buttonLabel')}
            to={`/tietopalvelu/${language}`}
          />
        </div>
      </Block>

      <Block title={t('home.why-title')} content={t('home.why-content')}></Block>

      <SecondaryCard
        color="#333333"
        content={t('home.feedback-content')}
        title={t('home.feedback-title')}
        to="#"
        buttonLabel={t('home.feedback-call-to-action')}
        bgImageClassName=" bg-[url(@/../assets/home-1.avif)] bg-cover bg-[length:auto_auto] sm:bg-[length:auto_1000px] bg-[top_-0rem_right_-0rem] sm:bg-[top_-21rem_right_0rem]"
      />

      <MoreInfo
        title={t('home.want-to-know-more')}
        description={t('home.want-to-know-more-content')}
        language={language}
        links={moreInfoLinks}
        LinkComponent={Link}
      />
    </main>
  );
};

export default Home;
