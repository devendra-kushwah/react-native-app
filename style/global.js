import { StyleSheet } from "react-native";

const global = StyleSheet.create({
    title: {
      textAlign: 'center',
      fontSize: 20,
      marginBottom: 50
    },
    container: {
      padding: 15,
      width: '100%',
      maxWidth: 400,
      borderColor: "#ccc",
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 12,
      width: '100%',
      marginBottom: 20
    },
    button: {
       borderWidth: 1,
       backgroundColor: "red",
       borderColor: "#ccc",
       padding: 15,
       maxWidth: 100,
    }
})

export default global;