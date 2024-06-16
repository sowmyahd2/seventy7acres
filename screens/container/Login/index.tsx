import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginModal from '../../components/loginpages/Loginpage';

const Login = () => {
  return (
    <View style={styles.container}>
      <LoginModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#00c0ff",
  },
});

export default Login;
