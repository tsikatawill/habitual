import { StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";

const Counter = (props) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <CustomText style={styles.text}>x {props.count}</CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 30,
    width: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 10,
  },

  text: {
    color: "dodgerblue",
    fontFamily: "ProductSansB",
    fontSize: 12,
  },
});

export default Counter;
