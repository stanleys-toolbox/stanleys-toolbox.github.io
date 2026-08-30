import { HomePage } from "../components/HomePage";
import { pageMetadata } from "../lib/site";

export const dynamic = "force-static";

export const metadata = pageMetadata({
  locale: "en",
  page: "home",
  title: "Stanley’s Toolbox — Small tools, made with care",
  description:
    "A growing collection of focused macOS tools, each made to solve one clear everyday problem.",
  image: "/stanleys-toolbox-og.png",
});

export default function EnglishHome() {
  return <HomePage locale="en" />;
}
