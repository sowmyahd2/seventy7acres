import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, ScrollView, Image, StyleSheet } from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const LoginModal = () => {
  const navigation = useNavigation();

  const handleGenerateOTP = () => {
    // Handle OTP generation
  };

  return (
    <View style={styles.modalBody}>
      <ScrollView contentContainerStyle={styles.modalContent} showsVerticalScrollIndicator={false}>
        <Image
          style={styles.image}
          source={{ uri: "https://i.pinimg.com/564x/fe/29/8a/fe298a70a49d93f50c62ae40c5ecce3a.jpg" }}
        />
        <Text style={styles.heading}>Log in to browse properties for buying and selling</Text>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Phone Number"
            keyboardType="numeric"
            maxLength={12}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleGenerateOTP}>
          <Text style={styles.buttonText}>Generate OTP</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.newUserLink} onPress={() => navigation.navigate('registration')}>
        <Text>New user?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBody: {
    flex: 1,
    padding: 20,
    elevation: 10,
    backgroundColor: "#FFF",
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    justifyContent: 'space-between',
    marginTop: screenHeight * 0.25, // Move modal to start from 1/4th of the screen height
  },
  modalContent: {
    flexGrow: 1,
  },
  image: {
    height: 200,
    width: screenWidth * 0.8, // Make image width responsive
    resizeMode: 'contain',
    alignSelf: "center",
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
    alignSelf: "center",
    textAlign: 'center',
    padding: 10,
    marginBottom: 20, // Add some bottom margin
  },
});

export default LoginModal;
