import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Textarea from 'react-native-textarea';
import AppButton from '../../Components/AppButton';
import colors from '../../config/colors';
import Header from './Header';
import Topbar from './Topbar';

function AddTitle(props) {
  return (
    <View style={{flex: 1, height: '100%'}}>
      <Topbar
        title2="Add Text ->"
        onPress2={() => {
          Navigation.push(props.componentId, {
            component: {
              name: 'AddText',
              options: {
                topBar: {
                  //     visible: false,
                  animate: true,
                  title: {
                    text: 'Add Text',
                    fontSize: 25,
                    alignment: 'center',
                    color: colors.white,
                  },
                  backButton: {color: colors.white},
                  background: {color: colors.green},
                },
              },
            },
          });
        }}
      />
      <View style={styles.container}>
        <Textarea
          containerStyle={styles.textareaContainer}
          style={styles.textarea}
          // onChangeText={onChange}
          // defaultValue={text}
          maxLength={80}
          placeholder={'Start Typing/...'}
          placeholderTextColor={colors.mediumGrey}
          underlineColorAndroid={'transparent'}
        />
        <AppButton title="Save" color="green" />
      </View>
    </View>
  );
}

export default AddTitle;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
    borderColor: colors.lightGrey,
    borderWidth: 1,
  },
  textarea: {
    textAlignVertical: 'top', // hack android
    height: 170,
    fontSize: 14,
    color: colors.black,
  },
});
