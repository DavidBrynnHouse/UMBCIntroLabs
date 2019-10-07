import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';
import ThirdPage from './screens/ThirdPage';
const retrieverGold = '#ffc20e';
const retrieverBlack = '#000000';
const retrieverRed = '#ff0000';

console.disableYellowBox = true;

const TabScreen = createMaterialTopTabNavigator(
  {
    111: { screen: FirstPage },
    112: { screen: SecondPage },
    122: { screen: ThirdPage }
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: retrieverBlack,
      inactiveTintColor: retrieverBlack,
      style: {
        backgroundColor: retrieverGold,
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: retrieverRed,
        borderBottomWidth: 2,
      },
    },
  }
);

 
const App = createStackNavigator({ 
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: retrieverGold,
      },
      headerTintColor: retrieverBlack,
      title: 'Intro Physics Setup Guide',
    },
  },
});
export default createAppContainer(App);