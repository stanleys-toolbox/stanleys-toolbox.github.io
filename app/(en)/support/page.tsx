import { SupportPage } from "../../components/SupportPage";
import { pageMetadata } from "../../lib/site";

export const dynamic = "force-static";

export const metadata = pageMetadata({
  locale: "en",
  page: "support",
  title: "Support — Stanley’s Toolbox",
  description: "Setup notes and answers for the Deadline Wall preview on macOS.",
});

export default function EnglishSupport() {
  return <SupportPage locale="en" />;
}
