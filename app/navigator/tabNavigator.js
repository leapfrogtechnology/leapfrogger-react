import { Navigation } from 'react-native-navigation';

import colors from 'App/config/colors';
import screens from 'App/constants/screens';

import profileIcon from './../../assets/images/profile.png';

export const startTabScreen = () => {
  const options = {
    tabs: [
      {
        label: 'Contacts',
        screen: screens.CONTACT_SCREEN.id,
        icon: profileIcon,
        // selectedIcon: require('../img/one_selected.png'), // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
        iconInsets: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        },
        title: 'Leapfroggers',
        // titleImage: require('../img/titleImage.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
        navigatorStyle: {
          statusBarTextColorScheme: 'light',                  
          navBarHidden: true,
          navBarNoBorder: false,
          drawUnderNavBar: true,
          navBarTranslucent: true,
          navBarBackgroundColor: colors.LF_DARK_GRREEN,           
        }, // override the navigator style for the tab screen, see "Styling the navigator" below (optional),
        navigatorButtons: {} // override the nav buttons for the tab screen, see "Adding buttons to the navigator" below (optional)
      },
      {
        label: 'Profile',
        screen: screens.PROFILE_SCREEN.id,
        icon: profileIcon,
        // selectedIcon: require('../img/two_selected.png'),
        iconInsets: { 
          top: 0, 
          left: 0,
          bottom: 0,
          right: 0
        },
        navigatorStyle: {
          statusBarTextColorScheme: 'light',                  
          navBarNoBorder: false,
          drawUnderNavBar: true,
          navBarTranslucent: true,
          navBarTransparent: true,
          navBarBackgroundColor: colors.LF_DARK_GRREEN, 
          navBarTextColor: 'white',
          navBarTransparency: 1,                    
        },
        title: 'My Profile',
        passProps: {
          data: {
            fromProfileTab: true,
          }
        } 
      }
    ],
    tabsStyle: {
      tabBarButtonColor: colors.LIGHT_GRAY,
      tabBarSelectedButtonColor: colors.LF_DARK_GRREEN,
      tabBarBackgroundColor: colors.SYSTEM_LIGHT_GRAY,
      initialTabIndex: 0, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
    },
    passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
    animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
  
  };

  Navigation.startTabBasedApp(options);
}
