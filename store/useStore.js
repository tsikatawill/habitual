import { Text } from "react-native";
import { create } from "zustand";
import { HABITS } from "../lib/habits";

const initialModalState = {
  content: null,
  isOpen: false,
  ref: null,
};

export const useModal = create((set) => ({
  ...initialModalState,
  openModal: () => set(() => ({ isOpen: true })),
  handleDismiss: () => set(() => ({ isOpen: false })),
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
  updateContent: (newContent) => set(() => ({ content: newContent })),
  resetContent: () => set(() => ({ content: <Text>Modal Content</Text> })),
  updateRef: (ref) => set(() => ({ ref })),
}));

const initialHabitState = {
  id: "asd125",
  icon: "dumbbell",
  habit: "Hit the gym",
  color: "blue",
};

export const useHabits = create((set) => ({
  defaultHabit: initialHabitState,
  habits: HABITS,
  addHabit: (habit) => set((state) => ({ habits: [habit, ...state.habits] })),
  deleteHabit: (id) =>
    set((state) => ({
      habits: state.habits.filter((habit) => habit.id !== id),
    })),
  updateHabit: (habit) =>
    set((state) => {
      const habitOfInterest = state.habits.find((item) => habit.id === item.id);
      if (!habitOfInterest) return { habits: state.habits };
      return {
        habits: [
          habitOfInterest,
          ...state.habits.filter((item) => item.id !== habitOfInterest.id),
        ],
      };
    }),
}));
