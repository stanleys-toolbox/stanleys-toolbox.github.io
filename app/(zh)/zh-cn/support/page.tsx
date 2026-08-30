import { SupportPage } from "../../../components/SupportPage";
import { pageMetadata } from "../../../lib/site";

export const dynamic = "force-static";

export const metadata = pageMetadata({
  locale: "zh-CN",
  page: "support",
  title: "支持 — Stanley’s Toolbox",
  description: "Deadline Wall macOS 预览版的设置说明和常见问题。",
});

export default function ChineseSupport() {
  return <SupportPage locale="zh-CN" />;
}
