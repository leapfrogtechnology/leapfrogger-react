import { Navigation } from 'react-native-navigation';
import screens from './../constants/screens';

export const startSplashScreen = () => {
  const options = {
    screen: {
      screen: screens.SPLASH_SCREEN.id,
      navigatorStyle: {
        navBarHidden: true,
        navBarNoBorder: true
      }
    },
    appStyle: {
      orientation: 'portrait'
    },
    animationType: 'fade'
  };

  Navigation.startSingleScreenApp(options);
}
