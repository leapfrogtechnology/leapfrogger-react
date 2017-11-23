import { Navigation } from 'react-native-navigation';

import LoginScreen from './app/screens/login'
import screens from './app/constants/screens'

const { registerComponent } = Navigation;

const registerScreens = (store, provider) => {
  registerComponent(screens.LoginScreen, () => LoginScreen, store, provider);
};

export default registerScreens;
