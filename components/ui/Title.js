
import {View, Text,StyleSheet,Platform } from "react-native";

function Title({children}){
    return(
        <View>
        <Text  style ={styles.title}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize :26,
        color: 'red',
        fontWeight:'bold',
        textAlign:'center',
        borderColor:'red',
        borderWidth: Platform.select({android: 2, ios: 0}),
        borderRadius:12,
        margin: 25,
        padding:11,
    
      },
})

export default Title;