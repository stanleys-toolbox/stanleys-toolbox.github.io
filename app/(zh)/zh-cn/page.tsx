import { HomePage } from "../../components/HomePage";
import { pageMetadata } from "../../lib/site";

export const dynamic = "force-static";

export const metadata = pageMetadata({
  locale: "zh-CN",
  page: "home",
  title: "Stanley’s Toolbox — 小工具，认真做",
  description: "一个不断生长的 macOS 工具箱，每个工具只认真解决一个明确的日常问题。",
  image: "/stanleys-toolbox-og.png",
});

export default function ChineseHome() {
  return <HomePage locale="zh-CN" />;
}
