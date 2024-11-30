import ExpressLogisticsHero from "./_components/express-hero";
import ExpressFeatures from "./_components/express-features";
import CompareRate from "@/components/ui/sections/home/CompareRate";
import DownloadMobileApp from "@/components/ui/sections/DownloadMobileApp";

export const metadata = {
  title: { default: "Express Logistics" },
};

export default function ExpressLogisticsPage() {
  return (
    <>
      <ExpressLogisticsHero />
      <ExpressFeatures />
      <CompareRate text="Compare Rates from Multiple Courier Companies" />
      <DownloadMobileApp />
    </>
  );
}
