import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';

import LoginScreen from './app/screens/login';
import SplashScreen from './app/screens/splash';
import InitialScreen from './app/screens/initial';
import ContactScreen from './app/screens/contact';
import ProfileScreen from './app/screens/profile';


import screens from './app/constants/screens';

const { registerComponent } = Navigation;

export const registerScreens = (store, provider) => {
  registerComponent(screens.LOGIN_SCREEN.id, () => LoginScreen, store, provider);
  registerComponent(screens.INITIAL_SCREEN.id, () => InitialScreen, store, provider);
  registerComponent(screens.SPLASH_SCREEN.id, () => SplashScreen, store, provider);
  registerComponent(screens.CONTACT_SCREEN.id, () => ContactScreen, store, provider);
  registerComponent(screens.PROFILE_SCREEN.id, () => ProfileScreen, store, provider);
};

export const registerScreenVisibilityListener = () => {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}
