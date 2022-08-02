import React from "react";
import { StyleSheet, TouchableOpacity, View, ImageBackground, Image} from 'react-native';


const backgroundImage = require('./Images/blackVelvet.png')
const diceIcon = require('./Images/diceIcon.png')
const settingsIcon = require('./Images/settingsIcon.png')
const rollAgainIcon = require('./Images/rollAgainIcon.png')

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image source={diceIcon}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={settingsIcon}/>
          </TouchableOpacity>
          <TouchableOpacity>  
            <Image source={rollAgainIcon}/>
          </TouchableOpacity>
         </View> 
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  iconContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
