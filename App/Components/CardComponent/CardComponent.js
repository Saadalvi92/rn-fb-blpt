import React from 'react';
import {Image, View, Touchable, TouchableOpacity} from 'react-native';
import styles from './Style';
import AppText from '../AppText';
function CardComponent({title, subTitle, image, onPress}) {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.image} source={{uri: image}}></Image>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default CardComponent;
