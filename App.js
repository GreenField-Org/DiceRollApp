import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, ImageBackground, Image, Animated} from 'react-native';


const backgroundImage = require('./Images/blackVelvet.png')
const diceIcon = require('./Images/diceIcon.png')
const settingsIcon = require('./Images/settingsIcon.png')
const rollAgainIcon = require('./Images/rollAgainIcon.png')
const woodenNav = require('./Images/woodenNav.png')
const d20 = require('./Images/d20.png')
const d4 = require('./Images/d4.png')
const d6 = require('./Images/d6.png')
const d8 = require('./Images/d8.png')
const d10 = require('./Images/d10.png')
const d12 = require('./Images/d12.png')
//dice images from https://game-icons.net/tags/dice.html


// Expanding Dice Tray
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
              <TouchableOpacity><Image source={d20} style={styles.trayDice}/></TouchableOpacity>
              <TouchableOpacity><Image source={d4} style={styles.trayDice}/></TouchableOpacity>
              <TouchableOpacity><Image source={d6} style={styles.trayDice}/></TouchableOpacity>
            </View>
            <View style={styles.navImage}>
            <TouchableOpacity><Image source={d8} style={styles.trayDice}/></TouchableOpacity>
            <TouchableOpacity><Image source={d10} style={styles.trayDice}/></TouchableOpacity>
            <TouchableOpacity><Image source={d12} style={styles.trayDice}/></TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
    </Animated.View>
  );
};
//End Expanded Dice Tray

export default function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}/>
        <View>
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
