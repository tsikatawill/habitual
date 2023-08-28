import { ScrollView, StyleSheet, Text } from "react-native";
import CustomBottomSheet from "./components/CustomBottomSheet";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Header from "./components/Header";
import FontsProvider from "./components/FontsProvider";
import HabitsGrid from "./components/HabitsGrid";
import { useModal } from "./store/useStore";
import useBottomSheet from "./hooks/useBottomSheet";

export default function App() {
  const updateContent = useModal((state) => state.updateContent);
  const isOpen = useModal((state) => state.isOpen);
  const handleDismiss = useModal((state) => state.handleDismiss);
  const updateRef = useModal((state) => state.updateRef);

  const { bottomSheetRef } = useBottomSheet();

  useEffect(() => {
    const handleModalInitials = () => {
      updateRef(bottomSheetRef);
      updateContent(<Text>Initial Modal Content</Text>);
    };

    handleModalInitials();
  }, [bottomSheetRef]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FontsProvider>
          <ScrollView>
            <StatusBar style="auto" />
            <Header />

            <HabitsGrid />
          </ScrollView>
        </FontsProvider>
      </SafeAreaView>

      <CustomBottomSheet
        ref={bottomSheetRef}
        handleDismiss={handleDismiss}
        showModal={isOpen}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
