import { View, Text, StyleSheet } from "react-native";
import HabitCard from "./HabitCard";
import AddHabit from "./AddHabit";
import { useHabits } from "../store/useStore";
import Container from "./Container";

const HabitsGrid = () => {
  const habits = useHabits((state) => state.habits);

  return (
    <Container style={styles.container}>
      <View style={styles.grid}>
        {habits.length > 0 &&
          habits.map((habit) => <HabitCard key={habit.id} {...habit} />)}

        <AddHabit />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: "auto",
    gap: 15,
  },
});

export default HabitsGrid;
