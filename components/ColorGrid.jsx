import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { COLORS } from "../lib/colors";

const ColorGrid = ({ handleColorSelect, selectedColor }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
      }}
    >
      {COLORS.map((item) => (
        <TouchableOpacity
          key={item}
          onPress={() => handleColorSelect(item)}
          style={{
            backgroundColor: item,
            width: 40,
            height: 40,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {item === selectedColor && (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              ●{/* &#x2713; */}
            </Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ColorGrid;
