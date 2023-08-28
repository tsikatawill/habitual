import { Text, StyleSheet } from "react-native";
import Container from "./Container";
import CustomText from "./CustomText";
import dayjs from "dayjs";

const Header = () => {
  const dateFormatted = dayjs().format("MMMM, D");

  return (
    <Container style={styles.container}>
      <CustomText style={styles.commonText}>Today</CustomText>
      <CustomText style={{ ...styles.commonText, ...styles.date }}>
        {dateFormatted}
      </CustomText>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
  },
  commonText: {
    fontSize: 25,
    fontFamily: "ProductSansB",
  },
  date: {
    fontFamily: "ProductSansB",
    color: "#ccc",
  },
});

export default Header;
