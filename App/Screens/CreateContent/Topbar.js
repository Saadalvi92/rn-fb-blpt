import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
function Topbar({title1, title2, onPress1, onPress2}) {
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          alignContent: 'flex-start',
          alignSelf: 'flex-start',
        }}>
        <TouchableOpacity onPress={onPress1}>
          <Text style={{fontSize: 18, color: 'blue'}}>{title1}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={onPress2}>
          <Text
            style={{
              fontSize: 18,
              color: 'blue',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              alignContent: 'flex-end',
              alignSelf: 'flex-end',
            }}>
            {title2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Topbar;
