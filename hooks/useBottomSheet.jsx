import { useCallback, useEffect, useRef } from "react";
import { useModal } from "../store/useStore";

const useBottomSheet = () => {
  const bottomSheetRef = useRef(null);
  const isOpen = useModal((state) => state.isOpen);
  const openModal = useModal((state) => state.openModal);

  const handlePresentModal = useCallback(() => {
    openModal();
    bottomSheetRef.current?.present();
  }, [isOpen, bottomSheetRef]);

  useEffect(() => {
    if (isOpen) handlePresentModal();
  }, [isOpen]);

  return {
    bottomSheetRef,
    handlePresentModal,
  };
};

export default useBottomSheet;
