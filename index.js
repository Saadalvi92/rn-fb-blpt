import {Navigation} from 'react-native-navigation';
import WelcomeImageScreen from './App/Screens/WelcomeImageScreen';
import RegisterScreen from './App/Screens/RegisterScreen';
import AboutYou from './App/Screens/AboutYou';
import VerifyPhone from './App/Screens/VerifyPhone';
import MainAddPicture from './App/Screens/MainAddPic';
import VerifyEmail from './App/Screens/VerifyEmail';
import ProfileScreen from './App/Screens/Profile';
import {RNNDrawer} from 'react-native-navigation-drawer-extension';
import SideMenu from './App/Components/SideMenu';
import CreateContent from './App/Screens/CreateContent';
import AddTitle from './App/Screens/CreateContent/AddTitle';
import AddPhotos from './App/Screens/CreateContent/AddPhotos';
import AddTags from './App/Screens/CreateContent/AddTags';
import AddText from './App/Screens/CreateContent/AddText';
import AddVideos from './App/Screens/CreateContent/AddVideos';
import SetLocation from './App/Screens/CreateContent/SetLocation';
import PickCategories from './App/Screens/CreateContent/PickCategories';
//
Navigation.registerComponent('WelcomeImageScreen', () => WelcomeImageScreen);
Navigation.registerComponent('RegisterScreen', () => RegisterScreen);
Navigation.registerComponent('AboutYou', () => AboutYou);
Navigation.registerComponent('PhoneVerify', () => VerifyPhone);
Navigation.registerComponent('MainAddPicture', () => MainAddPicture);
Navigation.registerComponent('VerifyEmail', () => VerifyEmail);
Navigation.registerComponent('ProfileScreen', () => ProfileScreen);
Navigation.registerComponent('CreateContent', () => CreateContent);
Navigation.registerComponent('AddTitle', () => AddTitle);
Navigation.registerComponent('AddVideos', () => AddVideos);
Navigation.registerComponent('SetLocation', () => SetLocation);
Navigation.registerComponent('AddPhotos', () => AddPhotos);
Navigation.registerComponent('AddTags', () => AddTags);
Navigation.registerComponent('AddText', () => AddText);
Navigation.registerComponent('PickCategories', () => PickCategories);
Navigation.registerComponent('CustomDrawer', () => RNNDrawer.create(SideMenu));
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
