import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, ImageBackground, Image} from 'react-native';


const backgroundImage = require('./Images/blackVelvet.png')
const diceIcon = require('./Images/diceIcon.png')
const settingsIcon = require('./Images/settingsIcon.png')
const rollAgainIcon = require('./Images/rollAgainIcon.png')
const woodenNav = require('./Images/woodenNav.png')

const ExpandedDice = ({ expanded = false }) => {
  const [height] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(height, {
      toValue: !expanded ? 200 : 0,
      duration: 150,
      useNativeDriver: false
    }).start();
  }, [expanded, height]);

  return (
    <Animated.View
      style={{ height, backgroundColor: "orange" }}
    ></Animated.View>
  );
};

export default function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}/>
        <View>
          <ImageBackground source={woodenNav} style={styles.navImage}>
            <TouchableOpacity>
              <Image source={diceIcon}/>
            </TouchableOpacity>
            <TouchableOpacity>
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
  }
});
