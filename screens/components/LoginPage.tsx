import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginModal = () => {
  const handleGenerateOTP = () => {
    // Handle OTP generation
  };

  const handleLogin = () => {
    // Handle login
  };

  return (
    <View style={styles.modalBody}>
      <Image
        style={styles.image}
        source={{uri:"https://i.pinimg.com/564x/fe/29/8a/fe298a70a49d93f50c62ae40c5ecce3a.jpg"}}/>
      
      <Text style={styles.heading}>Log in to browse properties for buying and selling</Text>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Phone Number"
          keyboardType="numeric"
          maxLength={12}
          // onChangeText={handlePhoneNumberChange} // Implement phone number state and change handler if needed
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleGenerateOTP}>
        <Text style={styles.buttonText}>Generate OTP</Text>
      </TouchableOpacity>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Enter Generated OTP"
          keyboardType="numeric"
          maxLength={4}
          // onChangeText={handleOTPChange} // Implement OTP state and change handler if needed
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.newUserLink} onPress={() => console.log('Navigate to sign up')}>
        <Text>New user?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBody: {
    padding: 20,
    elevation:10,
    backgroundColor:"red"
  },
  image: {
    height: 200,
    width: 400,
 
    alignSelf:"center"
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  inputGroup: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  input: {
    padding: 10,
  },
  button: {
    backgroundColor: '#00c0ff',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  newUserLink: {
    borderWidth: 1,
    borderColor: '#00c0ff',
    textAlign: 'center',
    padding: 10,
    marginTop: 10,
  },
});

export default LoginModal;
