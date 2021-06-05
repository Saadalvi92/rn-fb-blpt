import React from 'react';
import {Button, Image, View} from 'react-native';
import styles from './Style';
import AppText from '../AppText';
import Counter from '../Counter';
import colors from '../../config/colors';
function Cat_CardComponent({title, subTitle, image, onPress}) {
  return (
    <View style={styles.card}>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText> £ {subTitle} per Item</AppText>
        <View style={{marginTop: 10}}>
          <Button
            title="Add to Cart"
            color={colors.mediumGrey}
            onPress={onPress}></Button>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}></View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
    </View>
  );
}

export default Cat_CardComponent;
