import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
function Header({title, title2}) {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <Text
          style={{
            color: '#000',
            fontSize: 35,
            fontWeight: 'bold',
            alignItems: 'flex-start',
            marginLeft: '20%',
            marginTop: '5%',
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: '#000',
            fontSize: 35,
            fontWeight: 'bold',
            marginLeft: '20%',
          }}>
          {title2}
        </Text>
      </View>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/Applogo.png')} style={styles.logo} />
      </View>
    </View>
  );
}

export default Header;
const styles = StyleSheet.create({
  logo: {marginTop: '10%', marginRight: '20%'},
});
