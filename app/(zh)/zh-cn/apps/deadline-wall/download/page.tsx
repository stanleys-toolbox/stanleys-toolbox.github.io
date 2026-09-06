import { DeadlineWallDownloadPage } from "../../../../../components/DeadlineWallDownloadPage";
import { pageMetadata } from "../../../../../lib/site";

export const dynamic = "force-static";

export const metadata = pageMetadata({
  locale: "zh-CN",
  page: "deadlineWallDownload",
  title: "下载 Deadline Wall 1.0.0 Mac 版",
  description:
    "下载适用于 Apple Silicon 和 Intel Mac 的 Deadline Wall 1.0.0 公开预览版，并查看安装与文件验证方式。",
  image: "/deadline-wall-wall.jpg",
});

export default function ChineseDeadlineWallDownload() {
  return <DeadlineWallDownloadPage locale="zh-CN" />;
}
