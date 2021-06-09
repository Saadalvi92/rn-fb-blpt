import React from 'react';
import {View, Text} from 'react-native';
import AppTagInput from './TagInput';
import AppButton from '../../Components/AppButton';
function AddTags(props) {
  return (
    <View style={{flex: 1, height: '100%', justifyContent: 'center'}}>
      <AppTagInput />
      <AppButton title="Save" color="green" />
    </View>
  );
}

export default AddTags;
