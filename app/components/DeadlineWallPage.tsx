/* eslint-disable @next/next/no-img-element -- static export uses pre-sized local assets */
import { deadlineWallRelease as release } from "../lib/deadline-wall-release";
import { pagePath, type Locale } from "../lib/site";
import { SiteFrame } from "./SiteChrome";

const copy = {
  en: {
    status: "Tool 01 · Public preview",
    eyebrow: "Native countdown wall for macOS",
    title: "Keep important deadlines in view.",
    intro:
      "Deadline Wall is a desktop countdown wall for macOS. It keeps due dates at the desktop level, behind ordinary app windows, and updates their urgency as time passes.",
    download: "Download for macOS",
    watch: "Watch the preview film",
    availability: `Version ${release.version} · Unsigned public preview`,
    requirements: ["macOS 14+", "Local-first", "No account required"],
    visualAlt: "Deadline Wall preview with six synthetic countdown cards arranged in a grid",
    line: "Right on your desktop. Out of your way.",
    featuresKicker: "How it works",
    featuresTitle: "The dates that matter, without another system to maintain.",
    features: [
      {
        number: "01",
        title: "Quick Add",
        body: "Capture a deadline from the menu bar with a title, date, category, and priority. Open the full editor when you need more control.",
      },
      {
        number: "02",
        title: "Desktop Wall",
        body: "Keep countdown cards at the desktop level, behind ordinary app windows. Choose the main display or all connected displays.",
      },
      {
        number: "03",
        title: "Automatic urgency",
        body: "Deadlines move through Normal, Soon, Urgent, Critical, and Overdue states as time passes, with a stable, useful order.",
      },
      {
        number: "04",
        title: "Focus Mode",
        body: "Narrow the wall to the deadlines that matter now. Wall, Edit, Hidden, and Focus are modes inside Deadline Wall—not macOS Focus integration.",
      },
    ],
    quickKicker: "Menu bar capture",
    quickTitle: "Add a deadline in seconds.",
    quickBody:
      "Quick Add uses the same native macOS controls as the app. Your deadline list and preferences remain on your Mac.",
    quickAlt: "Deadline Wall menu bar panel with Quick Add expanded",
    detailsKicker: "Made for a specific job",
    detailsTitle: "A countdown wall, not a replacement for your calendar.",
    detailsBody:
      "Use Deadline Wall when you want important due dates to remain visually present. It is intentionally not a calendar, notification service, collaboration platform, or task-management system.",
    detailItems: [
      "Configurable countdown units and urgency thresholds",
      "Automatic, light, and dark appearance",
      "Transparent background or a local custom image",
      "Versioned JSON import and export",
      "Optional launch at login",
      "Complete, restore, edit, and delete deadlines",
    ],
    filmKicker: "Preview film",
    filmTitle: "See the wall in motion.",
    filmNote: "Rendered product film · Sound effects only · No narration",
    privacyLine:
      "No account. No network required. Deadline data is stored locally on your Mac.",
    privacyLink: "Read the privacy details",
    releaseKicker: "Download",
    releaseTitle: `Deadline Wall ${release.version} is available.`,
    releaseBody:
      "Download the unsigned public preview and review the macOS approval and file-verification steps before opening it.",
    releaseMeta: `${release.minimumOS} · ${release.architectures} · ${release.fileSize}`,
    releaseAction: "Go to download",
  },
  "zh-CN": {
    status: "工具 01 · 公开预览版",
    eyebrow: "原生 macOS 倒计时墙",
    title: "让重要的截止日期始终在视野中。",
    intro:
      "Deadline Wall 是一款 macOS 桌面倒计时墙。它把截止日期放在桌面层级、普通应用窗口之后，并随着时间自动更新紧急程度。",
    download: "下载 macOS 版",
    watch: "观看预览短片",
    availability: `版本 ${release.version} · 未签名公开预览版`,
    requirements: ["macOS 14+", "本地优先", "无需账号"],
    visualAlt: "由六张合成数据倒计时卡片组成的 Deadline Wall 预览网格",
    line: "就在桌面上，不挡你的路。",
    featuresKicker: "工作方式",
    featuresTitle: "看清重要日期，无需再维护一套复杂系统。",
    features: [
      {
        number: "01",
        title: "快速添加",
        body: "直接从菜单栏输入标题、日期、分类和优先级；需要更多控制时，再打开完整编辑器。",
      },
      {
        number: "02",
        title: "桌面倒计时墙",
        body: "倒计时卡片位于桌面层级、普通应用窗口之后，并可选择显示在主显示器或全部已连接显示器上。",
      },
      {
        number: "03",
        title: "自动更新紧急程度",
        body: "随着时间推移，截止日期会自动进入普通、即将到期、紧急、危急和逾期状态，并保持稳定而实用的排序。",
      },
      {
        number: "04",
        title: "专注模式",
        body: "只保留此刻重要的截止日期。Wall、Edit、Hidden 和 Focus 都是应用内部模式，不是 macOS 系统专注模式集成。",
      },
    ],
    quickKicker: "菜单栏快速记录",
    quickTitle: "几秒钟添加一个截止日期。",
    quickBody:
      "Quick Add 使用和应用一致的原生 macOS 控件。截止日期和偏好设置都保留在你的 Mac 上。",
    quickAlt: "展开快速添加功能的 Deadline Wall 菜单栏面板",
    detailsKicker: "为一个明确任务而做",
    detailsTitle: "它是一面倒计时墙，不是日历的替代品。",
    detailsBody:
      "当你希望重要日期持续出现在视野中时，可以使用 Deadline Wall。它并不是日历、通知服务、协作平台或完整的任务管理系统。",
    detailItems: [
      "可配置倒计时单位和紧急度阈值",
      "自动、浅色和深色外观",
      "透明背景或本地自定义图片",
      "带版本的 JSON 导入与导出",
      "可选登录时启动",
      "完成、恢复、编辑和删除截止日期",
    ],
    filmKicker: "预览短片",
    filmTitle: "看看倒计时墙如何工作。",
    filmNote: "渲染制作的产品短片 · 仅有音效 · 没有旁白",
    privacyLine: "无需账号或网络连接。截止日期数据保存在你的 Mac 本地。",
    privacyLink: "查看隐私详情",
    releaseKicker: "下载",
    releaseTitle: `Deadline Wall ${release.version} 已可下载。`,
    releaseBody:
      "这是未经 Apple 签名或公证的公开预览版；下载页面提供了首次启动许可和文件验证步骤。",
    releaseMeta: `${release.minimumOS} · Apple Silicon + Intel · ${release.fileSize}`,
    releaseAction: "前往下载页面",
  },
} as const;

export function DeadlineWallPage({ locale }: { locale: Locale }) {
  const text = copy[locale];

  return (
    <SiteFrame locale={locale} page="deadlineWall">
      <main id="main">
        <section className="product-hero" aria-labelledby="product-title">
          <div className="product-hero-copy">
            <div className="app-identity">
              <img src="/deadline-wall-icon.png" width="76" height="76" alt="" />
              <span>{text.status}</span>
            </div>
            <p className="eyebrow">{text.eyebrow}</p>
            <h1 id="product-title">{text.title}</h1>
            <p className="hero-intro">{text.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={pagePath(locale, "deadlineWallDownload")}>
                {text.download}
              </a>
              <a className="button button-secondary" href="#film">
                {text.watch}
              </a>
            </div>
            <span className="availability-note">{text.availability}</span>
            <ul className="requirement-list" aria-label={locale === "en" ? "Requirements" : "要求"}>
              {text.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <figure className="product-hero-visual">
            <img
              src="/deadline-wall-wall.jpg"
              width="1920"
              height="1080"
              alt={text.visualAlt}
            />
            <figcaption>{text.line}</figcaption>
          </figure>
        </section>

        <section className="film-section product-film" id="film" aria-labelledby="product-film-heading">
          <div className="section-heading">
            <p className="section-kicker">{text.filmKicker}</p>
            <h2 id="product-film-heading">{text.filmTitle}</h2>
            <p>{text.privacyLine}</p>
            <a className="text-link" href={pagePath(locale, "privacy")}>
              {text.privacyLink} ↗
            </a>
          </div>
          <div className="film-frame">
            <video controls preload="metadata" poster="/deadline-wall-poster.jpg">
              <source src="/deadline-wall-film.mp4" type="video/mp4" />
              <track
                kind="captions"
                src={locale === "en" ? "/deadline-wall-captions-en.vtt" : "/deadline-wall-captions-zh.vtt"}
                srcLang={locale === "en" ? "en" : "zh-CN"}
                label={locale === "en" ? "English sound captions" : "中文音效字幕"}
              />
            </video>
            <p className="media-note">{text.filmNote}</p>
          </div>
        </section>

        <section className="feature-section light-section" aria-labelledby="features-heading">
          <div className="section-heading section-heading-dark compact-heading">
            <p className="section-kicker">{text.featuresKicker}</p>
            <h2 id="features-heading">{text.featuresTitle}</h2>
          </div>
          <div className="feature-grid">
            {text.features.map((feature) => (
              <article key={feature.number}>
                <span>{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="quick-add-section" aria-labelledby="quick-add-heading">
          <div className="quick-add-copy">
            <p className="section-kicker">{text.quickKicker}</p>
            <h2 id="quick-add-heading">{text.quickTitle}</h2>
            <p>{text.quickBody}</p>
          </div>
          <div className="quick-add-visual">
            <img
              src="/quick-add-enabled.png"
              width="760"
              height="1240"
              alt={text.quickAlt}
            />
          </div>
        </section>

        <section className="detail-section light-section" aria-labelledby="details-heading">
          <div className="section-heading section-heading-dark">
            <p className="section-kicker">{text.detailsKicker}</p>
            <h2 id="details-heading">{text.detailsTitle}</h2>
            <p>{text.detailsBody}</p>
          </div>
          <ul className="detail-list">
            {text.detailItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="release-section" aria-labelledby="release-heading">
          <p className="section-kicker">{text.releaseKicker}</p>
          <div>
            <h2 id="release-heading">{text.releaseTitle}</h2>
            <p>{text.releaseBody}</p>
            <p className="release-meta">{text.releaseMeta}</p>
            <a className="button button-primary release-button" href={pagePath(locale, "deadlineWallDownload")}>
              {text.releaseAction} <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
