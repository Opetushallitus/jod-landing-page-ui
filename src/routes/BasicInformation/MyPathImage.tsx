import { useTranslation } from 'react-i18next';

import {
  LogoRgbEn,
  LogoRgbFi,
  LogoRgbSv,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  useMediaQueries,
} from '@jod/design-system';
import { JodAi, JodInfo } from '@jod/design-system/icons';

import {
  LogoOpintopolkuEn,
  LogoOpintopolkuFi,
  LogoOpintopolkuSv,
  LogoTyomarkkinatoriEn,
  LogoTyomarkkinatoriFi,
  LogoTyomarkkinatoriSv,
} from '@/components/Logos';

export const getLocalizedLogos = (language: string) => {
  switch (language) {
    case 'sv':
      return {
        osaamispolkuLogo: <LogoRgbSv size="26" />,
        opintopolkuLogo: <LogoOpintopolkuSv height={20} />,
        tyomarkkinatoriLogo: <LogoTyomarkkinatoriSv height={20} />,
      };
    case 'en':
      return {
        osaamispolkuLogo: <LogoRgbEn size="26" />,
        opintopolkuLogo: <LogoOpintopolkuEn height={20} />,
        tyomarkkinatoriLogo: <LogoTyomarkkinatoriEn height={20} />,
      };
    default:
      return {
        osaamispolkuLogo: <LogoRgbFi size="26" />,
        opintopolkuLogo: <LogoOpintopolkuFi height={20} />,
        tyomarkkinatoriLogo: <LogoTyomarkkinatoriFi height={20} />,
      };
  }
};

const ServiceHelpsWithAiTooltip = () => {
  const { t } = useTranslation();
  return (
    <Tooltip>
      <TooltipTrigger>
        <JodAi color="#45498F" />
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-bold mb-2">
          {t('about-service.sections.my-path.image.tooltip-service-helps-with-ai.title')}
        </p>
        <p className="mb-4">{t('about-service.sections.my-path.image.tooltip-service-helps-with-ai.paragraph-1')}</p>
        <p>{t('about-service.sections.my-path.image.tooltip-service-helps-with-ai.paragraph-2')}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const ChooseInterestsAndSkillsTooltip = () => {
  const { t } = useTranslation();
  return (
    <Tooltip>
      <TooltipTrigger>
        <JodInfo />
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-bold mb-2">
          {t('about-service.sections.my-path.image.tooltip-choose-interests-and-skills.title')}
        </p>
        <p className="mb-4">
          {t('about-service.sections.my-path.image.tooltip-choose-interests-and-skills.paragraph-1')}
        </p>
        <p>{t('about-service.sections.my-path.image.tooltip-choose-interests-and-skills.paragraph-2')}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const ProfessionsTooltip = () => {
  const { t } = useTranslation();
  return (
    <Tooltip>
      <TooltipTrigger>
        <JodInfo />
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-bold mb-2">{t('about-service.sections.my-path.image.tooltip-professions.title')}</p>
        <p className="mb-4">{t('about-service.sections.my-path.image.tooltip-professions.paragraph-1')}</p>
        <p>{t('about-service.sections.my-path.image.tooltip-professions.paragraph-2')}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const OtherWorkPpportunitiesTooltip = () => {
  const { t } = useTranslation();
  return (
    <Tooltip>
      <TooltipTrigger>
        <JodAi />
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-bold mb-2">
          {t('about-service.sections.my-path.image.tooltip-other-work-opportunities.title')}
        </p>
        <p className="mb-4">{t('about-service.sections.my-path.image.tooltip-other-work-opportunities.paragraph-1')}</p>
        <p>{t('about-service.sections.my-path.image.tooltip-other-work-opportunities.paragraph-2')}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const DegreesTooltip = () => {
  const { t } = useTranslation();
  return (
    <Tooltip>
      <TooltipTrigger>
        <JodAi />
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-bold mb-2">{t('about-service.sections.my-path.image.tooltip-degrees.title')}</p>
        <p className="mb-4">{t('about-service.sections.my-path.image.tooltip-degrees.paragraph-1')}</p>
        <p>{t('about-service.sections.my-path.image.tooltip-degrees.paragraph-2')}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const OtherEducationTooltip = () => {
  const { t } = useTranslation();
  return (
    <Tooltip>
      <TooltipTrigger>
        <JodAi />
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-bold mb-2">{t('about-service.sections.my-path.image.tooltip-other-education.title')}</p>
        <p className="mb-4">{t('about-service.sections.my-path.image.tooltip-other-education.paragraph-1')}</p>
        <p>{t('about-service.sections.my-path.image.tooltip-other-education.paragraph-2')}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const ContentCreatedWithAiTooltip = () => {
  const { t } = useTranslation();
  return (
    <Tooltip>
      <TooltipTrigger>
        <JodAi color="#45498F" />
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-bold mb-2">
          {t('about-service.sections.my-path.image.tooltip-content-created-with-ai.title')}
        </p>
        <ul className="mb-4 ml-6 flex list-disc flex-col gap-4">
          <li>
            <strong>{t('about-service.sections.my-path.image.tooltip-content-created-with-ai.item-1-bold')}</strong>{' '}
            {t('about-service.sections.my-path.image.tooltip-content-created-with-ai.item-1-text')}
          </li>
          <li>
            <strong>{t('about-service.sections.my-path.image.tooltip-content-created-with-ai.item-2-bold')}</strong>{' '}
            {t('about-service.sections.my-path.image.tooltip-content-created-with-ai.item-2-text')}
          </li>
          <li>
            <strong>{t('about-service.sections.my-path.image.tooltip-content-created-with-ai.item-3-bold')}</strong>{' '}
            {t('about-service.sections.my-path.image.tooltip-content-created-with-ai.item-3-text')}
          </li>
          <li>
            <strong>{t('about-service.sections.my-path.image.tooltip-content-created-with-ai.item-4-bold')}</strong>
          </li>
        </ul>
        <p>{t('about-service.sections.my-path.image.tooltip-content-created-with-ai.note')}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const MyPathDesktop = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const { osaamispolkuLogo, opintopolkuLogo, tyomarkkinatoriLogo } = getLocalizedLogos(language);

  return (
    <svg viewBox="0 0 1092 411" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* background */}
      <rect width="1092" height="411" rx="8" fill="white" />

      {/* logo */}
      <foreignObject x="0" y="0" width="1092" height="60">
        <div className="flex items-end gap-3 p-5">
          {osaamispolkuLogo}
          <div className="font-semibold mb-1 font-poppins text-body-xs text-primary-gray sm:mb-0 sm:text-body-sm">
            / {t('common:navigation.external.yksilo.label')}
          </div>
        </div>
      </foreignObject>

      {/* outline rect */}
      <rect x="18" y="61" width="739" height="276" rx="6" stroke="#D6EBF9" strokeWidth="4" fill="white" />

      {/* person */}
      <g clipPath="url(#clip0_24713_67446)">
        <path
          d="M98 291C106.84 291 114 283.84 114 275C114 266.16 106.84 259 98 259C89.16 259 82 266.16 82 275C82 283.84 89.16 291 98 291ZM98 299C87.32 299 66 304.36 66 315V323H130V315C130 304.36 108.68 299 98 299Z"
          fill="#006DB3"
        />
      </g>

      {/* bubble */}
      <rect x="29" y="157" width="138" height="76" rx="29" stroke="#006DB3" strokeWidth="2" />
      <foreignObject x="29" y="157" width="138" height="76">
        <div className="font-semibold flex h-full w-full items-center justify-center px-4 py-5 font-poppins text-body-xs">
          {t('about-service.sections.my-path.image.tell-about-skills')}
        </div>
      </foreignObject>
      <path
        d="M97.1338 249L88.9062 234.75L88.041 233.25L107.959 233.25L107.094 234.75L98.8662 249L98 250.5L97.1338 249Z"
        fill="white"
        stroke="#006DB3"
        strokeWidth="2"
      />
      <path d="M90.5001 235.5L86 228H110L105.5 235.5H90.5001Z" fill="white" />

      {/* purple box */}
      <rect x="176" y="75" width="140" height="248" rx="8" fill="#B4B5E4" />
      <foreignObject x="176" y="75" width="140" height="248">
        <div className="font-semibold flex h-full w-full flex-col items-center justify-center gap-3 p-5 font-poppins text-body-xs">
          {t('about-service.sections.my-path.image.service-helps-with-ai')}
          <ServiceHelpsWithAiTooltip />
        </div>
      </foreignObject>
      <path d="M331.5 214 L346 199.5 L331.5 184 M316 199.5 L346 199.5" stroke="#B4B5E4" strokeWidth="6" />

      {/* blue box */}
      <rect x="354" y="75" width="140" height="248" rx="8" fill="#85C4EC" />
      <foreignObject x="354" y="75" width="140" height="248">
        <div className="font-semibold flex h-full w-full flex-col items-center justify-center gap-3 p-5 font-poppins text-body-xs">
          {t('about-service.sections.my-path.image.choose-interests-and-skills')}
          <ChooseInterestsAndSkillsTooltip />
        </div>
      </foreignObject>
      <path d="M509.5 214 L524 199.5 L509.5 184 M494 199.5 L524 199.5" stroke="#85C4EC" strokeWidth="6" />

      {/* Ammatit */}
      <rect x="532" y="75" width="215" height="56" rx="8" fill="#006DB3" />
      <foreignObject x="532" y="75" width="215" height="56">
        <div className="font-semibold flex h-full w-full flex-row items-center justify-center gap-3 p-5 font-poppins text-body-xs whitespace-nowrap text-white">
          {t('about-service.sections.my-path.image.professions')}
          <ProfessionsTooltip />
        </div>
      </foreignObject>

      {/* Muut työmahdollisuudet */}
      <rect x="532" y="139" width="215" height="56" rx="8" fill="#006DB3" />
      <foreignObject x="532" y="139" width="215" height="56">
        <div className="font-semibold flex h-full w-full flex-row items-center justify-center gap-3 p-5 font-poppins text-body-xs whitespace-nowrap text-white">
          {t('about-service.sections.my-path.image.other-work-opportunities')}
          <OtherWorkPpportunitiesTooltip />
        </div>
      </foreignObject>

      {/* Tutkinnot */}
      <rect x="532" y="203" width="215" height="56" rx="8" fill="#339DDF" />
      <foreignObject x="532" y="203" width="215" height="56">
        <div className="font-semibold flex h-full w-full flex-row items-center justify-center gap-3 p-5 font-poppins text-body-xs whitespace-nowrap text-white">
          {t('about-service.sections.my-path.image.degrees')}
          <DegreesTooltip />
        </div>
      </foreignObject>

      {/* Muu koulutus */}
      <rect x="532" y="267" width="215" height="56" rx="8" fill="#339DDF" />
      <foreignObject x="532" y="267" width="215" height="56">
        <div className="font-semibold flex h-full w-full flex-row items-center justify-center gap-3 p-5 font-poppins text-body-xs whitespace-nowrap text-white">
          {t('about-service.sections.my-path.image.other-education')}
          <OtherEducationTooltip />
        </div>
      </foreignObject>

      <rect x="16" y="347" width="478" height="48" rx="8" fill="#D6EBF9" />
      <foreignObject x="16" y="347" width="478" height="48">
        <div className="font-semibold flex h-full w-full items-center gap-3 px-5 py-3 font-poppins text-body-xs">
          {t('about-service.sections.my-path.image.enter-your-info')}
        </div>
      </foreignObject>

      <rect x="502" y="347" width="257" height="48" rx="8" fill="#D6EBF9" />
      <foreignObject x="502" y="347" width="257" height="48">
        <div className="font-semibold flex h-full w-full items-center gap-3 px-5 py-3 font-poppins text-body-xs">
          {t('about-service.sections.my-path.image.service-suggests-opportunities')}
        </div>
      </foreignObject>

      {/* arrows */}
      <path d="M784.363 88 L771 103.5 L784.363 118 M771 103.5 L912 103.5" stroke="#CCCCCC" strokeWidth="6" />
      <path d=" M784.363 152 L771 167.5 L784.363 182 M771 167.5 L801 167.5" stroke="#B4B5E4" strokeWidth="6" />
      <path d="M784.363 216 L771 231.5 L784.363 246 M771 231.5 L801 231.5" stroke="#B4B5E4" strokeWidth="6" />
      <path d="M784.363 280 L771 295.5 L784.363 310 M771 295.5 L801 295.5" stroke="#B4B5E4" strokeWidth="6" />

      {/* purple box */}
      <rect x="801" y="139" width="88" height="184" rx="8" fill="#B4B5E4" />
      <foreignObject x="801" y="139" width="88" height="184">
        <div className="font-semibold flex h-full w-full flex-col items-center justify-center gap-3 p-5 font-poppins text-body-xs">
          {t('about-service.sections.my-path.image.content-created-with-ai')}
          <ContentCreatedWithAiTooltip />
        </div>
      </foreignObject>

      {/* lines */}
      <g clipPath="url(#clip1_24713_67446)">
        <path d="M889 167C939 167 880.5 167 919 167" stroke="#CCCCCC" strokeWidth="6" />
        <path d="M889 231C939 231 880.5 231 919 231" stroke="#CCCCCC" strokeWidth="6" />
        <path d="M889 295C939 295 880.5 295 919 295" stroke="#CCCCCC" strokeWidth="6" />
      </g>

      {/* Ammattitieto */}
      <path d="M912 83C912 78.5817 915.582 75 920 75H1068C1072.42 75 1076 78.5817 1076 83V135H912V83Z" fill="#CCCCCC" />
      <foreignObject x="912" y="75" width="164" height="60">
        <div className="font-semibold flex h-full w-full items-center justify-end gap-3 p-5 font-poppins text-body-xs">
          {t('about-service.sections.my-path.image.career-info')}
        </div>
      </foreignObject>

      {/* Työpaikkailmoitukset */}
      <path
        d="M912 135H1076V187C1076 191.418 1072.42 195 1068 195H920C915.582 195 912 191.418 912 187V135Z"
        fill="#CCCCCC"
      />
      <foreignObject x="912" y="135" width="164" height="60">
        <div className="font-semibold flex h-full w-full flex-col items-end justify-between gap-3 px-5 pb-3 font-poppins text-body-xs">
          {t('about-service.sections.my-path.image.job-postings')}
          {tyomarkkinatoriLogo}
        </div>
      </foreignObject>

      {/* Koulutustarjonta */}
      <rect x="912" y="203" width="164" height="120" rx="8" fill="#CCCCCC" />
      <foreignObject x="912" y="203" width="164" height="120">
        <div className="font-semibold flex h-full w-full flex-col items-end justify-center gap-6 p-5 font-poppins text-body-xs">
          {t('about-service.sections.my-path.image.education-options')}
          {opintopolkuLogo}
        </div>
      </foreignObject>
    </svg>
  );
};

const ArrowMobile = ({ color, rotation = 0, className }: { color: string; rotation?: number; className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      transform={`rotate(${rotation})`}
      className={className}
    >
      <path
        d="M11.0809 20 C11.0809 -13.3333 11.0809 25.6667 11.0809 0 M1.41418 10.3333 L11.0809 20 L21.4142 10.3333"
        stroke={color}
        strokeWidth="4"
      />
    </svg>
  );
};

const MyPathMobile = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const { osaamispolkuLogo, opintopolkuLogo, tyomarkkinatoriLogo } = getLocalizedLogos(language);

  return (
    <figure className="font-semibold -mx-5 flex flex-col gap-5 bg-white p-5 font-poppins text-body-xs sm:-mx-6 sm:p-6">
      <div className="mb-3 flex items-end gap-3">
        {osaamispolkuLogo}
        <div className="mb-1 text-primary-gray sm:mb-0 sm:text-body-sm">
          / {t('common:navigation.external.yksilo.label')}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex w-full items-center gap-3 rounded-md bg-secondary-1-light-2 py-3 pr-3 pl-5">
          <span className="grow">{t('about-service.sections.my-path.image.enter-your-info')}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <path
              d="M21 21C26.8013 21 31.5 16.3013 31.5 10.5C31.5 4.69875 26.8013 0 21 0C15.1987 0 10.5 4.69875 10.5 10.5C10.5 16.3013 15.1987 21 21 21ZM21 26.25C13.9913 26.25 0 29.7675 0 36.75V42H42V36.75C42 29.7675 28.0088 26.25 21 26.25Z"
              fill="#006DB3"
            />
          </svg>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              className="relative -right-[7px]"
            >
              <path
                d="M3.5 11.1338L17.75 2.90625L19.25 2.04102L19.25 21.959L17.75 21.0938L3.5 12.8662L2 12L3.5 11.1338Z"
                fill="white"
                stroke="#006DB3"
                strokeWidth="2"
              />
              <path d="M17 4.50011L24.5 8.96083e-07L24.5 24L17 19.5001L17 4.50011Z" fill="white" />
            </svg>
            <div className="w-[140px] rounded-[30px] border-2 border-secondary-1-dark bg-white p-4">
              {t('about-service.sections.my-path.image.tell-about-skills')}
            </div>
          </div>
        </div>
        <ArrowMobile color="#add8f2" className="mb-2" />
        <div className="flex w-full items-center justify-between gap-3 rounded-md bg-[#B4B5E4] px-5 py-3">
          {t('about-service.sections.my-path.image.service-helps-with-ai')}
          <ServiceHelpsWithAiTooltip />
        </div>
        <ArrowMobile color="#B4B5E4" className="mb-2" />
        <div className="flex w-full items-center justify-between gap-3 rounded-md bg-secondary-1-light-1 px-5 py-3">
          {t('about-service.sections.my-path.image.choose-interests-and-skills')}
          <ChooseInterestsAndSkillsTooltip />
        </div>
        <ArrowMobile color="#85c4ec" className="mb-2" />
        <div className="grid w-full grid-cols-2 gap-2 rounded-md border-4 border-secondary-1-light-2 bg-white p-2 text-right text-white">
          <div className="flex items-center justify-center gap-3 rounded-sm bg-secondary-1-dark p-3">
            {t('about-service.sections.my-path.image.professions')}
            <ProfessionsTooltip />
          </div>
          <div className="flex items-center justify-center gap-3 rounded-sm bg-secondary-1 p-3">
            {t('about-service.sections.my-path.image.degrees')}
            <DegreesTooltip />
          </div>
          <div className="flex items-center justify-center gap-3 rounded-sm bg-secondary-1-dark p-3">
            {t('about-service.sections.my-path.image.other-work-opportunities')}
            <OtherWorkPpportunitiesTooltip />
          </div>
          <div className="flex items-center justify-center gap-3 rounded-sm bg-secondary-1 p-3">
            {t('about-service.sections.my-path.image.other-education')}
            <OtherEducationTooltip />
          </div>
        </div>
        <ArrowMobile color="#B4B5E4" rotation={180} className="mt-2" />
        <div className="flex w-full items-center justify-between gap-3 rounded-md bg-[#B4B5E4] px-5 py-3">
          {t('about-service.sections.my-path.image.content-created-with-ai')}
          <ContentCreatedWithAiTooltip />
        </div>
        <div className="grid w-full grid-cols-2 gap-5">
          <div className="flex h-full flex-col items-center">
            <ArrowMobile color="#CCC" rotation={180} className="mt-2" />
            <div className="flex w-full flex-1 flex-col items-end justify-between gap-3 rounded-md bg-primary-light-2 px-5 py-3">
              <div className="flex flex-col items-end">
                <span>{t('about-service.sections.my-path.image.career-info')}</span>
                <span>{t('about-service.sections.my-path.image.job-postings')}</span>
              </div>
              {tyomarkkinatoriLogo}
            </div>
          </div>
          <div className="flex h-full flex-col items-center">
            <ArrowMobile color="#CCC" rotation={180} className="mt-2" />
            <div className="flex w-full flex-1 flex-col items-end justify-between gap-3 rounded-md bg-primary-light-2 px-5 py-3">
              {t('about-service.sections.my-path.image.education-options')}
              {opintopolkuLogo}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
};

export const MyPathImage = () => {
  const { md } = useMediaQueries();

  return md ? <MyPathDesktop /> : <MyPathMobile />;
};
