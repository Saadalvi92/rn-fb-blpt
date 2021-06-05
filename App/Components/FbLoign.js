import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

function FbLoign(props) {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.Text}>Sign in With Facebook </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.mediumGrey,
    borderRadius: 25,
    padding: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  Text: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
export default FbLoign;
