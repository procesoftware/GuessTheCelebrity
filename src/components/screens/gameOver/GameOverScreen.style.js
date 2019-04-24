import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  winImage: {
    width: width,
    height: height - 200
  }
});

export { styles };
