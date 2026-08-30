import { DeadlineWallPage } from "../../../components/DeadlineWallPage";
import { pageMetadata } from "../../../lib/site";

export const dynamic = "force-static";

export const metadata = pageMetadata({
  locale: "en",
  page: "deadlineWall",
  title: "Deadline Wall — A countdown wall for macOS",
  description:
    "Keep important due dates at the desktop level with a native, local-first countdown wall for macOS.",
  image: "/deadline-wall-wall.jpg",
});

export default function EnglishDeadlineWall() {
  return <DeadlineWallPage locale="en" />;
}
