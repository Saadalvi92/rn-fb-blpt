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
import DatePicker from 'react-native-date-picker';
const validationSchema = yup.object().shape({
  username: yup.string().required().label('User Name'),
  fullname: yup.string().required().label('FullName'),
  address: yup.string().when(['city', 'zipcode', 'country'], {
    is: (city, zipcode, country) =>
      city !== undefined || zipcode !== null || country !== undefined,
    then: yup.string().required(),
  }),
});

function AboutYou(props) {
  const [date, setDate] = useState(new Date());
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
                marginTop: '20%',
              }}>
              AboutYou
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
            initialValues={{username: '', fullname: '', address: ''}}
            onSubmit={Values => {
              console.log(Values);
              Navigation.push(props.componentId, {
                component: {
                  name: 'MainAddPicture',
                  options: {
                    topBar: {
                      visible: false,
                    },
                  },
                },
              });
            }}
            validationSchema={validationSchema}>
            <Text style={styles.Textstyle}>Username</Text>
            <AppFormField
              placeholder="User Name                            "
              autoCaptalize="none"
              name="username"
              keyboardType="default"
            />
            <Text style={styles.Textstyle}>Full Name</Text>
            <AppFormField
              placeholder="Full Name...                          "
              autoCaptalize="none"
              autoCorrect={false}
              name="fullname"
            />
            <Text style={styles.Textstyle}>Address</Text>
            <AppFormField
              placeholder="Address...                          "
              autoCaptalize="none"
              autoCorrect={false}
              name="address"
            />
            <Text style={styles.Textstyle}>Birthdate</Text>
            <View
              style={{
                justifyContent: 'center',
                width: '100%',
                alignItems: 'center',
              }}>
              <DatePicker date={date} onDateChange={setDate} mode="date" />
            </View>
            <SubmitButton title="Continue" color="green" />
          </AppForm>
        </View>
      </View>
    </ScrollView>
  );
}

export default AboutYou;
