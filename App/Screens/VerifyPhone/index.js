//Import React
import React, {Component, useState} from 'react';
import * as yup from 'yup';

//Import react-native
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';

//styles Import
import styles from './Style';
//Component Import
import {AppForm, AppFormField, SubmitButton} from '../../Components/forms';
import AppButton from '../../Components/AppButton';
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required()
    .label('phoneNumber'),
  Code: yup.string().required().label('Code'),
});

function VerifyPhone(props) {
  return (
    <ScrollView>
      <View style={styles.background}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: '#000',
                fontSize: 35,
                fontWeight: 'bold',
                alignItems: 'flex-start',
                marginLeft: '20%',
                marginTop: '8%',
              }}>
              Verify
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 35,
                fontWeight: 'bold',
                alignItems: 'flex-start',
                marginLeft: '20%',
              }}>
              Phone
            </Text>
          </View>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/Applogo.png')}
              style={styles.logo}
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <AppForm
            initialValues={{phoneNumber: '', Code: '123456'}}
            onSubmit={Values => {
              console.log(Values);
            }}
            validationSchema={validationSchema}>
            <Text style={styles.Textstyle}>Phone #</Text>
            <AppFormField
              placeholder="Phone #:                           "
              autoCaptalize="none"
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
            <AppFormField
              placeholder="VerificationCode:                        "
              autoCaptalize="none"
              name="Code"
              keyboardType="default"
            />
            <AppButton title="Continue" color="green" />
          </AppForm>
        </View>
      </View>
    </ScrollView>
  );
}

export default VerifyPhone;
