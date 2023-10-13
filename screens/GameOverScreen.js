import { View, Text, StyleSheet, Image, FlatList,Dimensions,useWindowDimensions,ScrollView} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";


function GameOverScreen({roundsNumber,num,onStartNewGame}) {


  // const{width, height} = useWindowDimensions();

  //  let imageSize = 300;

  //  if(width < 380){
  //   imageSize = 150;
  //  }
  //  if(height < 400){
  //   imageSize = 80;
  //  }

  // const imageStyle = {
  //   width: imageSize,
  //   height: imageSize,
  //   borderRadius:  imageSize/2,
  // }
  return (
    <ScrollView style = {styles.screen}>

  
    <View style={styles.container}>
      
      <Title style={styles.color}>GAME OVER!</Title>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/GameOver.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style ={styles.highlight}> {roundsNumber} </Text> 
         rounds to guess the number
        <Text style={styles.highlight}> {num}</Text>.
      
      </Text>
      <View style ={styles.button}>
      <PrimaryButton onPress={onStartNewGame}>Restart Game</PrimaryButton>
      </View>
      
       
    </View>
    </ScrollView>
  );
}

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {

    flex: 1,
  
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height:deviceWidth < 380 ? 150 : 300,
    borderColor: "grey",
   borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
   fontWeight: 'bold',
   fontSize : 24,
   textAlign: 'center',
   color: 'darkgray',
   marginVertical: 20,
   marginTop: -10
  },
  highlight: {
    color: "maroon",
  },
  button:{
    marginBottom: 70,
    fontSize: 25
  },
  color:{
    borderColor: 'black'
  },
  screen:{
    flex:1
  }
});

export default GameOverScreen;
