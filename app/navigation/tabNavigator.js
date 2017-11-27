import { TabNavigator } from 'react-navigation';

const MainTabNavigator = routes => TabNavigator(routes, {
  backBehavior: 'none',
  swipeEnabled: true,
  tabBarPosition: 'top',
  tabBarOptions: {
    labelStyle: {
      fontSize: 16,
    },
    showIcon: false,
  },
});

export default MainTabNavigator;
