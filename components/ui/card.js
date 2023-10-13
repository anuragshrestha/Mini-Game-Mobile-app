import { View,StyleSheet } from "react-native";

function card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
  
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 25,
    backgroundColor: "#3b021f",
    padding: 10,
    marginTop: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
});
export default card;
