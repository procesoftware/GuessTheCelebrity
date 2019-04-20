import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  topRow: {
    height: height * 0.6,
    width: width
  },
  buttonRow: {
    justifyContent: "center",
    alignItems: "center"
  },
  playButton: {
    width: width * 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export { styles };
