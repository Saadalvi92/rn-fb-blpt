import React, {useState} from 'react';
import {
  Button,
  Modal,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import Icon from '../AppIcon';
import styles from './Style';
import AppText from '../AppText';
import colors from '../../config/colors';

import PickerItem from '../PickerItem';

function AppPicker({
  icon,
  items,
  numberOfColumns = 1,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.Container}>
          <Icon
            style={styles.icon}
            name={icon}
            size={20}
            iconColor={colors.black}
            backgroundColor={colors.offWhite}></Icon>
          {selectedItem ? (
            <AppText style={styles.AppText}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.PlaceHolder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={32}
            color={colors.mediumGrey}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)}></Button>
        <FlatList
          data={items}
          keyExtractor={item => item.value.toString()}
          numColumns={numberOfColumns}
          renderItem={({item}) => (
            <PickerItemComponent
              item={item}
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}></FlatList>
      </Modal>
    </>
  );
}

export default AppPicker;

{
  /* <Text>{firstName}</Text>
      <TextInput
        secureTextEntry
        maxLength={5}
        clearButtonMode="always"
        keyboardType="url"
        placeholder="First Name"
        onChangeText={(Constants) => console.log(Constants)}
        style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
      /> */
}
