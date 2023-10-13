import { View,Text,StyleSheet } from "react-native";

function NumberContainer({children}){
    return(
        <View style = {styles.container}>
            <Text style = { styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
      borderWidth: 3,
      borderColor:'maroon',
      padding: 10,
      borderRadius: 14,
      marginLeft: 40,
      width: 310
      
    },
    numberText:{
       fontSize: 22,
       fontWeight: 'bold',
       color: 'white',
       textAlign: 'center',
       
    }
})