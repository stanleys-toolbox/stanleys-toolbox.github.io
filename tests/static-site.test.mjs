import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const outputRoot = path.resolve("dist/client");
const routes = [
  ["index.html", "en"],
  ["zh-cn/index.html", "zh-CN"],
  ["apps/deadline-wall/index.html", "en"],
  ["zh-cn/apps/deadline-wall/index.html", "zh-CN"],
  ["privacy/index.html", "en"],
  ["zh-cn/privacy/index.html", "zh-CN"],
  ["support/index.html", "en"],
  ["zh-cn/support/index.html", "zh-CN"],
];

async function html(relativePath) {
  return readFile(path.join(outputRoot, relativePath), "utf8");
}

test("exports every bilingual route with the correct document language", async () => {
  for (const [relativePath, language] of routes) {
    const content = await html(relativePath);
    assert.match(content, new RegExp(`<html lang=["']${language}["']`));
    assert.match(content, /<main\b[^>]*id=["']main["']/);
    assert.match(content, /<footer\b/);
    assert.equal(content.match(/<h1\b/g)?.length, 1);
    assert.match(content, /rel=["']canonical["']/);
    assert.match(content, /hreflang=["']en["']/i);
    assert.match(content, /hreflang=["']zh-CN["']/i);
  }
});

test("resolves every root-relative page and media link in the static artifact", async () => {
  for (const [route] of routes) {
    const content = await html(route);
    const references = [...content.matchAll(/(?:href|src)=["']([^"']+)["']/g)].map(
      (match) => match[1],
    );

    for (const reference of references) {
      if (!reference.startsWith("/")) continue;

      const pathname = reference.split(/[?#]/, 1)[0];
      const relativeTarget = pathname.endsWith("/")
        ? `${pathname.slice(1)}index.html`
        : pathname.slice(1);

      await assert.doesNotReject(
        access(path.join(outputRoot, relativeTarget)),
        `${route} references missing ${reference}`,
      );
    }
  }
});

test("keeps the English and Chinese product claims aligned", async () => {
  const english = await html("apps/deadline-wall/index.html");
  const chinese = await html("zh-cn/apps/deadline-wall/index.html");

  for (const claim of [
    "macOS 14+",
    "Quick Add",
    "Automatic urgency",
    "Focus Mode",
    "No account",
    "currently in preview",
  ]) {
    assert.match(english, new RegExp(claim, "i"));
  }

  for (const claim of [
    "macOS 14+",
    "快速添加",
    "自动更新紧急程度",
    "专注模式",
    "无需账号",
    "目前仍是预览版",
  ]) {
    assert.match(chinese, new RegExp(claim));
  }

  assert.match(english, /deadline-wall-wall\.jpg/);
  assert.match(english, /Transparent background or a local custom image/);
  assert.match(chinese, /透明背景或本地自定义图片/);
  assert.doesNotMatch(english, /Solid colors/i);
  assert.doesNotMatch(chinese, /纯色/);
});

test("keeps the homepage focused on the toolbox and product details on the app page", async () => {
  const homepage = await html("index.html");
  const product = await html("apps/deadline-wall/index.html");
  const chineseHomepage = await html("zh-cn/index.html");

  assert.match(homepage, /id=["']tools["']/i);
  assert.match(homepage, /href=["']\/apps\/deadline-wall\/["']/i);
  assert.match(chineseHomepage, /href=["']\/zh-cn\/apps\/deadline-wall\/["']/i);
  assert.doesNotMatch(homepage, /<video\b/i);
  assert.doesNotMatch(chineseHomepage, /<video\b/i);
  assert.doesNotMatch(homepage, /automatic urgency|focus mode|quick add/i);
  assert.doesNotMatch(chineseHomepage, /自动更新紧急程度|专注模式|快速添加/i);

  assert.match(product, /class=["']product-hero-visual["']/i);
  assert.match(product, /src=["']\/deadline-wall-wall\.jpg["']/i);
  assert.match(product, /<video\b(?=[^>]*\bcontrols\b)(?![^>]*\bautoplay\b)/i);
  assert.match(product, /Sound effects only · No narration/);

  for (const staleAnchor of ["#film", "#principles", "#apps"]) {
    assert.doesNotMatch(homepage, new RegExp(`href=["']${staleAnchor}["']`, "i"));
  }

  for (const asset of [
    "deadline-wall-film.mp4",
    "deadline-wall-poster.jpg",
    "deadline-wall-wall.jpg",
    "deadline-wall-icon.png",
    "quick-add-enabled.png",
    "stanleys-toolbox-og.png",
    "deadline-wall-captions-en.vtt",
    "deadline-wall-captions-zh.vtt",
    "favicon.svg",
    "robots.txt",
    "sitemap.xml",
  ]) {
    await access(path.join(outputRoot, asset));
  }

  const film = await stat(path.join(outputRoot, "deadline-wall-film.mp4"));
  assert.ok(film.size > 1_000_000);

  const [englishCaptions, chineseCaptions] = await Promise.all([
    readFile(path.join(outputRoot, "deadline-wall-captions-en.vtt"), "utf8"),
    readFile(path.join(outputRoot, "deadline-wall-captions-zh.vtt"), "utf8"),
  ]);
  assert.match(englishCaptions, /Countdown tick; transition sound/);
  assert.match(chineseCaptions, /倒计时提示音；换页音效/);
});

test("does not embed local paths or raw screenshot references", async () => {
  const allHtml = (await Promise.all(routes.map(([route]) => html(route)))).join("\n");
  assert.doesNotMatch(allHtml, /\/Users\//);
  assert.doesNotMatch(allHtml, /Screenshot 20\d{2}/i);
  assert.match(allHtml, /quick-add-enabled\.png/);
});
