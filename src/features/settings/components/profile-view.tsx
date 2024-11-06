import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import useMe from "@/features/auth/api/useMe";
import { getInitials } from "@/lib/utils";
import { ArrowRight, Edit, MapPin, Trash2 } from "lucide-react";
import { useUpdatePasswordModal } from "../hooks/use-update-password-modal";
import { useUpdateProfileModal } from "../hooks/use-update-profile-modal";

export default function ProfileView() {
  const { onOpen } = useUpdateProfileModal();
  const { onOpen: openPasswordModal } = useUpdatePasswordModal();
  const { data, isLoading } = useMe();
  return (
    <div className="space-y-2">
      <div className="flex flex-col md:flex-row gap-2 justify-between border-2 rounded-xl p-3">
        <div className="flex items-center gap-4">
          {isLoading && (
            <>
              <Skeleton className="w-full h-16" />
            </>
          )}
          {data && (
            <>
              <Avatar className="size-16">
                <AvatarImage
                  src={data?.data.profile_picture as string | undefined}
                />
                <AvatarFallback className="bg-primary font-semibold text-white text-lg">
                  {getInitials(data?.data.first_name, data?.data.last_name)}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1.5">
                <h4 className="font-bold">
                  {data?.data.first_name} {data?.data.last_name}
                </h4>
                <p className="text-xs">{data?.data.email}</p>
              </div>
            </>
          )}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <Button
            onClick={onOpen}
            variant="outline"
            size="sm"
            className="gap-2 items-center h-8 text-sm text-primary border-primary w-full hover:text-primary/80"
          >
            <Edit className="size-4" /> Edit Profile
          </Button>
          <Button
            onClick={openPasswordModal}
            variant="outline"
            size="sm"
            className="gap-2 items-center h-8 text-sm text-primary border-primary w-full hover:text-primary/80"
          >
            <Edit className="size-4" /> Change Password
          </Button>
          <Button
            // onClick={openPasswordModal}
            variant="outline"
            size="sm"
            className="gap-2 items-center h-8 text-sm text-destructive border-destructive w-full hover:text-destructive/80"
          >
            <Trash2 className="size-4" /> Delete Account
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-between items-center border-2 rounded-xl p-3">
        <div className="flex items-center gap-4">
          <MapPin className="size-12 lg:size-16 text-primary" />
          <div className="flex flex-col gap-1.5">
            <h4 className="font-bold">Default Address</h4>
            <p className="text-xs">Click to add a default pickup address</p>
          </div>
        </div>
        <Button className="w-full md:w-fit gap-2 items-center text-sm">
          Set Default Address <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
