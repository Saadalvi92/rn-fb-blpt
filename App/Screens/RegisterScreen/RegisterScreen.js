//Import React
import React, {useEffect} from 'react';
import * as yup from 'yup';

//Import react-native
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';
import auth from '@react-native-firebase/auth';

//styles Import
import styles from './Style';
//Component Import
import {AppForm, AppFormField, SubmitButton} from '../../Components/forms';
import SocialButtons from '../../Components/SocialButtons/SocialButtons';
import AppButton from '../../Components/AppButton';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {observer} from 'mobx-react-lite';
import {SigninStoreContext, useSigninStore} from '../../../Store/MobxSignin';
import Header from '../../Components/Header';
const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
  Repassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const RegisterScreen = props => {
  const {User, SigninMobx} = useSigninStore();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '155979570978-559s300d3t45pb86ldkv0anfjgdnku91.apps.googleusercontent.com',
    });
  }, []);
  async function onGooglePress() {
    const {idToken, user} = await GoogleSignin.signIn();
    // console.log(token);
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return (
      auth().signInWithCredential(googleCredential),
      SigninMobx(user),
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
  const Register = Values => {
    auth()
      .createUserWithEmailAndPassword(Values.email, Values.password)
      .then(() => {
        console.log('User account created & signed in!');
        Navigation.push(props.componentId, {
          component: {
            name: 'AboutYou',
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
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <ScrollView>
      <View style={styles.background}>
        <Header title="Create" title2="an Account" />
        <View style={styles.buttonsContainer}>
          <AppForm
            initialValues={{email: '', password: '', Repassword: ''}}
            onSubmit={Values => {
              console.log(Values);
              Register(Values);
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
              <Text style={styles.BottomText}>Already Have an Account?</Text>
            </View>
            <AppButton
              title="Login"
              color="black"
              onPress={() => {
                Navigation.popToRoot(props.componentId);
              }}
            />
          </AppForm>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
