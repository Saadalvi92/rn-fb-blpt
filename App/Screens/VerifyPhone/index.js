//Import React
import React, {Component, useState} from 'react';
import * as yup from 'yup';

//Import react-native
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

//styles Import
import styles from './Style';
//Component Import
import {AppForm, AppFormField, SubmitButton} from '../../Components/forms';
import AppButton from '../../Components/AppButton';
import AppTextInput from '../../Components/AppTextInput';
import Header from '../../Components/Header';
import auth from '@react-native-firebase/auth';
import {observer} from 'mobx-react-lite';
import {SigninStoreContext, useSigninStore} from '../../../Store/MobxSignin';
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required()
    .label('phoneNumber'),
});

const VerifyPhone = observer(props => {
  const {SigninMobx} = useSigninStore();
  const [ph, setPH] = useState();
  const [confirm, setConfirm] = useState();
  const [code, setCode] = useState();
  const VerifyPhonenum = async data => {
    try {
      const getConfirmation = await auth().signInWithPhoneNumber(data);
      console.log(JSON.stringify(getConfirmation));
      setConfirm(getConfirmation);
    } catch (error) {
      alert(error);
    }
  };
  const VerifyCode = async () => {
    try {
      const response = await confirm.confirm(code);
      if (response) {
        console.log(response.user.phoneNumber);
        SigninMobx(response.user);
        Navigation.push(props.componentId, {
          component: {
            name: 'ProfileScreen',
            options: {
              hardwareBackButton: {
                dismissModalOnPress: false,
                popStackOnPress: false,
              },
              topBar: {
                visible: false,
              },
            },
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView>
      <View style={styles.background}>
        <Header title="Verify" title2="Phone" />
        <View style={styles.buttonsContainer}>
          <AppForm
            initialValues={{phoneNumber: ''}}
            onSubmit={Values => {
              VerifyPhonenum('+92' + Values.phoneNumber);
            }}
            validationSchema={validationSchema}>
            <Text style={styles.Textstyle}>Phone #</Text>
            <AppFormField
              placeholder="Phone #: without countryCode                         "
              name="phoneNumber"
              keyboardType="numeric"
            />
            <SubmitButton title="Send SMS" color="black" />
            <TouchableOpacity>
              <Text
                style={{
                  color: 'blue',
                  fontWeight: '600',
                  marginTop: 20,
                  fontSize: 20,
                  alignSelf: 'center',
                }}>
                Didnt't Get Code? Resend.
              </Text>
            </TouchableOpacity>
          </AppForm>
          <AppTextInput
            placeholder="VerificationCode"
            onChangeText={setCode}
            value={code}
          />
          <AppButton title="Continue" color="green" onPress={VerifyCode} />
        </View>
      </View>
    </ScrollView>
  );
});

export default VerifyPhone;
