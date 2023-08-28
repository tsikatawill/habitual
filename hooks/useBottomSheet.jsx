import { useCallback, useEffect, useRef, useState } from "react";
import { useModal } from "../store/useStore";

const useBottomSheet = () => {
  const bottomSheetRef = useRef(null);
  const isOpen = useModal((state) => state.isOpen);

  const [showModal, setShowModal] = useState(false);

  const handleDismiss = () => {
    setShowModal(false);
  };

  const handlePresentModal = useCallback(() => {
    bottomSheetRef.current?.present();
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      bottomSheetRef.current?.present();
    }
  }, [isOpen]);

  return {
    bottomSheetRef,
    showModal,
    setShowModal,
    handleDismiss,
    handlePresentModal,
  };
};

export default useBottomSheet;
