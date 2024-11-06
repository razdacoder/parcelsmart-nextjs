"use client";

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
      {/* <NewItemModal />
      <DropOffModal />
      
      <NewAddressModal />
      <AddressDetailModal />
      <UpdateProfileModal />
      <UpdatePasswordModal />
      <EditAddressModal />
      <EditItemModal />
      <TopUpModal />
      <AlertPopUp />
      <NewPackageModal />
      <EditPackageModal /> */}
    </>
  );
}
