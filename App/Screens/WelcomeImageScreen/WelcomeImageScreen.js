//Import React
import React, {useState, useEffect, createContext} from 'react';
import * as yup from 'yup';
//Import react-native
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {observer} from 'mobx-react-lite';
import {SigninStoreContext, useSigninStore} from '../../../Store/MobxSignin';
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

const WelcomeImageScreen = observer(props => {
  const {User, SigninMobx} = useSigninStore();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '155979570978-559s300d3t45pb86ldkv0anfjgdnku91.apps.googleusercontent.com',
    });
  }, []);
  async function onGooglePress() {
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return (
      auth().signInWithCredential(googleCredential),
      SigninMobx(googleCredential),
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
      })
    );
  }
  const facebooksignin = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return (
      auth().signInWithCredential(facebookCredential),
      SigninMobx(data),
      console.log(data),
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
      })
    );
  };
  const signin = Values => {
    auth()
      .signInWithEmailAndPassword(Values.email, Values.password)
      .then(res => {
        SigninMobx(res.user);
        if (User) {
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
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
        alert('Please Check you login Credentials');
      });
  };
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
              signin(Values);
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
              onFbPress={facebooksignin}
              onGooglePress={onGooglePress}
              onPressPhone={() =>
                Navigation.push(props.componentId, {
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
                Navigation.push(props.componentId, {
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
});
export default WelcomeImageScreen;
