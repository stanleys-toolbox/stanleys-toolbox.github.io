import { pagePath, type Locale } from "../lib/site";
import { SiteFrame } from "./SiteChrome";

const copy = {
  en: {
    eyebrow: "Privacy",
    title: "Your deadlines stay on your Mac.",
    intro:
      "This notice explains how the Deadline Wall app and the Stanley’s Toolbox website handle information.",
    effective: "Effective August 30, 2026",
    sections: [
      {
        title: "Who is responsible",
        body: [
          "Responsible developer and data controller: Stanley, operating as Stanley’s Toolbox. General product questions can be directed through the support page.",
        ],
      },
      {
        title: "Data stored by Deadline Wall",
        body: [
          "Deadline Wall stores deadline records locally using Apple’s SwiftData framework. A record can include its title, due date, category, priority, completion state, notes, and app-specific display settings.",
          "Preferences are stored locally using system preferences. If you choose a custom background, the app keeps a local copy so it can display that background later.",
        ],
      },
      {
        title: "Network and accounts",
        body: [
          "Deadline Wall does not require an account or network connection. The app does not include advertising, analytics, cloud sync, or a service that transmits your deadline data. It does not request screen-recording permission.",
        ],
      },
      {
        title: "Import and export",
        body: [
          "JSON import and export happen only when you choose them. Imported data is copied into the app’s local store. An exported file is saved at a location you select and is then under your control, including any copies or backups you make.",
        ],
      },
      {
        title: "Deleting data",
        body: [
          "You can delete individual deadlines in the app. Exported JSON files remain wherever you saved them until you remove them. Removing the app may not automatically remove every local support file maintained by macOS; the support page will provide current removal guidance for the public release.",
        ],
      },
      {
        title: "This website",
        body: [
          "This website has no account system, contact form, advertising, analytics, cookies set by Stanley’s Toolbox, or third-party fonts and scripts. It is served through GitHub Pages, so GitHub may process routine technical request information under its own terms and privacy notice.",
          "If you choose the GitHub Issues support link, the information you submit is sent to GitHub and is normally public. Remove private deadline data before posting.",
        ],
      },
      {
        title: "Changes",
        body: [
          "If the app or website begins handling information differently, this notice will be updated before or when that change is released, with a new effective date.",
        ],
      },
    ],
    support: "Go to Support",
  },
  "zh-CN": {
    eyebrow: "隐私",
    title: "你的截止日期保留在自己的 Mac 上。",
    intro:
      "本说明介绍 Deadline Wall 应用和 Stanley’s Toolbox 网站如何处理信息。",
    effective: "生效日期：2026 年 8 月 30 日",
    sections: [
      {
        title: "责任主体",
        body: [
          "责任开发者及数据控制者：Stanley，以 Stanley’s Toolbox 名义发布。一般产品问题可以通过支持页面提出。",
        ],
      },
      {
        title: "Deadline Wall 在本地保存的数据",
        body: [
          "Deadline Wall 使用 Apple 的 SwiftData 框架在本地保存截止事项。记录可能包括标题、截止时间、分类、优先级、完成状态、备注和应用内显示设置。",
          "偏好设置通过系统偏好存储在本地。如果你选择自定义背景，应用会保留一份本地副本，以便之后继续显示。",
        ],
      },
      {
        title: "网络与账号",
        body: [
          "Deadline Wall 无需账号或网络连接。应用不包含广告、分析、云同步，也没有传输截止事项数据的服务；同时不会请求屏幕录制权限。",
        ],
      },
      {
        title: "导入与导出",
        body: [
          "只有在你主动选择时，应用才会执行 JSON 导入或导出。导入的数据会复制到应用的本地存储；导出的文件会保存到你选择的位置，之后由你负责保管，包括自行创建的副本或备份。",
        ],
      },
      {
        title: "删除数据",
        body: [
          "你可以在应用内删除单个截止事项。导出的 JSON 文件会一直保留在你保存的位置，直到你手动删除。移除应用时，macOS 不一定会自动删除所有本地支持文件；公开版本发布时，支持页面会提供最新的完整移除说明。",
        ],
      },
      {
        title: "本网站",
        body: [
          "本网站没有账号系统、联系表单、广告、分析、由 Stanley’s Toolbox 设置的 Cookie，也不加载第三方字体或脚本。网站通过 GitHub Pages 提供，因此 GitHub 可能会依照其条款和隐私说明处理常规的技术请求信息。",
          "如果你选择使用 GitHub Issues 支持链接，提交的信息会发送给 GitHub，并且通常公开可见。发布前请移除私人截止事项数据。",
        ],
      },
      {
        title: "变更",
        body: [
          "如果应用或网站将来以不同方式处理信息，本说明会在相关功能发布前或发布时更新，并注明新的生效日期。",
        ],
      },
    ],
    support: "前往支持页面",
  },
} as const;

export function PrivacyPage({ locale }: { locale: Locale }) {
  const text = copy[locale];

  return (
    <SiteFrame locale={locale} page="privacy">
      <main id="main" className="document-main">
        <header className="document-hero">
          <p className="eyebrow">{text.eyebrow}</p>
          <h1>{text.title}</h1>
          <p>{text.intro}</p>
          <span>{text.effective}</span>
        </header>

        <div className="document-layout">
          <aside aria-label={locale === "en" ? "On this page" : "页面目录"}>
            <ol>
              {text.sections.map((section, index) => (
                <li key={section.title}>
                  <a href={`#section-${index + 1}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </aside>
          <div className="document-content">
            {text.sections.map((section, index) => (
              <section key={section.title} id={`section-${index + 1}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
            <a className="button button-primary document-action" href={pagePath(locale, "support")}>
              {text.support}
            </a>
          </div>
        </div>
      </main>
    </SiteFrame>
  );
}
