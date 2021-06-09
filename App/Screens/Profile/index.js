import React from 'react';
import {Text, View, Button} from 'react-native';
import {observer} from 'mobx-react-lite';
import {SigninStoreContext, useSigninStore} from '../../../Store/MobxSignin';
import auth from '@react-native-firebase/auth';
import AppButton from '../../Components/AppButton';
import {RNNDrawer} from 'react-native-navigation-drawer-extension';
import colors from '../../config/colors';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {Navigation} from 'react-native-navigation';
const index = observer(props => {
  const {User, SignoutMobx} = useSigninStore();

  return (
    <GestureRecognizer
      onSwipeLeft={() => {
        RNNDrawer.showDrawer({
          component: {
            name: 'CustomDrawer',
            passProps: {
              direction: 'right',
              animationOpenTime: 250,
              animationCloseTime: 250,
              dismissWhenTouchOutside: true,
              fadeOpacity: 0.6,
              drawerScreenWidth: '50%',
              drawerScreenHeight: '100%',
              parentComponentId: props.componentId,
              style: {
                backgroundColor: colors.black,
                opactity: 0.6,
              },
            },
            options: {layout: {componentBackgroundColor: 'transparent'}},
          },
        });
      }}
      style={{
        flex: 1,
      }}>
      <View style={{justifyContent: 'center', height: '100%'}}>
        <Text>
          {User[0].email
            ? User[0].email
            : User[0].userID
            ? 'User Name:' + User[0].userID
            : 'User Number:  ' + User[0].phoneNumber}
        </Text>
        <AppButton
          title="Signout"
          onPress={() => {
            auth()
              .signOut()
              .then(
                () => Navigation.popToRoot(props.componentId),
                SignoutMobx,
                console.log('user is Signed Out'),
              );
          }}
        />
        <AppButton
          title="Create Content"
          onPress={() => {
            Navigation.push(props.componentId, {
              component: {
                name: 'CreateContent',
                options: {
                  hardwareBackButton: {
                    dismissModalOnPress: false,
                    popStackOnPress: false,
                  },
                  topBar: {
                    //     visible: false,
                    animate: true,
                    title: {
                      text: 'Create Content',
                      fontSize: 25,
                      alignment: 'center',
                      color: colors.white,
                    },
                    backButton: {color: colors.white},
                    background: {color: colors.green},
                  },
                },
              },
            });
          }}
          color="green"
        />
      </View>
    </GestureRecognizer>
  );
});

export default index;
