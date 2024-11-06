"use client";

import AddressDetailModal from "@/features/address/components/address-detail-modal";
import EditAddressModal from "@/features/address/components/edit-address-modal";
import NewAddressModal from "@/features/address/components/new-address-modal";
import EditPackageModal from "@/features/settings/components/edit-package-modal";
import NewPackageModal from "@/features/settings/components/new-package-modal";
import UpdatePasswordModal from "@/features/settings/components/update-password-modal";
import UpdateProfileModal from "@/features/settings/components/update-profile-modal";
import ShipmentDetailModal from "@/features/shipments/components/shipment-detail";
import TransactionDetailModal from "@/features/transactions/components/transaction-detail-modal";
import { useMountedState } from "react-use";
import AlertPopUp from "../alert-pop-up";

export default function ModalProvider() {
  const isMounted = useMountedState();

  if (!isMounted) return null;
  return (
    <>
      <ShipmentDetailModal />
      <TransactionDetailModal />
      <NewAddressModal />
      <AddressDetailModal />
      <EditAddressModal />
      <NewPackageModal />
      <EditPackageModal />
      <AlertPopUp />
      <UpdateProfileModal />
      <UpdatePasswordModal />
      {/* <NewItemModal />
      <DropOffModal />
      
      
   
      
      <EditItemModal />
      <TopUpModal />
     
       */}
    </>
  );
}
