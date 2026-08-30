import { PrivacyPage } from "../../components/PrivacyPage";
import { pageMetadata } from "../../lib/site";

export const dynamic = "force-static";

export const metadata = pageMetadata({
  locale: "en",
  page: "privacy",
  title: "Privacy — Stanley’s Toolbox",
  description: "How Deadline Wall and the Stanley’s Toolbox website handle information.",
});

export default function EnglishPrivacy() {
  return <PrivacyPage locale="en" />;
}
