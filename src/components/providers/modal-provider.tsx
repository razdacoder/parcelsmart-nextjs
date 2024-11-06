"use client";

import AddressDetailModal from "@/features/address/components/address-detail-modal";
import EditAddressModal from "@/features/address/components/edit-address-modal";
import NewAddressModal from "@/features/address/components/new-address-modal";
import ShipmentDetailModal from "@/features/shipments/components/shipment-detail";
import TransactionDetailModal from "@/features/transactions/components/transaction-detail-modal";
import { useMountedState } from "react-use";

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
      {/* <NewItemModal />
      <DropOffModal />
      
      
      <UpdateProfileModal />
      <UpdatePasswordModal />
      
      <EditItemModal />
      <TopUpModal />
      <AlertPopUp />
      <NewPackageModal />
      <EditPackageModal /> */}
    </>
  );
}
