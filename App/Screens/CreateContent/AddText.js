import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Textarea from 'react-native-textarea';
import AppButton from '../../Components/AppButton';
import colors from '../../config/colors';
import Topbar from './Topbar';
function AddText(props) {
  return (
    <View style={{flex: 1, height: '100%', justifyContent: 'center'}}>
      <Topbar
        title1="<- Add Title"
        title2="Set Location ->"
        onPress1={() => {
          Navigation.pop(props.componentId);
        }}
        onPress2={() => {
          Navigation.push(props.componentId, {
            component: {
              name: 'SetLocation',
              options: {
                topBar: {
                  //     visible: false,
                  animate: true,
                  title: {
                    text: 'Set Location',
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
          // defaultValue={state.text}
          maxLength={2500}
          placeholder={'Start Typing ...'}
          placeholderTextColor={'#000'}
          underlineColorAndroid={'transparent'}
        />
        <AppButton
          title="Save"
          color="green"
          onPress={() => {
            Navigation.pop(props.componentId);
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
  },
  textareaContainer: {
    height: '80%',
    padding: 5,
    backgroundColor: '#F5FCFF',
    borderColor: colors.lightGrey,
    borderWidth: 1,
  },
  textarea: {
    textAlignVertical: 'top',
    height: 170,
    fontSize: 14,
    color: '#333',
  },
});
export default AddText;
