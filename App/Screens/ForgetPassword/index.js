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

const VerifyPhone = observer(props => {
  return (
    <ScrollView>
      <View style={styles.background}>
        <Header title="Verify" title2="Phone" />
        <View style={styles.buttonsContainer}></View>
      </View>
    </ScrollView>
  );
});

export default VerifyPhone;
