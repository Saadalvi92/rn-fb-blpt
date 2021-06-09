import React from 'react';
import {SideMenuView} from 'react-native-navigation-drawer-extension';
function SideMenu(props) {
  return (
    <SideMenuView
      style={{height: '100%', width: '50%'}}
      drawerName={'CustomDrawer'}
      direction={'left'}
      passProps={{
        animationOpenTime: 300,
        animationCloseTime: 300,
        dismissWhenTouchOutside: true,
        fadeOpacity: 0.6,
        drawerScreenWidth: '75%',
        drawerScreenHeight: '100%',
        parentComponentId: props.componentId,
        style: {
          backgroundColor: 'white',
        },
      }}
      options={{
        layout: {componentBackgroundColor: 'transparent'},
      }}></SideMenuView>
  );
}

export default SideMenu;
