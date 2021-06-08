import React from 'react';
import {Text, View, Button} from 'react-native';
import {observer} from 'mobx-react-lite';
import {SigninStoreContext, useSigninStore} from '../../../Store/MobxSignin';
import auth from '@react-native-firebase/auth';
import AppButton from '../../Components/AppButton';
import {Navigation} from 'react-native-navigation';
const index = observer(props => {
  const {User, SignoutMobx} = useSigninStore();

  return (
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
    </View>
  );
});

export default index;
