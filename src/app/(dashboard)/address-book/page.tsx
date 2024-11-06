import AppNavBar from "@/components/app-navbar";
import AddressList from "@/features/address/components/address-list";

export default function AddressBookPage() {
  return (
    <div className="flex flex-col gap-6 w-full overflow-hidden">
      <AppNavBar title="Address Book" />
      <div className="px-4 md:px-8 space-y-6">
        <div className="space-y-2 py-4">
          <h3 className="text-2xl font-semibold text-text">All Addresses</h3>

          <AddressList />
        </div>
      </div>
    </div>
  );
}
