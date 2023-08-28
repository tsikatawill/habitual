import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useModal } from "../store/useStore";
import NewHabit from "./NewHabit";
import useBottomSheet from "../hooks/useBottomSheet";

const AddHabit = (props) => {
  const updateContent = useModal((state) => state.updateContent);
  const openModal = useModal((state) => state.openModal);
  const { handlePresentModal } = useBottomSheet();

  return (
    <TouchableOpacity
      style={styles.container}
      {...props}
      onPress={() => {
        updateContent(<NewHabit />);
        openModal();
        handlePresentModal();
      }}
    >
      <AntDesign name="plus" size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: (Dimensions.get("window").width - 75) / 3,
    width: (Dimensions.get("window").width - 75) / 3,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 10,
    rowGap: 4,
  },
});

export default AddHabit;
