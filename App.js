import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import { View, Image, TouchableOpacity, Linking } from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';
import ThirdPage from './screens/ThirdPage';
const retrieverGold = '#ffc20e';
const retrieverBlack = '#000000';
const retrieverRed = '#ff0000';

console.disableYellowBox = true;

class ActionBarImage extends Component {
 
  onPress = () => {
    Linking.openURL('https://drive.google.com/drive/folders/1GQ9P480zxrIyEiF9DCudoj2GcYaBblo6?usp=sharing')
  }

  render() {
 
    return (
 
      <View style={{flexDirection: 'row'}}>
 
        <TouchableOpacity onPress={this.onPress} activeOpacity={.5} >
        <Image
            source={require('/home/david/Documents/React-Native/UMBCIntroPhysicsLabs/images/UMBCDogLogo.png')}
            style={{ width: 55, height: 50,  marginLeft: 15}}
          />
        </TouchableOpacity>
          
       

      </View>
    
    );
  
  
  }
}


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
      title: '     Intro Physics Setup Guide',
      
      headerLeft : <ActionBarImage />,
    },
  },
});
export default createAppContainer(App);