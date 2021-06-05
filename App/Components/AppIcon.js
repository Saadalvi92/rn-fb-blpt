import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
function AppIcon({
  name,
  size = 40,
  backgroundColor = colors.white,
  iconColor = colors.mediumGrey,
  style,
}) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}>
      <Icon name={name} color={iconColor} size={size * 0.5}></Icon>
    </View>
  );
}

export default AppIcon;
