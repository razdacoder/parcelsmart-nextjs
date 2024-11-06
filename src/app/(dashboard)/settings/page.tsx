import AppNavBar from "@/components/app-navbar";
import SettingsTab from "@/features/settings/components/settings-page";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      <AppNavBar title="Settings" />
      <div className="px-4 md:px-8 space-y-6">
        <div className="bg-white rounded-lg py-4 lg:py-12 px-4 md:px-8">
          <div className="flex justify-between">
            <SettingsTab />
          </div>
        </div>
      </div>
    </div>
  );
}
