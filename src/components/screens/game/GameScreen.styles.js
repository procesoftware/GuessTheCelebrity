import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 1,
    width: width,
    height: height
  },
  nav: {
    
    marginTop: 1,
    marginLeft: 10,
    marginRight: 20,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1
  },
  image: {
    width: width ,
    height: height * 0.5,
    resizeMode: 'contain',
    flex: 5
  },
  guessBoard: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderTopColor: "#1e90ff",
    borderBottomColor: "#1e90ff",
    backgroundColor: "#1e90ff"
  },

});

const buttons = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
  tile: {
    borderWidth: 0.2,
    backgroundColor: "transparent",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  reset: {
    justifyContent: "center",
    marginTop: 30
  }
});

export { styles, buttons };
