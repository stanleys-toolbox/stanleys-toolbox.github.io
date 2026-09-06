/* eslint-disable @next/next/no-img-element -- static export uses a pre-sized local app icon */
import { deadlineWallRelease as release } from "../lib/deadline-wall-release";
import { pagePath, type Locale } from "../lib/site";
import { SiteFrame } from "./SiteChrome";

const copy = {
  en: {
    back: "Deadline Wall overview",
    kicker: "Public preview · Version 1.0.0",
    title: "Download Deadline Wall for Mac.",
    intro:
      "A native desktop countdown wall for macOS. This public preview runs locally and supports both Apple silicon and Intel Macs.",
    badge: "Unsigned preview",
    cardWarning:
      "Unsigned and not notarized. First launch requires manual approval in Privacy & Security.",
    download: "Download DMG",
    github: "View release on GitHub",
    version: "Version",
    published: "Published",
    date: "September 6, 2026",
    size: "Download size",
    system: "System",
    architecture: "Architecture",
    noteTitle: "Before you open it",
    noteBody:
      "This build is not signed or notarized through the Apple Developer Program. macOS cannot verify the developer and will require you to approve the app manually on first launch.",
    noteDetail:
      "Only continue if you downloaded the file from this page or the linked GitHub release and its SHA-256 matches the value below.",
    installKicker: "Installation",
    installTitle: "From download to your menu bar.",
    installSteps: [
      {
        title: "Download and open the DMG",
        body: "Use the button above, then open DeadlineWall-1.0.0-macOS.dmg from Downloads.",
      },
      {
        title: "Move the app to Applications",
        body: "Drag Deadline Wall onto the Applications folder inside the disk image.",
      },
      {
        title: "Try to open Deadline Wall",
        body: "Open it from Applications. macOS will block this unsigned preview the first time; this initial attempt makes the override available.",
      },
      {
        title: "Approve the first launch",
        body: "Open System Settings → Privacy & Security, scroll to Security, choose Open Anyway, then confirm. Deadline Wall will appear in the menu bar and normally has no Dock icon.",
      },
    ],
    releaseKicker: "Version 1.0.0",
    releaseTitle: "What’s in this preview.",
    releaseItems: [
      "Quick Add from the macOS menu bar",
      "Desktop countdown wall with automatic urgency and sorting",
      "Wall, Edit, Hidden, and Focus modes",
      "Main-display or all-display placement",
      "Local custom backgrounds and appearance controls",
      "Versioned JSON import and export",
    ],
    verifyKicker: "Verification",
    verifyTitle: "Confirm the download before opening it.",
    verifyBody:
      "In Terminal, run the command below. The result should exactly match the published SHA-256. This confirms that the downloaded bytes match this release; it is not a substitute for Apple signing or notarization.",
    expected: "Expected SHA-256",
    privacy:
      "Deadline Wall stores deadlines and preferences locally. It requires no account or network connection.",
    privacyLink: "Privacy details",
    supportLink: "Get support",
  },
  "zh-CN": {
    back: "返回 Deadline Wall 介绍",
    kicker: "公开预览版 · 版本 1.0.0",
    title: "下载 Deadline Wall Mac 版。",
    intro:
      "一款原生 macOS 桌面倒计时墙。这个公开预览版本在本地运行，同时支持 Apple Silicon 和 Intel Mac。",
    badge: "未签名预览版",
    cardWarning: "未签名、未公证。首次启动需要在“隐私与安全性”中手动允许。",
    download: "下载 DMG",
    github: "在 GitHub 查看 Release",
    version: "版本",
    published: "发布日期",
    date: "2026 年 9 月 6 日",
    size: "下载大小",
    system: "系统要求",
    architecture: "处理器",
    noteTitle: "打开之前请注意",
    noteBody:
      "这个版本没有通过 Apple Developer Program 签名或公证，因此 macOS 无法验证开发者，首次启动时需要你手动允许它运行。",
    noteDetail:
      "请只从本页面或这里链接的 GitHub Release 下载，并确认文件的 SHA-256 与下方数值一致。",
    installKicker: "安装方式",
    installTitle: "从下载到出现在菜单栏。",
    installSteps: [
      {
        title: "下载并打开 DMG",
        body: "点击上方按钮，然后在“下载”文件夹中打开 DeadlineWall-1.0.0-macOS.dmg。",
      },
      {
        title: "移动到应用程序",
        body: "在磁盘映像中，将 Deadline Wall 拖到“应用程序”文件夹。",
      },
      {
        title: "尝试启动一次",
        body: "从“应用程序”打开 Deadline Wall。macOS 首次会阻止这个未签名预览版；尝试启动后，系统才会显示手动允许选项。",
      },
      {
        title: "允许首次启动",
        body: "打开“系统设置”→“隐私与安全性”，滚动到“安全性”，点击“仍要打开”并确认。Deadline Wall 会出现在菜单栏中，通常不会显示 Dock 图标。",
      },
    ],
    releaseKicker: "版本 1.0.0",
    releaseTitle: "这个预览版包含什么。",
    releaseItems: [
      "从 macOS 菜单栏快速添加截止事项",
      "自动更新紧急程度并排序的桌面倒计时墙",
      "Wall、Edit、Hidden 和 Focus 模式",
      "选择主显示器或全部显示器",
      "本地自定义背景与外观控制",
      "带版本的 JSON 导入与导出",
    ],
    verifyKicker: "文件验证",
    verifyTitle: "打开前确认下载文件。",
    verifyBody:
      "在终端中运行下方命令，结果应与公布的 SHA-256 完全一致。这只能确认下载内容与本次 Release 相同，不能代替 Apple 签名或公证。",
    expected: "正确的 SHA-256",
    privacy:
      "Deadline Wall 将截止事项和偏好设置保存在本地，无需账号或网络连接。",
    privacyLink: "隐私详情",
    supportLink: "获取支持",
  },
} as const;

export function DeadlineWallDownloadPage({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const verifyCommand = `shasum -a 256 ~/Downloads/${release.fileName}`;

  return (
    <SiteFrame locale={locale} page="deadlineWallDownload">
      <main className="download-main" id="main">
        <section className="download-hero" aria-labelledby="download-title">
          <div className="download-hero-copy">
            <a className="download-back" href={pagePath(locale, "deadlineWall")}>
              <span aria-hidden="true">←</span> {text.back}
            </a>
            <p className="section-kicker">{text.kicker}</p>
            <h1 id="download-title">{text.title}</h1>
            <p>{text.intro}</p>
          </div>

          <aside className="download-card" aria-label={locale === "en" ? "Download details" : "下载信息"}>
            <div className="download-card-heading">
              <img src="/deadline-wall-icon.png" width="68" height="68" alt="" />
              <div>
                <strong>Deadline Wall</strong>
                <span>{text.badge}</span>
              </div>
            </div>
            <dl className="download-meta">
              <div>
                <dt>{text.version}</dt>
                <dd>{release.version} ({release.build})</dd>
              </div>
              <div>
                <dt>{text.published}</dt>
                <dd>{text.date}</dd>
              </div>
              <div>
                <dt>{text.size}</dt>
                <dd>{release.fileSize}</dd>
              </div>
              <div>
                <dt>{text.system}</dt>
                <dd>{release.minimumOS}</dd>
              </div>
              <div>
                <dt>{text.architecture}</dt>
                <dd>{release.architectures}</dd>
              </div>
            </dl>
            <p className="download-card-warning">{text.cardWarning}</p>
            <a className="button button-primary download-button" href={release.downloadUrl}>
              {text.download} · {release.fileSize}
            </a>
            <a className="download-github-link" href={release.releaseUrl}>
              {text.github} <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </section>

        <section className="download-notice" aria-labelledby="security-note-title">
          <span aria-hidden="true">!</span>
          <div>
            <h2 id="security-note-title">{text.noteTitle}</h2>
            <p>{text.noteBody}</p>
            <p>{text.noteDetail}</p>
          </div>
        </section>

        <section className="download-section" aria-labelledby="install-heading">
          <div className="download-section-heading">
            <p className="section-kicker">{text.installKicker}</p>
            <h2 id="install-heading">{text.installTitle}</h2>
          </div>
          <ol className="install-steps">
            {text.installSteps.map((step, index) => (
              <li key={step.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="download-section" aria-labelledby="release-notes-heading">
          <div className="download-section-heading">
            <p className="section-kicker">{text.releaseKicker}</p>
            <h2 id="release-notes-heading">{text.releaseTitle}</h2>
          </div>
          <ul className="release-notes-list">
            {text.releaseItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="download-section verification-section" aria-labelledby="verification-heading">
          <div className="download-section-heading">
            <p className="section-kicker">{text.verifyKicker}</p>
            <h2 id="verification-heading">{text.verifyTitle}</h2>
            <p>{text.verifyBody}</p>
          </div>
          <div className="verification-card">
            <span>{release.fileName}</span>
            <code>{verifyCommand}</code>
            <span>{text.expected}</span>
            <code>{release.sha256}</code>
          </div>
        </section>

        <section className="download-closing" aria-label={locale === "en" ? "Privacy and support" : "隐私和支持"}>
          <p>{text.privacy}</p>
          <div>
            <a className="text-link" href={pagePath(locale, "privacy")}>
              {text.privacyLink} ↗
            </a>
            <a className="text-link" href={pagePath(locale, "support")}>
              {text.supportLink} ↗
            </a>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
