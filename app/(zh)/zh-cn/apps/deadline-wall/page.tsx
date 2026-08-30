import { DeadlineWallPage } from "../../../../components/DeadlineWallPage";
import { pageMetadata } from "../../../../lib/site";

export const dynamic = "force-static";

export const metadata = pageMetadata({
  locale: "zh-CN",
  page: "deadlineWall",
  title: "Deadline Wall — macOS 桌面倒计时墙",
  description: "一款原生、本地优先的 macOS 桌面倒计时墙，让重要日期持续在视野中。",
  image: "/deadline-wall-wall.jpg",
});

export default function ChineseDeadlineWall() {
  return <DeadlineWallPage locale="zh-CN" />;
}
