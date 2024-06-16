import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const OtpScreen = () => {
  const [otp, setOTP] = useState<string[]>(['', '', '', '']);
  const inputRefs = [useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null)];

  const handleInputChange = (text: string, index: number) => {
    const newOTP = [...otp];
    
    // If the input is not empty, move focus to the next input
    if (text !== '' && index < 3) {
      newOTP[index] = text;
      inputRefs[index + 1].current?.focus();
    } else if (text === '' && index > 0) {
      // If the input is empty (backspace pressed), move focus to the previous input
      newOTP[index] = text;
      inputRefs[index - 1].current?.focus();
    } else {
      // Otherwise, just update the current input
      newOTP[index] = text;
    }
  
    setOTP(newOTP);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Svg
          height={200}
          width={Dimensions.get('screen').width}
          viewBox="0 0 1440 320"
        >
          <Path
            fill="#00c0ff"
            d='M1,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
          />
        </Svg>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Enter OTP</Text>
        <Text style={styles.subtitle}>A 4-digit code has been sent to your phone</Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <View key={index} style={styles.inputContainer}>
              <TextInput
                ref={inputRefs[index]}
                style={styles.input}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleInputChange(text, index)}
              />
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: '#00c0ff',
    height: 80,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 40,
    top: 100,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'System',
    marginBottom: 20,
    color: 'black',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 40,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    flex: 1,
  },
  loginButton: {
    backgroundColor: '#00c0ff',
    borderRadius: 10,
    paddingVertical: 15, // Adjust padding vertically
    paddingHorizontal: 30, // Adjust padding horizontally
    alignItems: 'center',
   top:50,
    height:50,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    height:50,
    fontWeight: 'bold',
   
  },
});

export default OtpScreen;
