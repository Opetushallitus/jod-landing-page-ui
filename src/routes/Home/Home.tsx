import { Button, cx, HeroCard } from '@jod/design-system';
import { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { MdArrowForward } from 'react-icons/md';

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
    <div className="sm:h-auto mx-auto bg-[url(@/../assets/landing-page-1.avif)] bg-cover bg-[top_-0rem_right_-25rem] sm:bg-auto sm:bg-[top_-20rem_left_0rem]">
      <div className="mx-auto h-[650px] max-w-[1092px] flex flex-row items-center justify-start hyphens-auto cols-3 px-5 sm:px-6">
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
        icon={<MdArrowForward size={24} />}
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

const Home = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-7 sm:gap-y-11">
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
            className="bg-secondary-2! active:bg-[#00889b]!"
          />
          <ServiceBlock
            title={t('home.services.tietopalvelu.title')}
            text={t('home.services.tietopalvelu.content')}
            buttonLabel={t('home.services.tietopalvelu.buttonLabel')}
            to={`/tietopalvelu/${language}`}
            className="bg-secondary-4! active:bg-[#ad3ea3]!"
          />
        </div>
      </Block>

      <Block title={t('home.why-title')} content={t('home.why-content')} isLast={true}></Block>
    </main>
  );
};

export default Home;
