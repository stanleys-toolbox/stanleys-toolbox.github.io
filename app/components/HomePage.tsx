/* eslint-disable @next/next/no-img-element -- static export uses a pre-sized local app icon */
import { pagePath, type Locale } from "../lib/site";
import { SiteFrame } from "./SiteChrome";

const copy = {
  en: {
    eyebrow: "Independent tools for macOS",
    title: "Small tools. Made with care.",
    intro:
      "Stanley’s Toolbox is a collection of focused tools I build for everyday work. Each one solves a specific problem without adding unnecessary complexity.",
    toolsKicker: "Tools",
    toolsTitle: "One clear job at a time.",
    toolsIntro:
      "A growing shelf of small, purpose-built apps. Open a tool to see the full story, features, and release details.",
    toolStatus: "Public preview",
    productDetail:
      "Keep important deadlines on your desktop, without getting in the way.",
    platform: "macOS 14+",
    learnMore: "Explore Deadline Wall",
    collectionNote: "More tools will appear here when they are ready.",
    aboutKicker: "The toolbox",
    aboutTitle: "A quiet place for useful software.",
    aboutBody:
      "Focused in scope, calm by default, and useful without an account whenever possible. The aim is not to build another large productivity system—just thoughtful tools that earn their place in your day.",
    values: ["Focused", "Calm", "Local-first"],
  },
  "zh-CN": {
    eyebrow: "独立开发的 macOS 工具",
    title: "小工具，认真做。",
    intro:
      "Stanley’s Toolbox 收集我为日常工作制作的小工具。每个工具只解决一个明确的问题，尽量简单、安静，也尽量长期好用。",
    toolsKicker: "工具",
    toolsTitle: "一次，认真解决一个明确的问题。",
    toolsIntro:
      "这里会逐渐收录小而专注的应用。进入具体工具页面，可以查看完整介绍、功能与发布状态。",
    toolStatus: "公开预览版",
    productDetail:
      "把重要的截止日期留在桌面上，同时不挡住你的工作。",
    platform: "macOS 14+",
    learnMore: "了解 Deadline Wall",
    collectionNote: "新工具会在准备好时出现在这里。",
    aboutKicker: "这个工具箱",
    aboutTitle: "安静地做一些真正有用的软件。",
    aboutBody:
      "范围明确、默认安静，并尽可能无需账号也能完整使用。这里不打算再造一套庞大的效率系统，只想认真做一些值得留在日常生活里的工具。",
    values: ["专注", "克制", "本地优先"],
  },
} as const;

export function HomePage({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const productHref = pagePath(locale, "deadlineWall");

  return (
    <SiteFrame locale={locale} page="home">
      <main id="main">
        <section className="home-hero" aria-labelledby="hero-title">
          <div className="home-hero-copy">
            <p className="eyebrow">{text.eyebrow}</p>
            <h1 id="hero-title">{text.title}</h1>
          </div>
          <div className="home-hero-intro">
            <p>{text.intro}</p>
            <a href="#tools">
              {text.toolsKicker} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section className="tool-index" id="tools" aria-labelledby="tools-heading">
          <div className="tool-index-heading">
            <div>
              <p className="section-kicker">{text.toolsKicker}</p>
              <h2 id="tools-heading">{text.toolsTitle}</h2>
            </div>
            <p>{text.toolsIntro}</p>
          </div>

          <div className="tool-grid">
            <a className="tool-card" href={productHref}>
              <div className="tool-card-topline">
                <img src="/deadline-wall-icon.png" width="80" height="80" alt="" />
                <span className="tool-status">{text.toolStatus}</span>
              </div>
              <div className="tool-card-copy">
                <h3>Deadline Wall</h3>
                <p>{text.productDetail}</p>
              </div>
              <div className="tool-card-footer">
                <span>{text.platform}</span>
                <span>
                  {text.learnMore} <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>
          </div>
          <p className="collection-note">{text.collectionNote}</p>
        </section>

        <section className="home-about" id="about" aria-labelledby="about-heading">
          <div>
            <p className="section-kicker">{text.aboutKicker}</p>
            <h2 id="about-heading">{text.aboutTitle}</h2>
          </div>
          <div className="home-about-copy">
            <p>{text.aboutBody}</p>
            <ul aria-label={locale === "en" ? "Studio values" : "工作室理念"}>
              {text.values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
