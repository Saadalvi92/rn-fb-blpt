//Import React
import React, {Component} from 'react';
import * as yup from 'yup';

//Import react-native
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Button,
  ScrollView,
} from 'react-native';
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
});

class WelcomeImageScreen extends Component {
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
                Sign in
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 35,
                  fontWeight: 'bold',
                  marginLeft: '20%',
                }}>
                to MyApp
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
              initialValues={{email: '', password: ''}}
              onSubmit={Values => {
                console.log(Values);
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'ProfileScreen',
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
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text
                  style={{textAlign: 'right', color: 'blue', marginRight: 30}}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
              <SubmitButton title="Login" />
              <View style={styles.BottomView}>
                <Text style={styles.BottomText}>OR Sign in With</Text>
              </View>
              <SocialButtons
                onPressPhone={() =>
                  Navigation.push(this.props.componentId, {
                    component: {
                      name: 'PhoneVerify',
                      options: {
                        topBar: {
                          visible: false,
                        },
                      },
                    },
                  })
                }
              />
              <View style={styles.BottomView}>
                <Text style={styles.BottomText}>New to MyApp</Text>
              </View>
              <AppButton
                title="Create an Account"
                color="green"
                onPress={() => {
                  Navigation.push(this.props.componentId, {
                    component: {
                      name: 'RegisterScreen',
                      options: {
                        topBar: {
                          visible: false,
                        },
                      },
                    },
                  });
                }}
              />
            </AppForm>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default WelcomeImageScreen;
