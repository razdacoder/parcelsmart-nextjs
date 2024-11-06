import AppNavBar from "@/components/app-navbar";
import TransactionClientPage from "@/features/transactions/components/transaction-page";

export default function TransactionPage() {
  return (
    <div className="flex flex-col gap-6 w-full overflow-hidden">
      <AppNavBar title="Transactions" />
      <TransactionClientPage />
    </div>
  );
}
