import { View, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { ICONS } from "../lib/icons";
import FontAwesome from "@expo/vector-icons/FontAwesome5";

const IconGrid = ({ selectedIcon, handleIconSelect }) => {
  return (
    <View style={styles.container}>
      {ICONS.map((icon, idx) => (
        <TouchableOpacity
          key={idx}
          onPress={() => handleIconSelect(icon)}
          style={{
            ...styles.iconInner,
            backgroundColor: selectedIcon === icon ? "dodgerblue" : "#ccc",
          }}
        >
          <FontAwesome
            name={icon}
            size={35}
            color={selectedIcon === icon ? "white" : "black"}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: "auto",
    gap: 15,
    marginVertical: 20,
  },
  iconInner: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderRadius: 10,
    rowGap: 10,
    padding: 8,
    height: (Dimensions.get("window").width - 75) / 3,
    width: (Dimensions.get("window").width - 75) / 3,
  },
});
export default IconGrid;
