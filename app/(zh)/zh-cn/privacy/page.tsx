import { PrivacyPage } from "../../../components/PrivacyPage";
import { pageMetadata } from "../../../lib/site";

export const dynamic = "force-static";

export const metadata = pageMetadata({
  locale: "zh-CN",
  page: "privacy",
  title: "隐私 — Stanley’s Toolbox",
  description: "Deadline Wall 应用和 Stanley’s Toolbox 网站处理信息的方式。",
});

export default function ChinesePrivacy() {
  return <PrivacyPage locale="zh-CN" />;
}
