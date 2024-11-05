import AppNavBar from "@/components/app-navbar";
import QuotePage from "@/features/quote/components/quote-page";

export default function GetQuote() {
  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      <AppNavBar title="Get Quote" />

      <div className="px-4 md:px-8 space-y-6">
        <QuotePage />
      </div>
    </div>
  );
}
