import { Button, ScrollView, StyleSheet, Text } from "react-native";
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

  const { bottomSheetRef } = useBottomSheet();

  useEffect(() => {
    const handleModalInitials = () => {
      updateContent(<Text>Initial Modal Content</Text>);
    };

    handleModalInitials();
  }, []);

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

      <CustomBottomSheet ref={bottomSheetRef} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
