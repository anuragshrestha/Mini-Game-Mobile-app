import { Text, StyleSheet} from "react-native";

function InstructionText({children, style}){
    return <Text style= {[styles.high, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    high: {
        color: "maroon",
        fontSize: 28,
        fontWeight:"bold",
        textAlign: 'center',
              },
})
export default InstructionText;