import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  winImage: {
    width: width,
    height: height - 200
  },
  container:{
    flex: 1,
    padding: 20,
  }
});

export { styles };
