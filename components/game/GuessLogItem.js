import { Text,View,StyleSheet } from "react-native";

function GuessLogItem({roundNumber, guess}){
    return(
        <View style ={styles.ListItem}>
            <Text>#{roundNumber}</Text>
            <Text>Opponet's Guess: {guess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ListItem:{
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor:'grey',
        flexDirection: 'row',
        justifyContent:"space-between",
        width: '100%',
        elevation: 4,
        shadowColor: 'grey',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 3
    }
});
export default GuessLogItem;