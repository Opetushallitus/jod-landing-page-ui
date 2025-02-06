import { useTranslation } from "react-i18next";
import {
  NavLink,
  useParams,
} from "react-router";
import preLaunchImg1 from "@/../assets/pre-launch-1.avif";
import preLaunchImg2 from "@/../assets/pre-launch-2.avif";
import preLaunchImg3 from "@/../assets/pre-launch-3.avif";
import preLaunchImg4 from "@/../assets/pre-launch-4.avif";
import preLaunchImg5 from "@/../assets/pre-launch-5.avif";
import {
  LogoEuEn,
  LogoEuFi,
  LogoEuSv,
  LogoKehaEn,
  LogoKehaFi,
  LogoKehaSv,
  LogoOkmEn,
  LogoOkmFiSv,
  LogoOphEn,
  LogoOphFiSv,
  LogoRgbEn,
  LogoRgbFi,
  LogoRgbSv,
  LogoTemEn,
  LogoTemFiSv,
} from "./logos";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const {
    t,
  } = useTranslation();
  const { lng } = useParams();

  return [
    { title: t("osaamispolku", { lng }) },
    { name: "description", content: t("text-1", { lng }) },
    { property: "og:title", content: t("osaamispolku", { lng }) },
    { property: "og:description", content: t("text-1", { lng }) },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `https://osaamispolku.fi/${lng}` },
    {
      property: "og:image",
      content: `https://osaamispolku.fi${preLaunchImg1}`,
    },
  ];
}

export default function Home() {
  const { t } = useTranslation();
  const { lng } = useParams();

  return (
    <>
      <header role="banner">
        <nav
          role="navigation"
          className="flex justify-between gap-4 px-5 md:px-7 py-5 md:py-[20px]"
        >
          <div className="p2 md:p-3">
            {lng === "fi" && <LogoRgbFi className="h-[30px] md:h-11" />}
            {lng === "sv" && <LogoRgbSv className="h-[30px] md:h-11" />}
            {lng === "en" && <LogoRgbEn className="h-[30px] md:h-11" />}
            <span className="sr-only">{t("osaamispolku", { lng })}</span>
          </div>
          <div className="text-[#888] text-[12px] md:text-[20px] leading-[14px] md:leading-[22px] tracking-[0.12px] md:tracking-[0.2px] font-bold mt-[12px] md:mt-[35px]">
            <NavLink
              to="/fi"
              className={({ isActive }) =>
                isActive ? "text-black" : undefined
              }
            >
              FI
            </NavLink>
            &nbsp;/&nbsp;
            <NavLink
              to="/sv"
              className={({ isActive }) =>
                isActive ? "text-black" : undefined
              }
            >
              SV
            </NavLink>
            &nbsp;/&nbsp;
            <NavLink
              to="/en"
              className={({ isActive }) =>
                isActive ? "text-black" : undefined
              }
            >
              EN
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <img
            src={preLaunchImg1}
            alt={t("alt-1", { lng })}
            className="order-1 aspect-square object-cover object-[50%] h-full w-full"
          />
          <div className="order-2 aspect-square bg-[#EE7C46] flex flex-col gap-3 lg:gap-5 py-3 px-6 md:pl-[40px] md:pr-[72px] xl:pl-[80px] xl:pr-[160px] justify-center">
            <h1 className="text-black text-[24px] leading-[32px] xl:text-[54px] xl:leading-[64px] xxl:text-[64px] xxl:leading-[84px] font-semibold">
              {t("heading-1", { lng })}
            </h1>
            <p className="text-black text-[14px] leading-[20px] xl:text-[24px] xl:leading-normal xxl:text-[32px] font-medium">
              {t("text-1", { lng })}
            </p>
          </div>

          <img
            src={preLaunchImg2}
            alt={t("alt-2", { lng })}
            className="order-3 md:order-4 aspect-square object-cover object-[90%] h-full w-full"
          />
          <div className="order-4 md:order-3 aspect-square bg-[#329DE0] flex flex-col gap-3 lg:gap-5 py-3 px-6 md:pl-[72px] md:pr-[40px] xl:pl-[160px] xl:pr-[80px] justify-center">
            <h1 className="text-black text-[24px] leading-[32px] xl:text-[54px] xl:leading-[64px] xxl:text-[64px] xxl:leading-[84px] font-semibold">
              {t("heading-2", { lng })}
            </h1>
            <p className="text-black text-[14px] leading-[20px] xl:text-[24px] xl:leading-normal xxl:text-[32px] font-medium">
              {t("text-2", { lng })}
            </p>
          </div>

          <img
            src={preLaunchImg3}
            alt={t("alt-3", { lng })}
            className="order-5 aspect-square object-cover object-[10%] h-full w-full"
          />
          <div className="order-6 aspect-square bg-[#05A8B3] flex flex-col gap-3 lg:gap-5 py-3 px-6 md:pl-[40px] md:pr-[72px] xl:pl-[80px] xl:pr-[160px] justify-center">
            <h1 className="text-black text-[24px] leading-[32px] xl:text-[54px] xl:leading-[64px] xxl:text-[64px] xxl:leading-[84px] font-semibold">
              {t("heading-3", { lng })}
            </h1>
            <p className="text-black text-[14px] leading-[20px] xl:text-[24px] xl:leading-normal xxl:text-[32px] font-medium">
              {t("text-3", { lng })}
            </p>
          </div>

          <img
            src={preLaunchImg4}
            alt={t("alt-4", { lng })}
            className="order-7 md:order-8 aspect-square object-cover object-[60%] h-full w-full"
          />
          <div className="order-8 md:order-7 aspect-square bg-[#CD4EB3] flex flex-col gap-3 lg:gap-5 py-3 px-6 md:pl-[72px] md:pr-[40px] xl:pl-[160px] xl:pr-[80px] justify-center">
            <h1 className="text-black text-[24px] leading-[32px] xl:text-[54px] xl:leading-[64px] xxl:text-[64px] xxl:leading-[84px] font-semibold">
              {t("heading-4", { lng })}
            </h1>
            <p className="text-black text-[14px] leading-[20px] xl:text-[24px] xl:leading-normal xxl:text-[32px] font-medium">
              {t("text-4", { lng })}
            </p>
          </div>

          <img
            src={preLaunchImg5}
            alt={t("alt-5", { lng })}
            className="order-9 aspect-square object-cover object-[60%] h-full w-full"
          />
          <div className="order-10 aspect-square bg-[#A59AB2] flex flex-col gap-3 lg:gap-5 py-3 px-6 md:pl-[40px] md:pr-[72px] xl:pl-[80px] xl:pr-[160px] justify-center">
            <h1 className="text-black text-[24px] leading-[32px] xl:text-[54px] xl:leading-[64px] xxl:text-[64px] xxl:leading-[84px] font-semibold">
              {t("heading-5", { lng })}
            </h1>
            <p className="text-black text-[14px] leading-[20px] xl:text-[24px] xl:leading-normal xxl:text-[32px] font-medium">
              {t("text-5", { lng })}
            </p>
            <p className="text-black text-[14px] leading-[20px] xl:text-[24px] xl:leading-normal xxl:text-[32px] font-medium">
              {t("text-5-link-text", { lng })}:{" "}
              <a
                href="https://link.webropol.com/s/liity-jod-listalle"
                target="_blank"
                className="text-[#003454]"
              >
                https://link.webropol.com/s/liity-jod-listalle
              </a>
            </p>
          </div>
        </div>
      </main>
      <footer className="flex flex-col items-center px-5 py-7 md:px-7 xl:px-[160px] md:py-11 xl:py-[80px] gap-9 md:gap-11">
        <div className="flex flex-col md:flex-row flex-wrap gap-7 md:gap-8 justify-center">
          {lng === "fi" && (
            <>
              <LogoEuFi className="h-8 md:h-9" />
              <LogoOkmFiSv className="h-8 md:h-9" />
              <LogoTemFiSv className="h-8 md:h-9" />
              <LogoKehaFi className="h-8 md:h-9" />
              <LogoOphFiSv className="h-8 md:h-9" />
            </>
          )}
          {lng === "sv" && (
            <>
              <LogoEuSv className="h-8 md:h-9" />
              <LogoOkmFiSv className="h-8 md:h-9" />
              <LogoTemFiSv className="h-8 md:h-9" />
              <LogoKehaSv className="h-8 md:h-9" />
              <LogoOphFiSv className="h-8 md:h-9" />
            </>
          )}
          {lng === "en" && (
            <>
              <LogoEuEn className="h-8 md:h-9" />
              <LogoOkmEn className="h-8 md:h-9" />
              <LogoTemEn className="h-8 md:h-9" />
              <LogoKehaEn className="h-8 md:h-9" />
              <LogoOphEn className="h-8 md:h-9" />
            </>
          )}
        </div>
        <p className="text-[#21272A] text-[14px] font-normal leading-[20px] md:text-[16px] md:leading-[22px]">
          {t("copyright", { lng, year: new Date().getFullYear() })}
        </p>
      </footer>
    </>
  );
}
