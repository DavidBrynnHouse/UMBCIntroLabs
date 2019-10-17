
// Setting screen
import React, { Component } from 'react';
//import react in our code.
import { Text, View, Button, Linking } from 'react-native';
//import all the components we are going to use.
 
export default class SecondPage extends React.Component {
  render() {
    return (
      <View style={{ 
        flex: 1, 
        justifyContent: 'space-between',
        padding: 20}}>
          <Button
            title="Electric Charges"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1D00pVc5dtgPd6BSAqZNvZgPYGIh773KAk6prlqrPXAo/edit?usp=sharing')}
          />
          <Button
            title="Electric Field"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1IAdG5EEFqHRFCOldKHiumL2s1w5cWIpLS7T0_BQlALA/edit?usp=sharing')}
          />
          <Button
            title="Electric Potential"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1D2zEWuXOMK352gojS_dMIqvOSRuZTWXRxJ9dzMprfTg/edit?usp=sharing')}
          />
          <Button
            title="Introduction to Electric Current"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1KmsWkjcJa6f2T-YYvH6BxJxOgZ8jTrOZlAT9mBwyfME/edit?usp=sharing')}
          />
          <Button
            title="A Model for Circuits I: Electric Current"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1AOMW_sVtJm3CmM_-4PWiBFS8XVaFeeiMaAEv_-45nQE/edit?usp=sharing')}
          />
          <Button
            title="A Model for Circuits II: Voltage and Ohm's Law"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1vsazqyJzhXI4zosMGEB_yedVi2zOInl8drxMjMjJZFs/edit?usp=sharing')}
          />
          <Button
            title="A Model for Circuits III: Capacitors and RC Circuits"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1oS_IyA2aYqbNHdFfoliUuAa__XTNR3t6c5czI93x2nc/edit?usp=sharing')}
          />
          <Button
            title="Modeling the Action Potential Part I"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1oLzTZHD-uFrDLqfh0z4hQ_E9MMnvgmC2F67MJCS9j4U/edit?usp=sharing')}
          />
          <Button
            title="Wave Model of Light: Interference and Diffraction"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1bMnwiZh-3lk3tJxkQAQEpy1H5pkA5099wdgo85d4lkY/edit?usp=sharing')}
          />
          <Button
            title="Modeling the Action Potential Part II"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1gMAJBSo3Cw4kO4Y1zoO7IsAFSrw1gmseSYPRLqril3k/edit?usp=sharing')}
          />
          <Button
            title="Ray Model of Light(Lenses)"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1vW2S9Mpv5lEC2aAyj6BBTFZ9OJayqI62plaMHvvzlso/edit?usp=sharing')}
          />
          <Button
            title="Modeling the Human Eye"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1CDI-22N6mypz1zFfsZ-LiKEAdKoiCXdsV7H3MKbjXVE/edit?usp=sharing')}
          />
        </View>
      
    );
  }
}