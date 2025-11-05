import { MainLayout } from '@/components';
import { ArticleAccordion } from '@/components/ArticleAccordion';
import { IconHeading } from '@/components/IconHeading';
import { InfoBox, InfoboxItem } from '@/components/InfoBox';
import { ScrollHeading } from '@/components/ScrollHeading/ScrollHeading';
import { getLinkTo } from '@/utils/routeUtils';
import { MenuSection, PageNavigation } from '@jod/design-system';
import { JodInfo, JodOpenInNew } from '@jod/design-system/icons';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { ArticleSection } from '../types';

interface RegisterContentItem {
  title: string;
  items?: string[];
}

const RegisterContent = ({ content }: { content: RegisterContentItem[] }) => {
  return (
    <ul className="list-disc list-inside">
      {content.map((item) => (
        <li key={item.title}>
          <strong>{item.title}</strong>
          {item.items && (
            <ul className="ml-5 list-[circle] list-inside">
              {item.items.map((sub) => (
                <li key={sub}>{sub}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

const PrivacyAndCookies = () => {
  const { t } = useTranslation();
  const title = t('privacy-policy-and-cookies.title');

  const yksiloRegisterContent: RegisterContentItem[] = React.useMemo(() => {
    return [
      {
        title: t('privacy-policy-and-cookies.register-information-content.yksilo.content.birth-year.title'),
      },
      {
        title: t('privacy-policy-and-cookies.register-information-content.yksilo.content.gender.title'),
      },
      {
        title: t('privacy-policy-and-cookies.register-information-content.yksilo.content.mother-tongue.title'),
      },
      {
        title: t('privacy-policy-and-cookies.register-information-content.yksilo.content.home-municipality.title'),
      },
      {
        title: t('privacy-policy-and-cookies.register-information-content.yksilo.content.email.title'),
      },
      {
        title: t('privacy-policy-and-cookies.register-information-content.yksilo.content.ui-language.title'),
      },
      {
        title: t('privacy-policy-and-cookies.register-information-content.yksilo.content.permissions.title'),
        items: [
          t(
            'privacy-policy-and-cookies.register-information-content.yksilo.content.permissions.items.welcome-flow-completed',
          ),
          t(
            'privacy-policy-and-cookies.register-information-content.yksilo.content.permissions.items.data-disclosure-controller',
          ),
          t(
            'privacy-policy-and-cookies.register-information-content.yksilo.content.permissions.items.ai-training-permission',
          ),
        ],
      },
      {
        title: t('privacy-policy-and-cookies.register-information-content.yksilo.content.work-history.title'),
        items: [
          t('privacy-policy-and-cookies.register-information-content.yksilo.content.work-history.items.workplace'),
          t('privacy-policy-and-cookies.register-information-content.yksilo.content.work-history.items.job-role'),
          t(
            'privacy-policy-and-cookies.register-information-content.yksilo.content.work-history.items.job-role-competences',
          ),
        ],
      },
      {
        title: t('privacy-policy-and-cookies.register-information-content.yksilo.content.education-history.title'),
        items: [
          t('privacy-policy-and-cookies.register-information-content.yksilo.content.education-history.items.provider'),
          t('privacy-policy-and-cookies.register-information-content.yksilo.content.education-history.items.education'),
          t(
            'privacy-policy-and-cookies.register-information-content.yksilo.content.education-history.items.education-competences',
          ),
        ],
      },
      {
        title: t('privacy-policy-and-cookies.register-information-content.yksilo.content.free-time-history.title'),
        items: [
          t('privacy-policy-and-cookies.register-information-content.yksilo.content.free-time-history.items.theme'),
          t('privacy-policy-and-cookies.register-information-content.yksilo.content.free-time-history.items.activity'),
          t(
            'privacy-policy-and-cookies.register-information-content.yksilo.content.free-time-history.items.activity-competences',
          ),
        ],
      },
      {
        title: t('privacy-policy-and-cookies.register-information-content.yksilo.content.interests.title'),
        items: [
          t('privacy-policy-and-cookies.register-information-content.yksilo.content.interests.items.skills'),
          t('privacy-policy-and-cookies.register-information-content.yksilo.content.interests.items.occupations'),
          t('privacy-policy-and-cookies.register-information-content.yksilo.content.interests.items.free-text'),
        ],
      },
      {
        title: t('privacy-policy-and-cookies.register-information-content.yksilo.content.other-competences.title'),
        items: [
          t('privacy-policy-and-cookies.register-information-content.yksilo.content.other-competences.items.skills'),
          t('privacy-policy-and-cookies.register-information-content.yksilo.content.other-competences.items.free-text'),
        ],
      },
      {
        title: t('privacy-policy-and-cookies.register-information-content.yksilo.content.favorites.title'),
      },
      {
        title: t('privacy-policy-and-cookies.register-information-content.yksilo.content.goals.title'),
      },
      {
        title: t('privacy-policy-and-cookies.register-information-content.yksilo.content.plans.title'),
      },
    ];
  }, [t]);

  const ohjaajaRegisterContent: RegisterContentItem[] = React.useMemo(() => {
    return [
      {
        title: t('privacy-policy-and-cookies.register-information-content.ohjaaja.content.workplace-type.title'),
      },
      {
        title: t('privacy-policy-and-cookies.register-information-content.ohjaaja.content.interests.title'),
      },
      {
        title: t('privacy-policy-and-cookies.register-information-content.ohjaaja.content.permissions.title'),
        items: [
          t(
            'privacy-policy-and-cookies.register-information-content.ohjaaja.content.permissions.items.welcome-flow-completed',
          ),
          t(
            'privacy-policy-and-cookies.register-information-content.ohjaaja.content.permissions.items.data-disclosure-controller',
          ),
        ],
      },
      {
        title: t('privacy-policy-and-cookies.register-information-content.ohjaaja.content.favorites.title'),
      },
    ];
  }, [t]);

  const privacyPolicySections: ArticleSection[] = React.useMemo(() => {
    return [
      {
        navTitle: t('privacy-policy-and-cookies.intro.title'),
        content: (
          <p>
            <Trans i18nKey="privacy-policy-and-cookies.intro.description" />
          </p>
        ),
      },
      {
        navTitle: t('privacy-policy-and-cookies.register-controller.title'),
        content: (
          <div>
            <p>
              <Trans i18nKey="privacy-policy-and-cookies.register-controller.description-1" />
            </p>
            <ol className="ml-6 mb-4 list-decimal">
              <li>{t('privacy-policy-and-cookies.register-controller.list.item-1')}</li>
              <li>{t('privacy-policy-and-cookies.register-controller.list.item-2')}</li>
              <li>{t('privacy-policy-and-cookies.register-controller.list.item-3')}</li>
              <li>{t('privacy-policy-and-cookies.register-controller.list.item-4')}</li>
              <li>{t('privacy-policy-and-cookies.register-controller.list.item-5')}</li>
              <li>{t('privacy-policy-and-cookies.register-controller.list.item-6')}</li>
            </ol>
            <p>{t('privacy-policy-and-cookies.register-controller.description-2')}</p>
          </div>
        ),
      },
      {
        navTitle: t('privacy-policy-and-cookies.data-handling-use.title'),
        content: (
          <div>
            <Trans i18nKey="privacy-policy-and-cookies.data-handling-use.description" />

            <h3 className="mt-6 mb-3 text-heading-3-mobile sm:text-heading-3">
              {t('privacy-policy-and-cookies.data-handling-use.legal-basis.title')}
            </h3>
            <ul className="ml-6 mb-4 list-disc">
              <li>{t('privacy-policy-and-cookies.data-handling-use.legal-basis.list.item-1')}</li>
              <li>{t('privacy-policy-and-cookies.data-handling-use.legal-basis.list.item-2')}</li>
              <li>{t('privacy-policy-and-cookies.data-handling-use.legal-basis.list.item-3')}</li>
              <li>{t('privacy-policy-and-cookies.data-handling-use.legal-basis.list.item-4')}</li>
              <li>{t('privacy-policy-and-cookies.data-handling-use.legal-basis.list.item-5')}</li>
            </ul>
          </div>
        ),
      },
      {
        navTitle: t('privacy-policy-and-cookies.register-information-content.title'),
        content: (
          <div>
            <p>
              <Trans i18nKey="privacy-policy-and-cookies.register-information-content.description" />
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <ArticleAccordion
                titleText={t('privacy-policy-and-cookies.register-information-content.yksilo.title')}
                content={<RegisterContent content={yksiloRegisterContent} />}
              />
              <ArticleAccordion
                titleText={t('privacy-policy-and-cookies.register-information-content.ohjaaja.title')}
                content={<RegisterContent content={ohjaajaRegisterContent} />}
              />
            </div>
          </div>
        ),
      },
      {
        navTitle: t('privacy-policy-and-cookies.recipients-of-personal-data.title'),
        content: (
          <p>
            <Trans i18nKey="privacy-policy-and-cookies.recipients-of-personal-data.description" />
          </p>
        ),
      },
      {
        navTitle: t('privacy-policy-and-cookies.info-about-3rd-country.title'),
        content: <p>{t('privacy-policy-and-cookies.info-about-3rd-country.description')}</p>,
      },
      {
        navTitle: t('privacy-policy-and-cookies.storing-time-of-personal-data.title'),
        content: (
          <>
            <p>
              <Trans i18nKey="privacy-policy-and-cookies.storing-time-of-personal-data.description" />
            </p>
            <div>
              <h3 className="font-poppins mt-6 mb-3 text-heading-3-mobile sm:text-heading-3">
                {t('privacy-policy-and-cookies.storing-time-of-personal-data.data-subject-rights.title')}
              </h3>
              <div className="flex flex-col gap-2">
                <ArticleAccordion
                  titleText={t(
                    'privacy-policy-and-cookies.storing-time-of-personal-data.data-subject-rights.access-personal-data.title',
                  )}
                  content={
                    <Trans i18nKey="privacy-policy-and-cookies.storing-time-of-personal-data.data-subject-rights.access-personal-data.description" />
                  }
                />

                <ArticleAccordion
                  titleText={t(
                    'privacy-policy-and-cookies.storing-time-of-personal-data.data-subject-rights.rectification.title',
                  )}
                  content={
                    <Trans i18nKey="privacy-policy-and-cookies.storing-time-of-personal-data.data-subject-rights.rectification.description" />
                  }
                />
                <ArticleAccordion
                  titleText={t(
                    'privacy-policy-and-cookies.storing-time-of-personal-data.data-subject-rights.delete.title',
                  )}
                  content={
                    <Trans i18nKey="privacy-policy-and-cookies.storing-time-of-personal-data.data-subject-rights.delete.description" />
                  }
                />
                <ArticleAccordion
                  titleText={t(
                    'privacy-policy-and-cookies.storing-time-of-personal-data.data-subject-rights.restrict-processing.title',
                  )}
                  content={
                    <Trans i18nKey="privacy-policy-and-cookies.storing-time-of-personal-data.data-subject-rights.restrict-processing.description" />
                  }
                />
                <ArticleAccordion
                  titleText={t(
                    'privacy-policy-and-cookies.storing-time-of-personal-data.data-subject-rights.object.title',
                  )}
                  content={
                    <Trans i18nKey="privacy-policy-and-cookies.storing-time-of-personal-data.data-subject-rights.object.description" />
                  }
                />
                <ArticleAccordion
                  titleText={t(
                    'privacy-policy-and-cookies.storing-time-of-personal-data.data-subject-rights.transfer.title',
                  )}
                  content={
                    <Trans i18nKey="privacy-policy-and-cookies.storing-time-of-personal-data.data-subject-rights.transfer.description" />
                  }
                />
                <ArticleAccordion
                  titleText={t(
                    'privacy-policy-and-cookies.storing-time-of-personal-data.data-subject-rights.withdraw-consent.title',
                  )}
                  content={
                    <Trans i18nKey="privacy-policy-and-cookies.storing-time-of-personal-data.data-subject-rights.withdraw-consent.description" />
                  }
                />
                <ArticleAccordion
                  titleText={t(
                    'privacy-policy-and-cookies.storing-time-of-personal-data.data-subject-rights.request-of-data.title',
                  )}
                  content={
                    <Trans
                      i18nKey="privacy-policy-and-cookies.storing-time-of-personal-data.data-subject-rights.request-of-data.description"
                      components={{
                        CustomLink: (
                          <Link
                            to={t(
                              'privacy-policy-and-cookies.storing-time-of-personal-data.data-subject-rights.request-of-data.link',
                            )}
                            className="inline-flex text-accent hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        ),
                        Icon: <JodOpenInNew ariaLabel={t('external-link')} />,
                      }}
                    />
                  }
                />
                <ArticleAccordion
                  titleText={t(
                    'privacy-policy-and-cookies.storing-time-of-personal-data.data-subject-rights.complaint.title',
                  )}
                  content={
                    <Trans i18nKey="privacy-policy-and-cookies.storing-time-of-personal-data.data-subject-rights.complaint.description" />
                  }
                />
              </div>
            </div>
          </>
        ),
      },
      {
        navTitle: t('privacy-policy-and-cookies.obligation-to-provide.title'),
        content: <p>{t('privacy-policy-and-cookies.obligation-to-provide.description')}</p>,
      },
      {
        navTitle: t('privacy-policy-and-cookies.acquiring.title'),
        content: <p>{t('privacy-policy-and-cookies.acquiring.description')}</p>,
      },
      {
        navTitle: t('privacy-policy-and-cookies.automatic-handling.title'),
        content: <p>{t('privacy-policy-and-cookies.automatic-handling.description')}</p>,
      },
    ];
  }, [ohjaajaRegisterContent, t, yksiloRegisterContent]);

  const cookiesSections: ArticleSection[] = React.useMemo(() => {
    return [
      {
        navTitle: t('privacy-cookies.title'), // Semantically there can not be another <h1> tag, therefor this is also <h2>
        content: <></>,
      },
      {
        navTitle: t('privacy-cookies.what.title'),
        content: (
          <div>
            <p>
              <Trans i18nKey="privacy-cookies.what.description-1" />
            </p>
            <ul className="ml-5 my-4 list-disc">
              <li>{t('privacy-cookies.what.list.item-1')}</li>
              <li>{t('privacy-cookies.what.list.item-2')}</li>
              <li>{t('privacy-cookies.what.list.item-3')}</li>
            </ul>
            <p>{t('privacy-cookies.what.description-2')}</p>
          </div>
        ),
      },
      {
        navTitle: t('privacy-cookies.what-for.title'),
        content: (
          <div>
            <p>{t('privacy-cookies.what-for.description-1')}</p>
            <ul className="ml-5 my-4 list-disc">
              <li>{t('privacy-cookies.what-for.list.item-1')}</li>
              <li>{t('privacy-cookies.what-for.list.item-2')}</li>
            </ul>
            <p>
              <Trans i18nKey="privacy-cookies.what-for.description-2" />
            </p>
          </div>
        ),
      },
      {
        navTitle: t('privacy-cookies.3rd-party.title'),
        content: (
          <Trans
            i18nKey="privacy-cookies.3rd-party.description"
            components={{
              CustomLink1: (
                <Link
                  to="https://www.microsoft.com/en-us/privacy/privacystatement"
                  className="inline-flex text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
              CustomLink2: (
                <Link
                  to="https://policies.google.com/privacy"
                  className="inline-flex text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
              Icon: <JodOpenInNew ariaLabel={t('external-link')} />,
            }}
          />
        ),
      },
      {
        navTitle: t('privacy-cookies.possession.title'),
        content: <Trans i18nKey="privacy-cookies.possession.description" />,
      },
      {
        navTitle: t('privacy-cookies.site-specific.title'),
        content: <Trans i18nKey="privacy-cookies.site-specific.description" />,
      },
      {
        navTitle: t('privacy-cookies.blocking.title'),
        content: <Trans i18nKey="privacy-cookies.blocking.description" />,
      },
    ];
  }, [t]);

  const navChildren = React.useMemo(() => {
    const allSections = [...privacyPolicySections, ...cookiesSections];

    const menuSection: MenuSection = {
      title: t('on-this-page'),
      linkItems: allSections.map((section) => ({
        label: section.navTitle,
        linkComponent: getLinkTo(`#${section.navTitle}`),
      })),
    };
    return <PageNavigation menuSection={menuSection} activeIndicator="dot" className={'mb-4'} />;
  }, [t, privacyPolicySections, cookiesSections]);

  const infoBoxItems: InfoboxItem[] = React.useMemo(() => {
    return [
      {
        label: t('privacy-policy-and-cookies.info.register.title'),
        content: t('privacy-policy-and-cookies.info.register.content'),
      },
      {
        label: t('privacy-policy-and-cookies.info.register-controller.title'),
        content: t('privacy-policy-and-cookies.info.register-controller.content'),
      },
      {
        label: t('privacy-policy-and-cookies.info.contact.title'),
        content: t('privacy-policy-and-cookies.info.contact.content'),
      },
      {
        label: t('privacy-policy-and-cookies.info.email.title'),
        content: t('privacy-policy-and-cookies.info.email.content'),
      },
      {
        label: t('privacy-policy-and-cookies.info.phone.title'),
        content: t('privacy-policy-and-cookies.info.phone.content'),
      },
      {
        label: t('privacy-policy-and-cookies.info.fax.title'),
        content: t('privacy-policy-and-cookies.info.fax.content'),
      },
    ];
  }, [t]);

  return (
    <MainLayout navChildren={navChildren}>
      <title>{title}</title>

      <IconHeading icon={<JodInfo />} title={title} testId="privacy-policy-title" />

      <InfoBox items={infoBoxItems} className="mb-8" />

      <div className="font-arial">
        {privacyPolicySections.map((section) => (
          <div key={section.navTitle} className="flex flex-col mb-8">
            <ScrollHeading
              title={section.navTitle}
              heading="h2"
              className={`text-heading-2-mobile sm:text-heading-2 font-poppins ${(section.showNavTitle ?? true) ? 'mb-3' : 'text-transparent text-[0px] size-0'}`}
            />
            <div className="flex flex-col justify-between">{section.content}</div>
          </div>
        ))}

        {cookiesSections.map((section) => (
          <div key={section.navTitle} className="flex flex-col mb-8">
            <ScrollHeading
              title={section.navTitle}
              heading="h2"
              className={`text-heading-2-mobile sm:text-heading-2 font-poppins ${(section.showNavTitle ?? true) ? 'mb-3' : 'text-transparent text-[0px] size-0'}`}
            />
            <div className="flex flex-col justify-between">{section.content}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default PrivacyAndCookies;
