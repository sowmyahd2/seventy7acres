import React,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
const RegisterModal = () => {
  const handleGenerateOTP = () => {
    // Handle OTP generation
  };

  const data = [
    { label: 'Owner', value: '1' },
    { label: 'Builder', value: '2' },
    { label: 'Developer', value: '3' },
   
  ];
  const handleRegister = () => {
    // Handle registration
  };
  const [checked, setChecked] = useState('first');
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={styles.container}>
    <View style={styles.modalContainer}>
      <View style={styles.modalHeader}>
        <Text style={styles.modalTitle}>Register</Text>
      </View>
      <View style={styles.modalBody}>
        <Text style={styles.modalBodyText}>Please fill out the form below to create a new account.</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your First Name"
          maxLength={80}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Last Name"
          maxLength={80}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          keyboardType="numeric"
          maxLength={10}
        />
         <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'User Type' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
       
        />
        <View style={styles.radioGroup}>
          <View style={styles.radioItem}>
            <Text>Male</Text>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
              color='red'
            />
          </View>
          <View style={styles.radioItem}>
            <Text>Female</Text>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
          </View>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter Generated OTP"
          keyboardType="numeric"
          maxLength={4}
        />
        <TouchableOpacity style={styles.generateOTPButton} onPress={handleGenerateOTP}>
          <Text style={styles.generateOTPButtonText}>Generate OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
flex:1,
backgroundColor: "#00c0ff",
    padding: 20,
    elevation:10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    elevation:10,

  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  radioItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalBody: {
    flex: 1,
  },
  modalBodyText: {
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  generateOTPButton: {
    backgroundColor: '#00c0ff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  generateOTPButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#00c0ff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RegisterModal;
