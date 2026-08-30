import type { Metadata } from "next";

export type Locale = "en" | "zh-CN";
export type PageKey = "home" | "deadlineWall" | "privacy" | "support";

export const SITE_URL = "https://stanleys-toolbox.github.io";
export const SUPPORT_URL =
  "https://github.com/stanleys-toolbox/deadline-wall/issues";

export const pagePaths: Record<Locale, Record<PageKey, string>> = {
  en: {
    home: "/",
    deadlineWall: "/apps/deadline-wall/",
    privacy: "/privacy/",
    support: "/support/",
  },
  "zh-CN": {
    home: "/zh-cn/",
    deadlineWall: "/zh-cn/apps/deadline-wall/",
    privacy: "/zh-cn/privacy/",
    support: "/zh-cn/support/",
  },
};

export function pagePath(locale: Locale, page: PageKey) {
  return pagePaths[locale][page];
}

export function alternateLocale(locale: Locale): Locale {
  return locale === "en" ? "zh-CN" : "en";
}

type PageMetadataOptions = {
  locale: Locale;
  page: PageKey;
  title: string;
  description: string;
  image?: string;
};

export function pageMetadata({
  locale,
  page,
  title,
  description,
  image,
}: PageMetadataOptions): Metadata {
  const canonicalPath = pagePath(locale, page);
  const englishPath = pagePath("en", page);
  const chinesePath = pagePath("zh-CN", page);
  const canonical = new URL(canonicalPath, SITE_URL).toString();
  const images = image ? [new URL(image, SITE_URL).toString()] : [];

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: new URL(englishPath, SITE_URL).toString(),
        "zh-CN": new URL(chinesePath, SITE_URL).toString(),
        "x-default": new URL(englishPath, SITE_URL).toString(),
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "zh_CN",
      url: canonical,
      siteName: "Stanley’s Toolbox",
      title,
      description,
      images,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images,
    },
  };
}
