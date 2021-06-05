import React from 'react';
import {View, TextInput, StyleSheet, Platform} from 'react-native';
import colors from '../config/colors';
import AppIcon from './AppIcon';
import textdefault from '../config/textdefault';

function AppTextInput({icon, iconColor, size, backgroundColor, ...otherprops}) {
  return (
    <View style={styles.Container}>
      <TextInput style={[textdefault.text, {flex: 1}]} {...otherprops} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.lightGrey,
    flexDirection: 'row',
    width: '95%',
    padding: 5,
    marginLeft: 10,
    marginRight: 5,
    borderRadius: 10,
    marginVertical: 10,
  },
});
export default AppTextInput;
