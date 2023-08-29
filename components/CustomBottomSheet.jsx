import "react-native-gesture-handler";

import { StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { forwardRef, useEffect } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Container from "./Container";
import { useModal } from "../store/useStore";

const CustomBottomSheet = forwardRef((_props, ref) => {
  const content = useModal((state) => state.content);
  const isOpen = useModal((state) => state.isOpen);
  const resetContent = useModal((state) => state.resetContent);
  const handleDismiss = useModal((state) => state.handleDismiss);

  const snapPoints = ["48%", "90%"];

  return (
    <GestureHandlerRootView
      style={{
        ...styles.container,
        height: isOpen ? "100%" : "0%",
        width: isOpen ? "100%" : "0%",
      }}
    >
      <BottomSheetModalProvider>
        <SafeAreaView style={styles.inner}>
          <BottomSheetModal
            ref={ref}
            snapPoints={snapPoints}
            onDismiss={() => {
              resetContent();
              handleDismiss();
            }}
            index={1}
            backgroundStyle={styles.modal}
          >
            <Container>{content}</Container>
          </BottomSheetModal>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
});

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
  container: {
    flex: 1,
    zIndex: 100,
    position: "absolute",
  },
  modal: {
    backgroundColor: "white",
  },
});

export default CustomBottomSheet;
