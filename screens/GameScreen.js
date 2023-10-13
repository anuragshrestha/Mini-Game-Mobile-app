import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  FlatList,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/card";
import InstructionText from "../components/ui/InsructionText";
import GuessLogItem from "../components/game/GuessLogItem";
import ColorfulTitle from "../components/ui/ColorfulTitle";

function generateRandomNumber(min, max, exclude) {
  let randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ num, onGameOver }) {
  const initialNumber = generateRandomNumber(1, 100, num);
  const [currentNumber, setCurrentNumber] = useState(initialNumber);
  const [guessRounds, setGuessRounds] = useState([initialNumber]);
  const {width, height} = useWindowDimensions();

  useEffect(() => {
    if (currentNumber === num) {
      onGameOver(guessRounds.length);
    }
  }, [currentNumber, num, onGameOver]);

  useEffect(() => {
    (minBoundary = 1), (maxBoundary = 100);
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentNumber < num) ||
      (direction === "greater" && currentNumber > num)
    ) {
      Alert.alert("Warning", "You are going in wrong direction", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentNumber;
    } else {
      minBoundary = currentNumber + 1;
    }

    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentNumber
    );
    setCurrentNumber(newRandomNumber);
    setGuessRounds((prevGuessRounds) => [newRandomNumber, ...prevGuessRounds]);
  }

  const guessRoundListLength = guessRounds.length;
  let content = (
    <>
      <NumberContainer>{currentNumber}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Is it Higher or Lower?
        </InstructionText>
        <View style={styles.butoonsContainer}>
          <View style={styles.number}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={26} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.number}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={26} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );
  if (width > 500) {
    content = (
      <>
        
        <View style={styles.butoonsContainerWide}>
          <View style={styles.number}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={26} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentNumber}</NumberContainer>
          <View style={styles.number}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={26} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <ColorfulTitle> Opponet's Guess</ColorfulTitle>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 14,
  },

  customView: {
    color: "red",
  },
  butoonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  number: {
    flex: 1,
    width: 10,

    alignItems: "center",
    height: 75,
    marginBottom: 10,
  },
  instructionText: {
    marginBottom: 16,
  },
  listContainer: {
    flex: 1,
  },
  butoonsContainerWide:{
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default GameScreen;
