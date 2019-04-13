import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        width: 100 + "%",
        height: 100 + "%"
      },
      nav: {
        width: 100 + "%",
        height: 5 + "%",
        marginTop: 10 ,
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor: "rgb(233,233,233)",
        justifyContent: "center",
        alignItems: "center"
      }
});


const buttons = StyleSheet.create({ 
    tile: {
        borderWidth: 0.2,
        backgroundColor: "transparent",
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center"
      }
});

export { styles, buttons }