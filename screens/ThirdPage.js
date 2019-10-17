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
            title="Atwood's Machine"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1f6ZOqYSOrDBeNXDrlK-A8O3CiHnmINkW7jEbQZnjAn8/edit?usp=sharing')}
          />
          <Button
            title="Ballistic Pendulum"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1Jlfr5Olpy0BXTBkjO3EYq80hqR6Imvz6Iw0ipvAtxho/edit?usp=sharing')}
          />
          <Button
            title="Simple Harmonic Motion: Spring and Simple Pendulum"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1yE4UrdfVAyIJBE3fNc7JuC1032N2_BcxzsdKUh0uU0U/edit?usp=sharing')}
          />
          <Button
            title="Angular Momentum"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1NVJwbXgc_tRu8TlaRU8EoGxdOvDv0lsvpVTjiLiJBFo/edit?usp=sharing')}
          />
          <Button
            title="The Velocity of Sound"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1YEGBdVpRzPTB02MvqP7sCLyTepVyukFow9HWcSXcgKI/edit?usp=sharing')}
          />
          <Button
            title="Heat Capacity and Latent Heat"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1kHDKRdh8IHw4vHVSccsQwGELHJtwQ54_9hP99YAPvxQ/edit?usp=sharing')}
          />
          <Button
            title="Ohm’s Law and Resistivity: Series and Parallel DC Circuits"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1xtAVIy3hZkLDmMB-fav4bpEB-I8yrOHQIrJULss5i4o/edit?usp=sharing')}
          />
          <Button
            title="Current Balance"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1lcq3-IVVK-dNaJvuchuqkBdwpOxQe4aZn4kzZ3mcwic/edit?usp=sharing')}
          />
          <Button
            title="E/M for the Electron"
            onPress={() => Linking.openURL('https://docs.google.com/document/d/1MVV5ZcPsY8y6RvZqZaOs1GxSeIU1Uprq1CKdjR9qIM8/edit?usp=sharing')}
          />
        </View>
      
    );
  }
}