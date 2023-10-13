import { View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children, onPress}) {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed]: styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: "maroon" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonInnerContainer: {
    paddingHorizontal: 25,
    paddingVertical: 18,
    backgroundColor: "#72063c",
    borderRadius: 18,
  },
  buttonOuterContainer: {
    margin: 6,
    width: '80%',
    paddingHorizontal: 5,
    marginHorizontal: 16
    // textAlign: 'center',
    // justifyContent: 'center'
    
  },

  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  pressed:{
    opacity: 0.65,
  }
});

export default PrimaryButton;
