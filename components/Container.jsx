import { View, StyleSheet } from "react-native";

const Container = (props) => {
  return (
    <View {...props} style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default Container;
