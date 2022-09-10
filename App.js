import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, ImageBackground, Image, Animated, Text} from 'react-native';


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
const blackBackground  = require('./Images/blackBackground.png')
const redBackground = require('./Images/redBackground.png')
const whiteBackground = require('./Images/whiteBackground.png')
const woodenBackground = require('./Images/woodBackground.png')
const switchOn = require('./Images/switchon.png')
const switchOff = require('./Images/switchoff.png')

//Dice arrays
const d4Arr = [1,2,3,4]
const d6Arr = [1,2,3,4,5,6]
const d8Arr= [1,2,3,4,5,6,7,8]
const d10Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const d12Arr = [1,2,3,4,5,6,7,8,9,10,11,12]
const d20Arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


// Expanding Dice Tray Component
const ExpandedDice = (props) => {
  return(
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
  )
}

//Expanded Settings Component
const ExpandedSettings= (props) =>{
  return(
    <View style={styles.expandedSettings}>
    <ImageBackground source={woodenNav}>
      <View style={styles.navImage}>
        <Text style={styles.text}>Settings</Text>
      </View>
      <View style={styles.navImage}>
        <Text style={styles.text}>Background</Text>
        <Image source={blackBackground} style={styles.settingsImages}/>
        <Image source={redBackground} style={styles.settingsImages}/>
        <Image source={whiteBackground} style={styles.settingsImages}/>
        <Image source={woodenBackground} style={styles.settingsImages}/>
      </View>
      <View style={styles.navImage}>
        <Text style={styles.text}>Sound</Text>
        <Image source={switchOff} style={styles.settingsImages}/>
      </View>
    </ImageBackground>
    </View>
  )
}

const ExpandedDiceTray = ({ expanded = false, ...props}) => {

  const [height] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(height, {
      toValue: !expanded ? 140 : 0,
      duration: 150,
      useNativeDriver: false
    }).start();
  }, [expanded, height]);

  return (
    <Animated.View
      style={{ height}}
    >
        {props.children}
    </Animated.View>
  );
};

const ExpandedSettingsTray = ({ expanded = false, ...props}) => {
  const [height] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(height, {
      toValue: !expanded ? 170 : 0,
      duration: 150,
      useNativeDriver: false
    }).start();
  }, [expanded, height]);

  return (
    <Animated.View
      style={{ height}}
    >
        {props.children}
    </Animated.View>
  );
};
//End Expanded Dice Tray

export default function App() {
  const [diceExpanded, setDiceExpanded] = useState(false);
  const [settingsExpanded, setSettingsExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}/>
        <View>
          <ExpandedDiceTray expanded={diceExpanded}><ExpandedDice /></ExpandedDiceTray>
          <ExpandedSettingsTray expanded={settingsExpanded}><ExpandedSettings /></ExpandedSettingsTray>
          <ImageBackground source={woodenNav} style={styles.navImage}>
            <TouchableOpacity
            onPress={() => {
              setDiceExpanded(!diceExpanded);
            }}>
              <Image source={diceIcon}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSettingsExpanded(!settingsExpanded);
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
  expandedSettings: {
    flex: 1
  },
  text: {
    color: 'white',
    fontFamily: 'Times New Roman',
    fontSize: 20
  },
  settingsImages: {
    width: 50,
    height: 50
  },
  trayDice :{
    width: 50,
    height: 50
  }
});
