import React from "react";
import styles from "./Style";
import { View, Image, TouchableHighlight } from "react-native";
import AppText from "../AppText";
import colors from "../../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
function ListerInfo({
  title,
  subTitle,
  image,
  iconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
        <View style={styles.Container}>
          {iconComponent}
          {image && <Image style={styles.image} source={image}></Image>}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default ListerInfo;
