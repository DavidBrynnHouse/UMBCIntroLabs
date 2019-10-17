// Home screen
import React, { Component } from 'react';
//import react in our code.
import { Text, View, Button, Linking, DrawerLayout } from 'react-native';
//import all the components we are going to use.
 
export default class FirstPage extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ 
      flex: 1, 
      justifyContent: 'space-between',
      padding: 20}}>
        <Button
          title="Introduction to Motion"
          onPress={() => Linking.openURL('https://docs.google.com/document/d/1mfHmqvXgk_qqO6DfRGzekUf4Wh7ZEY7XlFygDUfQjrI/edit?usp=sharing')}
        />
        <Button
          title="Changing Motion"
          onPress={() => Linking.openURL('https://docs.google.com/document/d/1P4vUg6tMnvsict-gtMEDbIl1nRaavaZv-SxeAc4-tyI/edit?usp=sharing')}
        />
        <Button
          title="Creating Mathematical Models of Motion"
          onPress={() => Linking.openURL('https://docs.google.com/document/d/1CPl2fnLcrYI1V1xDTKFvCLzMF2Kewl1VuwZEb25FA2o/edit?usp=sharing')}
        />
        <Button
          title="Force and Motion"
          onPress={() => Linking.openURL('https://docs.google.com/document/d/1Y3scBwZILPmWygA5WX09T9zBHFx0fvU3cYqCNfkjOCw/edit?usp=sharing')}
        />
        <Button
          title="Force, Mass, Acceleration"
          onPress={() => Linking.openURL('https://docs.google.com/document/d/1-hBT4AZGj0RL5nP4bnW7FlgF2S_3vWEswES-0VLVsq8/edit?usp=sharing')}
        />
        <Button
          title="Gravitational Forces"
          onPress={() => Linking.openURL('https://docs.google.com/document/d/1nvNTEcjDhptvNLJt_OtpWzq2kbJCP21gvaITzcS3KW4/edit?usp=sharing')}
        />
        <Button
          title="Elasticity"
          onPress={() => Linking.openURL('https://docs.google.com/document/d/1ml4HmZ2Uql8wC4kM_qyVl8yhENGlPjWEdQ9Mn0BU4nw/edit?usp=sharing')}
        />
        <Button
          title="Torque and Equilibrium"
          onPress={() => Linking.openURL('https://docs.google.com/document/d/1F5snMxWqxd4ByWQ7Lu8mW5FG9rApTnjLs2fP_kL8H30/edit?usp=sharing')}
        />
        <Button
          title="Conservation of Energy"
          onPress={() => Linking.openURL('https://docs.google.com/document/d/1Dzr3rZ76yS208plxWrJ49iGPXLJGOI1M7ifcZSdctqY/edit?usp=sharing')}
        />

      </View>



    
    );
  }
}