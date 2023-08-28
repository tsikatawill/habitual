import "react-native-get-random-values";

import { useState } from "react";
import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import HabitCard from "./HabitCard";
import { v4 as uuidv4 } from "uuid";
import { useHabits, useModal } from "../store/useStore";
import ColorGrid from "./ColorGrid";
import IconGrid from "./IconGrid";
import CustomText from "./CustomText";

const NewHabit = () => {
  const defaultHabit = useHabits((state) => state.defaultHabit);

  const [habit, setHabit] = useState({
    color: defaultHabit.color,
    habit: defaultHabit.habit,
    icon: defaultHabit.icon,
  });

  const addHabit = useHabits((state) => state.addHabit);
  const resetContent = useModal((state) => state.resetContent);
  const handleDismiss = useModal((state) => state.handleDismiss);

  const handleSave = () => {
    const newHabit = {
      id: uuidv4(),
      ...habit,
    };

    addHabit(newHabit);
    resetContent();
    handleDismiss();
  };

  return (
    <View>
      <View style={styles.habitCardWrapper}>
        <HabitCard {...habit} ignoreCount />
      </View>

      <TextInput
        placeholder={habit.habit}
        value={habit.habit}
        onChangeText={(text) => setHabit({ ...habit, habit: text })}
        style={styles.textInput}
      />

      <ColorGrid
        handleColorSelect={(color) => setHabit({ ...habit, color })}
        selectedColor={habit.color}
      />

      <IconGrid
        handleIconSelect={(icon) => setHabit({ ...habit, icon })}
        selectedIcon={habit.icon}
      />

      <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
        <CustomText style={styles.btnText}>Save</CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  habitCardWrapper: {
    marginVertical: 50,
    alignItems: "center",
  },

  textInput: {
    borderRadius: 4,
    padding: 10,
    marginVertical: 20,
    borderColor: "#ccc",
    borderWidth: 1,
  },

  saveBtn: {
    backgroundColor: "dodgerblue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },

  btnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default NewHabit;
