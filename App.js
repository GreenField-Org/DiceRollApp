import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, ImageBackground, Image, Animated} from 'react-native';


const backgroundImage = require('./Images/blackVelvet.png')
const diceIcon = require('./Images/diceIcon.png')
const settingsIcon = require('./Images/settingsIcon.png')
const rollAgainIcon = require('./Images/rollAgainIcon.png')
const woodenNav = require('./Images/woodenNav.png')

// Expanding Dice Tray

const ExpandedSettings = ({ expanded = false }) => {
  const [height] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(height, {
      toValue: !expanded ? 130 : 0,
      duration: 150,
      useNativeDriver: false
    }).start();
  }, [expanded, height]);
}

const ExpandedDice = ({ expanded = false }) => {
  const [height] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(height, {
      toValue: !expanded ? 130 : 0,
      duration: 150,
      useNativeDriver: false
    }).start();
  }, [expanded, height]);

  return (
    <Animated.View
      style={{ height}}
    >
        <View style={styles.expandedDice}>
          <ImageBackground source={woodenNav}>
            <View style={styles.navImage}>
              <Image source={diceIcon} style={styles.trayDice}/>
              <Image source={diceIcon} style={styles.trayDice}/>
              <Image source={diceIcon} style={styles.trayDice}/>
            </View>
            <View style={styles.navImage}>
              <Image source={diceIcon} style={styles.trayDice}/>
              <Image source={diceIcon} style={styles.trayDice}/>
              <Image source={diceIcon} style={styles.trayDice}/>
              <Image source={diceIcon} style={styles.trayDice}/>
              <Image source={settingsIcon}/>
            </View>
            <View style={styles.navImage}>
              <Image source={settingsIcon}/>
            </View>
          </ImageBackground>
        </View>
    </Animated.View>
  );
};
//End Expanded Dice Tray
//End Expanded Settings Tray


export default function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}/>
        <View>
          <ExpandedDice expanded={isExpanded}/>
          <ExpandedDice expanded={isExpanded}/>
          <ImageBackground source={woodenNav} style={styles.navImage}>
            <TouchableOpacity
            onPress={() => {
              setIsExpanded(!isExpanded);
            }}>
              <Image source={diceIcon}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
              setIsExpanded(!isExpanded);
            }}>
              <Image source={settingsIcon}/>
            </TouchableOpacity>
            <TouchableOpacity>  
              <Image source={rollAgainIcon}/>
            </TouchableOpacity>
          </ImageBackground>
         </View> 
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
  navImage: {
    flexDirection: 'row',
    justifyContent:  'space-around',
    padding: 10
  },
  expandedDice: {
    flex: 4
  },
  trayDice :{
    width: 50,
    height: 50
  }
});
