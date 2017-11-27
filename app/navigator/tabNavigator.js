import { Navigation } from 'react-native-navigation';

import screens from './../constants/screens';
import colors from './../config/colors';

export const startTabScreen = () => {
  const options = {
    tabs: [
      {
        label: 'Contacts',
        screen: screens.CONTACT_SCREEN.id,
        // icon: require('../img/one.png'),
        // selectedIcon: require('../img/one_selected.png'), // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
        iconInsets: { // add this to change icon position (optional, iOS only).
          top: 6, // optional, default is 0.
          left: 0, // optional, default is 0.
          bottom: -6, // optional, default is 0.
          right: 0 // optional, default is 0.
        },
        title: '',
        // titleImage: require('../img/titleImage.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
        navigatorStyle: {}, // override the navigator style for the tab screen, see "Styling the navigator" below (optional),
        navigatorButtons: {} // override the nav buttons for the tab screen, see "Adding buttons to the navigator" below (optional)
      },
      {
        label: 'Profile',
        screen: screens.PROFILE_SCREEN.id,
        // icon: require('../img/two.png'),
        // selectedIcon: require('../img/two_selected.png'),
        title: ''
      }
    ],
    tabsStyle: {
      tabBarButtonColor: colors.SYSTEM_SELECTED,
      tabBarSelectedButtonColor: colors.SYSTEM_SELECTED,
      tabBarBackgroundColor: colors.SYSTEM_LIGHT_GRAY,
      initialTabIndex: 0, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
    },
    passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
    animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
  
  };

  Navigation.startTabBasedApp(options);
}
