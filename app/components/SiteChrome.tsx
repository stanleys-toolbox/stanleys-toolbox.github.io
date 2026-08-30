import {
  alternateLocale,
  pagePath,
  type Locale,
  type PageKey,
} from "../lib/site";

const chromeCopy = {
  en: {
    skip: "Skip to content",
    navLabel: "Primary navigation",
    tools: "Tools",
    about: "About",
    privacy: "Privacy",
    support: "Support",
    languageLabel: "阅读中文版",
    languageShort: "中文",
    note: "Independent software for macOS.",
  },
  "zh-CN": {
    skip: "跳到主要内容",
    navLabel: "主导航",
    tools: "工具",
    about: "关于",
    privacy: "隐私",
    support: "支持",
    languageLabel: "Read in English",
    languageShort: "EN",
    note: "独立开发的 macOS 软件。",
  },
} as const;

export function SiteHeader({
  locale,
  page,
}: {
  locale: Locale;
  page: PageKey;
}) {
  const text = chromeCopy[locale];
  const otherLocale = alternateLocale(locale);
  const home = pagePath(locale, "home");

  return (
    <>
      <a className="skip-link" href="#main">
        {text.skip}
      </a>
      <header className="site-header">
        <a className="brand" href={home} aria-label="Stanley’s Toolbox">
          <span className="brand-mark" aria-hidden="true">
            ST
          </span>
          <span>Stanley’s Toolbox</span>
        </a>

        <nav aria-label={text.navLabel}>
          <a href={`${home}#tools`}>{text.tools}</a>
          <a href={`${home}#about`}>{text.about}</a>
        </nav>

        <a
          className="language-switch"
          href={pagePath(otherLocale, page)}
          hrefLang={otherLocale}
          lang={otherLocale}
          aria-label={text.languageLabel}
        >
          {text.languageShort}
        </a>
      </header>
    </>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const text = chromeCopy[locale];

  return (
    <footer className="site-footer">
      <div>
        <a className="brand footer-brand" href={pagePath(locale, "home")}>
          <span className="brand-mark" aria-hidden="true">
            ST
          </span>
          <span>Stanley’s Toolbox</span>
        </a>
        <p>{text.note}</p>
      </div>
      <nav aria-label={locale === "en" ? "Footer navigation" : "页脚导航"}>
        <a href={pagePath(locale, "privacy")}>{text.privacy}</a>
        <a href={pagePath(locale, "support")}>{text.support}</a>
      </nav>
      <p className="copyright">© 2026 Stanley’s Toolbox</p>
    </footer>
  );
}

export function SiteFrame({
  locale,
  page,
  children,
}: {
  locale: Locale;
  page: PageKey;
  children: React.ReactNode;
}) {
  return (
    <div className="site-shell">
      <SiteHeader locale={locale} page={page} />
      {children}
      <SiteFooter locale={locale} />
    </div>
  );
}
