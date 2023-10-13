import { useState } from "react";

import { TextInput, View, StyleSheet, Alert, Text,useWindowDimensions, Dimensions,KeyboardAvoidingView,ScrollView,Platform} from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";


import Card from "../components/ui/card";
import InstructionText from "../components/ui/InsructionText";
import ColorfulTitle from "../components/ui/ColorfulTitle";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

const{width, height} = useWindowDimensions();

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler() {
    const number = parseInt(enteredNumber);
    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert(
        "Invalid number!",
        "Please enter a number between 1 to 99 only.",
        [{ text: "okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(number);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

 
const marginTopDistance = height < 380 ? 30: 100;
  return (
    <ScrollView style={styles.screen} >
    <KeyboardAvoidingView style ={styles.screen} behavior="position">
    <View style={[styles.rootConatiner, {marginTop: marginTopDistance }]}>
     <ColorfulTitle>Guess my number?</ColorfulTitle>
      <Card>
        <View>
          <InstructionText>Enter a Number</InstructionText>
          <TextInput
            style={styles.numberInput}
            maxLength={2} 
            keyboardType="number-pad"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
          />
          <View style={styles.butoonsContainer}>
            <View>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </View>
        </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  rootConatiner: {
    marginTop: deviceHeight < 380 ? 30 : 100,
    flex: 1,
   //alignItems: 'center'
  },
  

  numberInput: {
    color: "black",
    height: 50,
    width: 70,
    marginVertical: 10,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomWidth: 3,
    borderBottomColor: 'white',
    marginLeft: 100,
    marginTop: 10,
  },
  butoonsContainer: {
    flexDirection: "row",
  },
  number: {
    color: "yellow",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 5,
    textAlign: 'center'
  },
  screen:{
    flex:1
  }
});

export default StartGameScreen;
