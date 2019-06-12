import { Navigation } from 'react-native-navigation';

import colors from 'App/config/colors';
import screens from 'App/constants/screens';

import favIcon from './../../assets/images/fav-tab.png';
import profileIcon from './../../assets/images/profile.png';
import contactIcon from './../../assets/images/contact.png';

export const startTabScreen = () => {
  const options = {
    tabs: [
      {
        label: 'Favorites',
        title: 'Favorites',        
        screen: screens.FAVORITE_SCREEN.id,
        icon: favIcon,
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
          drawUnderNavBar: false,
          navBarBackgroundColor: colors.IOS_GREEN, 
          navBarTextColor: 'white',
          navBarButtonColor: 'white',                  
          navBarLeftButtonColor: 'white',
          navBarRightButtonColor: 'white',
        }, 
      },
      {
        label: 'Contacts',
        title: '',        
        screen: screens.CONTACT_SCREEN.id,
        icon: contactIcon,
        // selectedIcon: require('../img/one_selected.png'), // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
        iconInsets: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        },
        // titleImage: require('../img/titleImage.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
        navigatorStyle: {
          statusBarTextColorScheme: 'light',                  
          navBarHidden: true,
          navBarNoBorder: false,
          drawUnderNavBar: true,
          navBarTranslucent: true,
          navBarTransparent: true,
          navBarBackgroundColor: colors.IOS_GREEN,
          navBarButtonColor: 'white',                  
          navBarLeftButtonColor: 'white',
          navBarRightButtonColor: 'white',  
        }, // override the navigator style for the tab screen, see "Styling the navigator" below (optional),
        navigatorButtons: {} // override the nav buttons for the tab screen, see "Adding buttons to the navigator" below (optional)
      },
      {
        label: 'My Profile',
        title: '',        
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
          navBarHidden: true,          
          navBarTranslucent: true,
          navBarTransparent: true,
          navBarBackgroundColor: colors.IOS_GREEN, 
          navBarTextColor: 'white',
          navBarTransparency: 1,  
          navBarButtonColor: 'white',                  
          navBarLeftButtonColor: 'white',
          navBarRightButtonColor: 'white',
        },
        passProps: {
          data: {
            fromProfileTab: true,
          }
        } 
      }
    ],
    tabsStyle: {
      tabBarButtonColor: colors.LIGHT_GRAY,
      tabBarSelectedButtonColor: colors.IOS_GREEN,
      tabBarBackgroundColor: colors.SYSTEM_LIGHT_GRAY,
      initialTabIndex: 1, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
    },
    appStyle: {
      orientation: 'portrait', 
      // backButtonImage: require('./pathToImage.png'),
      initialTabIndex: 1,
      hideBackButtonTitle: true,
    },
    passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
    animationType: 'fade', // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
    portraitOnlyMode: true,    
  };

  Navigation.startTabBasedApp(options);
}
