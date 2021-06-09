import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
function Header(props) {
  return (
    <View
      style={{
        width: '100%',
        height: '6%',
        backgroundColor: colors.lightgreen,
        flexDirection: 'row',
        position: 'absolute',
      }}>
      <View
        style={{
          justifyContent: 'center',
        }}>
        <TouchableOpacity>
          <Icon
            name="arrow-back"
            color={colors.white}
            size={20}
            style={{marginTop: '4%'}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 25, color: colors.white, textAlign: 'center'}}>
          {props.title}
        </Text>
      </View>
    </View>
  );
}

export default Header;
