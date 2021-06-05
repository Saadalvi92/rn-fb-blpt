import {Navigation} from 'react-native-navigation';
import WelcomeImageScreen from './App/Screens/WelcomeImageScreen';
import RegisterScreen from './App/Screens/RegisterScreen';
import AboutYou from './App/Screens/AboutYou';
import VerifyPhone from './App/Screens/VerifyPhone';
import MainAddPicture from './App/Screens/MainAddPic';
import VerifyEmail from './App/Screens/VerifyEmail';
import ProfileScreen from './App/Screens/Profile';
//
Navigation.registerComponent('WelcomeImageScreen', () => WelcomeImageScreen);
Navigation.registerComponent('RegisterScreen', () => RegisterScreen);
Navigation.registerComponent('AboutYou', () => AboutYou);
Navigation.registerComponent('PhoneVerify', () => VerifyPhone);
Navigation.registerComponent('MainAddPicture', () => MainAddPicture);
Navigation.registerComponent('VerifyEmail', () => VerifyEmail);
Navigation.registerComponent('ProfileScreen', () => ProfileScreen);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AppStack',
        children: [
          {
            component: {
              name: 'WelcomeImageScreen',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
});
