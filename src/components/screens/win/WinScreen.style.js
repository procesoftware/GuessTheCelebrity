import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  winImage: {
    width: width,
    height: height - 200
  },
  winText:{
    alignContent: "center",
    justifyContent: "center",
    position: "absolute",
    width: width,
    zIndex: 9999,
    top: 50,
    fontSize: 20,
    fontWeight: "bold",
    color: "red"
  },
  playButton:{
    alignContent: "center",
    justifyContent: "center",
    width: width / 2,
    height: 100,
  }
});

export { styles };
