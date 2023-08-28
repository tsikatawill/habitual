import { StyleSheet, Text } from "react-native";

const CustomText = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "ProductSansR",
  },
});

export default CustomText;
