import React, {useState} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import AppText from './AppText';
import Counter from './Counter';
function CheckOutCard({title, subTitle, Price, image, onPress, qty}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.qty}>{qty}</AppText>
        {/* <Counter /> */}
        <AppText style={styles.Price}>= £{Price}</AppText>
      </View>
    </View>
  );
}

export default CheckOutCard;
import {StyleSheet} from 'react-native';
import colors from '../config/colors';
const styles = StyleSheet.create({
  card: {
    width: '100%',
    top: 15,
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    flexDirection: 'row',
  },
  image: {
    backgroundColor: colors.black,
    height: 150,
    width: 100,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  detailsContainer: {paddingLeft: 20, paddingTop: 20},
  title: {
    marginBottom: 7,
    fontSize: 15,
    fontWeight: '700',
  },
  subTitle: {
    color: colors.secondary,
  },
  Price: {top: 40, left: 140},
  qty: {
    top: 60,
  },
});
