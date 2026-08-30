import { SUPPORT_URL, pagePath, type Locale } from "../lib/site";
import { SiteFrame } from "./SiteChrome";

const copy = {
  en: {
    eyebrow: "Support",
    title: "Help with Deadline Wall.",
    intro:
      "Deadline Wall is currently in preview. These notes cover the current app behavior and the most common setup questions.",
    requirements: "Requires macOS 14 or later.",
    contactKicker: "Contact",
    contactTitle: "Report an issue on GitHub.",
    contactBody:
      "GitHub Issues is the public support channel for bug reports and reproducible problems. Please avoid including private deadline data or exported JSON files unless you have removed sensitive information.",
    contactAction: "Open GitHub Issues",
    contactNote: "This is the public Deadline Wall issue tracker.",
    faqKicker: "Common questions",
    faqTitle: "A few useful answers.",
    faqs: [
      {
        question: "Where is the app after I open it?",
        answer:
          "Deadline Wall is a menu bar app and does not normally show a Dock icon. Look for its calendar-and-clock icon in the macOS menu bar.",
      },
      {
        question: "How do I show, edit, or hide the wall?",
        answer:
          "Open the menu bar panel and choose the relevant Wall, Edit, Hidden, or Focus action. Wall Mode sits at the desktop level and lets pointer events pass through; Edit Mode makes the wall interactive.",
      },
      {
        question: "Can it appear on more than one display?",
        answer:
          "Yes. You can choose the main display or all connected displays. Some macOS full-screen, Spaces, Stage Manager, and changing-monitor combinations may behave differently, so they should be checked with your setup.",
      },
      {
        question: "How do import and export work?",
        answer:
          "The app can import and export a versioned JSON file through a location you select. An export is an independent file, so store or delete it as you would any other document containing personal dates and notes.",
      },
      {
        question: "Can I use my own background?",
        answer:
          "Yes. Choose a local image in the app settings and select Fill or Fit, with optional blur. Deadline Wall stores a local copy for display.",
      },
      {
        question: "Can it launch when I sign in?",
        answer:
          "Yes. Launch at login is optional and can be changed from the app settings.",
      },
      {
        question: "Does it send notifications or sync a calendar?",
        answer:
          "No. The current preview is a local countdown wall. It does not provide notifications, calendar sync, iCloud sync, collaboration, or cross-device access.",
      },
      {
        question: "How do I uninstall it?",
        answer:
          "Quit Deadline Wall and move the app to the Trash. Before removing it, export any deadline data you want to keep. Complete support-file removal guidance will accompany the public release.",
      },
    ],
    privacy: "Read the privacy details",
  },
  "zh-CN": {
    eyebrow: "支持",
    title: "获取 Deadline Wall 帮助。",
    intro:
      "Deadline Wall 目前仍是预览版。以下说明涵盖当前应用行为和最常见的设置问题。",
    requirements: "需要 macOS 14 或更高版本。",
    contactKicker: "联系",
    contactTitle: "通过 GitHub 报告问题。",
    contactBody:
      "GitHub Issues 是接收错误报告和可复现问题的公开支持渠道。除非已经移除敏感信息，请不要附上私人截止事项或导出的 JSON 文件。",
    contactAction: "打开 GitHub Issues",
    contactNote: "这是 Deadline Wall 的公开问题跟踪器。",
    faqKicker: "常见问题",
    faqTitle: "一些实用答案。",
    faqs: [
      {
        question: "打开应用后，它在哪里？",
        answer:
          "Deadline Wall 是菜单栏应用，通常不会显示 Dock 图标。请在 macOS 菜单栏中寻找日历与时钟图标。",
      },
      {
        question: "怎样显示、编辑或隐藏倒计时墙？",
        answer:
          "打开菜单栏面板，然后选择相应的 Wall、Edit、Hidden 或 Focus 操作。Wall Mode 位于桌面层级并允许鼠标事件穿透；Edit Mode 则可与倒计时墙交互。",
      },
      {
        question: "可以显示在多个显示器上吗？",
        answer:
          "可以。你可以选择主显示器或全部已连接显示器。某些 macOS 全屏、Spaces、Stage Manager 以及显示器变化组合可能表现不同，建议在自己的设置下确认。",
      },
      {
        question: "导入和导出如何工作？",
        answer:
          "应用可以通过你选择的位置导入和导出带版本的 JSON 文件。导出文件是独立文档，其中可能包含个人日期和备注，请自行妥善保存或删除。",
      },
      {
        question: "可以使用自己的背景吗？",
        answer:
          "可以。在应用设置中选择本地图片，再选择 Fill 或 Fit，并可选模糊效果。Deadline Wall 会保存一份本地副本用于显示。",
      },
      {
        question: "可以登录时自动启动吗？",
        answer: "可以。登录时启动是可选功能，可在应用设置中修改。",
      },
      {
        question: "它会发送通知或同步日历吗？",
        answer:
          "不会。当前预览版是一面本地倒计时墙，不提供通知、日历同步、iCloud 同步、协作或跨设备访问。",
      },
      {
        question: "怎样卸载？",
        answer:
          "退出 Deadline Wall，然后把应用移到废纸篓。移除前，请先导出你希望保留的截止事项。完整的支持文件清理说明会随公开版本一起提供。",
      },
    ],
    privacy: "查看隐私详情",
  },
} as const;

export function SupportPage({ locale }: { locale: Locale }) {
  const text = copy[locale];

  return (
    <SiteFrame locale={locale} page="support">
      <main id="main" className="support-main">
        <header className="document-hero support-hero">
          <p className="eyebrow">{text.eyebrow}</p>
          <h1>{text.title}</h1>
          <p>{text.intro}</p>
          <span>{text.requirements}</span>
        </header>

        <section className="support-contact" aria-labelledby="contact-heading">
          <div>
            <p className="section-kicker">{text.contactKicker}</p>
            <h2 id="contact-heading">{text.contactTitle}</h2>
          </div>
          <div>
            <p>{text.contactBody}</p>
            <a className="button button-primary" href={SUPPORT_URL} rel="noreferrer">
              {text.contactAction} ↗
            </a>
            <small>{text.contactNote}</small>
          </div>
        </section>

        <section className="faq-section light-section" aria-labelledby="faq-heading">
          <div className="section-heading section-heading-dark compact-heading">
            <p className="section-kicker">{text.faqKicker}</p>
            <h2 id="faq-heading">{text.faqTitle}</h2>
          </div>
          <div className="faq-list">
            {text.faqs.map((faq, index) => (
              <details key={faq.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {faq.question}
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
          <a className="text-link dark-link" href={pagePath(locale, "privacy")}>
            {text.privacy} ↗
          </a>
        </section>
      </main>
    </SiteFrame>
  );
}
