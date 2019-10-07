// Home screen
import React, { Component } from 'react';
//import react in our code.
import { Text, View, Button, Linking } from 'react-native';
//import all the components we are going to use.
 
export default class ThirdPage extends React.Component {
  render() {
    return (
      <View style={{ 
        flex: 1, 
        justifyContent: 'space-between',
        padding: 20}}>
          <Button
            title="Lab 1"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/e/2PACX-1vRdSvPYrCqDiJmitOqr-kKBodeDM9yzZhuQjmCNHtflNJQHN2Fp-38s6Kf_XfxqQUGVIRCJoLB2ZS6h/pub')}
          />
          <Button
            title="Lab 2"
            onPress={() => this.props.navigation.navigate('Details')}
          />
          <Button
            title="Lab 3"
            onPress={() => this.props.navigation.navigate('Details')}
          />
          <Button
            title="Lab 4"
            onPress={() => this.props.navigation.navigate('Details')}
          />
          <Button
            title="Lab 5"
            onPress={() => this.props.navigation.navigate('Details')}
          />
          <Button
            title="Lab 6"
            onPress={() => this.props.navigation.navigate('Details')}
          />
          <Button
            title="Lab 7"
            onPress={() => this.props.navigation.navigate('Details')}
          />
          <Button
            title="Lab 8"
            onPress={() => this.props.navigation.navigate('Details')}
          />
          <Button
            title="Lab 9"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      
    );
  }
}