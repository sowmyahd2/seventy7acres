import React, { useState, useEffect } from "react";
import { Animated, Image, View, StyleSheet } from "react-native";
import SplashScreen from "react-native-bootsplash";
import { WebView } from 'react-native-webview';

const AnimatedBootSplash = ({ onAnimationEnd }) => {
  const [zoomAnimation] = useState(() => new Animated.Value(0));
  const [fadeAnimation] = useState(() => new Animated.Value(1));
  const [logo, setLogo] = useState("https://77acres.in/assets/logo.png");

  useEffect(() => {
  
    const animateSplash = () => {
      // Zoom in animation
      Animated.spring(zoomAnimation, {
        toValue: 1,
        useNativeDriver: true,
        speed: 2,
        bounciness: 10,
      }).start(() => {
        // Fade out animation after zoom animation ends
        Animated.timing(fadeAnimation, {
          toValue: 0,
          duration: 500, // Adjust duration as needed
          useNativeDriver: true,
        }).start(() => {
          // Call onAnimationEnd callback when the animation ends
          onAnimationEnd();
        });
      });
    };

  
    animateSplash();
  }, [onAnimationEnd, zoomAnimation, fadeAnimation]);

  return (
    <Animated.View style={[styles.container1, { opacity: fadeAnimation }]}>
      <Animated.Image
        source={{ uri: "https://77acres.in/assets/logo.png" }}
        style={[
          styles.logo,
          {
            transform: [{ scale: zoomAnimation }],
          },
        ]}
      />
    </Animated.View>
  );
};

const App = () => {
  const [visible, setVisible] = useState(true);

  const handleWebViewError = (syntheticEvent) => {
    const { nativeEvent } = syntheticEvent;
    console.error('WebView error: ', nativeEvent);
  };

  const handleAnimationEnd = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      {visible ? (
        <AnimatedBootSplash onAnimationEnd={handleAnimationEnd} />
      ) : (
        <WebView
          source={{ uri: 'https://77acres.in/' }}
          style={styles.webview}
          originWhitelist={['*']}
          javaScriptEnabled={true}
          allowUniversalAccessFromFileURLs={true}
          mixedContentMode='always'
          onError={handleWebViewError}
        />
      )}
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
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '20%',
    transform: [{ translateX: -100 }, { translateY: -100 }],
    width: 500, // Adjust the width of the logo as needed
    height: 200, // Adjust the height of the logo as needed
  },
});

export default App;
