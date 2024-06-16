import React, { useState, useEffect } from "react";
import { Animated, ActivityIndicator , View, StyleSheet } from "react-native";

import RootNavigator from "./screens/navigation/rootnavigator";

const App = () => {
  

 

  const product={
    prototype:"fd"
  }
  return (
    <View style={styles.container}>

       <RootNavigator/>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  container1:{
    flex: 1,
    backgroundColor:"#00c0ff"
  },

  webview: {
    flex: 1,
  },
  logo: {
    
  
  
    top: '30%',
   
    transform: [{ translateX: -100 }, { translateY: -100 }],
    // Adjust the width of the logo as needed
    height: 200, // Adjust the height of the logo as needed
  },
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
   
   
  },
});

export default App;
