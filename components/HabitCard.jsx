import { View, TouchableOpacity, Dimensions } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import CustomText from "./CustomText";
import Counter from "./Counter";
import { useState } from "react";

const HabitCard = ({ color, icon, habit, ignoreCount = false }) => {
  const [count, setCount] = useState(0);

  const colors = {
    icon: ignoreCount ? "white" : count > 0 ? "white" : "black",
    card: ignoreCount ? color : count > 0 ? color : "#eee",
    text: ignoreCount ? "white" : count > 0 ? "white" : "black",
  };

  return (
    <TouchableOpacity
      onLongPress={() => {
        setCount((prev) => prev + 1);
      }}
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: (Dimensions.get("window").width - 75) / 3,
        width: (Dimensions.get("window").width - 75) / 3,
        position: "relative",
        borderRadius: 10,
        backgroundColor: colors.card,
        rowGap: 10,
        padding: 8,
      }}
    >
      {count > 0 && (
        <Counter
          count={count}
          onPress={(e) => {
            e.stopPropagation();
            setCount((prev) => prev - 1);
          }}
        />
      )}

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome name={icon} size={30} color={colors.icon} />
      </View>

      <CustomText
        style={{
          color: colors.text,
          fontFamily: "ProductSansR",
          fontSize: 16,
          textAlign: "center",
        }}
      >
        {habit}
      </CustomText>
    </TouchableOpacity>
  );
};

export default HabitCard;
