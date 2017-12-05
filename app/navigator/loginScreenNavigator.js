import { Navigation } from 'react-native-navigation';
import screens from './../constants/screens';

export const startLoginScreen = () => {
  const options = {
    screen: {
      screen: screens.LOGIN_SCREEN.id,
      navigatorStyle: {
        navBarHidden: true,
        navBarNoBorder: true
      }
    },
    appStyle: {
      orientation: 'portrait'
    },
    animationType: 'slide-down'
  };

  Navigation.startSingleScreenApp(options);
}
