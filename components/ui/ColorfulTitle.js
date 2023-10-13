import React from 'react';
import { Text, StyleSheet, View,Platform } from 'react-native';

function ColorfulTitle  ({ children }) {
  return (
  <View>
    <Text style={styles.colorfulTitle}>{children}</Text>
    </View>
)};

const styles = StyleSheet.create({
  colorfulTitle: {
    fontSize :30,
    textAlign:'center',
    borderColor:'white',
    borderWidth: Platform.select({android: 2, ios: 0}),
    borderRadius:12,
    margin: 40,
    padding:11,
    fontWeight: 'bold',
    color: 'white', 
  },
});

export default ColorfulTitle;
