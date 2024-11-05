"use client";

import ShipmentDetailModal from "@/features/shipments/components/shipment-detail";
import { useMountedState } from "react-use";

export default function ModalProvider() {
  const isMounted = useMountedState();

  if (!isMounted) return null;
  return (
    <>
      <ShipmentDetailModal />
      {/* <NewItemModal />
      <DropOffModal />
      <TransactionDetailModal />
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
