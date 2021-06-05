//Import React
import React, {Component} from 'react';
import * as yup from 'yup';

//Import react-native
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';

//styles Import
import styles from './Style';
//Component Import
import {AppForm, AppFormField, SubmitButton} from '../../Components/forms';
import SocialButtons from '../../Components/SocialButtons/SocialButtons';
import AppButton from '../../Components/AppButton';
const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
  Repassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

class RegisterScreen extends Component {
  render() {
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
                  marginTop: '5%',
                }}>
                Create
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 35,
                  fontWeight: 'bold',
                  alignItems: 'flex-start',
                  marginLeft: '20%',
                }}>
                an Account
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
              initialValues={{email: '', password: '', Repassword: ''}}
              onSubmit={Values => {
                console.log(Values);
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'AboutYou',
                    options: {
                      topBar: {
                        visible: false,
                      },
                    },
                  },
                });
              }}
              validationSchema={validationSchema}>
              <AppFormField
                placeholder="Email                            "
                autoCaptalize="none"
                icon="email"
                name="email"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
              <AppFormField
                placeholder="Password...                          "
                autoCaptalize="none"
                autoCorrect={false}
                icon="lock"
                name="password"
                secureTextEntry={true}
              />
              <AppFormField
                placeholder="Confirm Password...                          "
                autoCaptalize="none"
                autoCorrect={false}
                icon="lock"
                name="Repassword"
                secureTextEntry={true}
              />
              <SubmitButton title="Continue" color="green" />
              <View style={styles.BottomView}>
                <Text style={styles.BottomText}>OR Sign in With</Text>
              </View>
              <SocialButtons />
              <View style={styles.BottomView}>
                <Text style={styles.BottomText}>Already Have an Account?</Text>
              </View>
              <AppButton
                title="Login"
                color="black"
                onPress={() => {
                  Navigation.popToRoot(this.props.componentId);
                }}
              />
            </AppForm>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default RegisterScreen;
