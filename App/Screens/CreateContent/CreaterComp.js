import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
function CreaterComp({title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          alignContent: 'center',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flex: 1, marginLeft: '3%'}}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>{title}</Text>
        </View>
        <View
          style={{
            flex: 1,
            marginRight: '5%',
            alignItems: 'flex-end',
          }}>
          <Icon name="add-circle-outline" size={25} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default CreaterComp;
