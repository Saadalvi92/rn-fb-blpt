import React from 'react';
import {View, Text} from 'react-native';
import AppTagInput from './TagInput';
import AppButton from '../../Components/AppButton';
import Topbar from './Topbar';
import {Navigation} from 'react-native-navigation';
function AddTags(props) {
  return (
    <View style={{flex: 1, height: '100%'}}>
      <Topbar
        title1="<- Pick Category"
        onPress1={() => {
          Navigation.pop(props.componentId);
        }}
      />
      <View style={{flex: 1, height: '100%', justifyContent: 'center'}}>
        <AppTagInput />
        <AppButton title="Save" color="green" />
      </View>
    </View>
  );
}

export default AddTags;
