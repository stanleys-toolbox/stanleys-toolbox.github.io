import { DeadlineWallDownloadPage } from "../../../../components/DeadlineWallDownloadPage";
import { pageMetadata } from "../../../../lib/site";

export const dynamic = "force-static";

export const metadata = pageMetadata({
  locale: "en",
  page: "deadlineWallDownload",
  title: "Download Deadline Wall 1.0.0 for macOS",
  description:
    "Download the Deadline Wall 1.0.0 public preview for Apple silicon and Intel Macs, with installation and verification instructions.",
  image: "/deadline-wall-wall.jpg",
});

export default function EnglishDeadlineWallDownload() {
  return <DeadlineWallDownloadPage locale="en" />;
}
