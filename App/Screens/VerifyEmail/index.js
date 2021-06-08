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
import Header from '../../Components/Header';
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

function VerifyEmail(props) {
  return (
    <ScrollView>
      <View style={styles.background}>
        <Header title="Verify" title2="Email" />
        <View style={styles.buttonsContainer}>
          <AppForm
            initialValues={{phoneNumber: '', Code: '123456'}}
            onSubmit={Values => {
              console.log(Values);
            }}
            validationSchema={validationSchema}>
            <Text
              style={{
                color: 'blue',
                fontWeight: '600',
                fontSize: 20,
                alignSelf: 'center',
              }}>
              An email has been sent to you to for
            </Text>
            <Text
              style={{
                color: 'blue',

                fontSize: 20,
                alignSelf: 'center',
              }}>
              verification. Please verify by clicking
            </Text>
            <Text
              style={{
                color: 'blue',
                fontWeight: '600',

                fontSize: 20,
                alignSelf: 'center',
                marginBottom: 20,
              }}>
              the link inside the mail.
            </Text>
            <SubmitButton title="Resend Mail" color="black" />
            <TouchableOpacity>
              <Text
                style={{
                  color: 'blue',
                  fontWeight: '600',

                  fontSize: 20,
                  alignSelf: 'center',
                  marginBottom: 20,
                }}>
                Issues? Try another way.
              </Text>
            </TouchableOpacity>
          </AppForm>
        </View>
      </View>
    </ScrollView>
  );
}

export default VerifyEmail;
