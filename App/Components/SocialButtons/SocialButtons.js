import React from 'react';
import {Button, TouchableOpacity, View} from 'react-native';
import AppIcon from '../AppIcon';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
function SocialButtons({onPressPhone}) {
  return (
    <View
      style={{
        flexDirection: 'row',

        justifyContent: 'space-evenly',
      }}>
      <TouchableOpacity onPress={onPressPhone}>
        <View style={{backgroundColor: '#fff', elevation: 8, borderRadius: 10}}>
          <Icon name="call" size={50} color="purple" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        {/* <SocialIcon type="google-plus-official" /> */}
        <View style={{backgroundColor: 'red', elevation: 8, borderRadius: 10}}>
          <Icon name="logo-google" size={50} color="#FFF" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="logo-facebook"
          size={50}
          color="#3949A9"
          style={{elevation: 8, borderRadius: 10}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{backgroundColor: '#000', elevation: 8, borderRadius: 10}}>
          <Icon name="logo-apple" size={50} color="#FFF" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default SocialButtons;
