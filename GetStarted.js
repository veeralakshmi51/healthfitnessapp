import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React from 'react';
const logo = require('../images/2.jpg');
const GetStarted = ({navigation}) => {
  const pressed = () => {
    console.log('button pressed');
    navigation.navigate('Termsandconditions');
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ImageBackground source={logo} style={{height: 500, width: 500}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', paddingLeft: '15%'}}>
          One Step At a Time
        </Text>
        <Text style={{fontSize: 20, fontWeight: '600', paddingLeft: '20%'}}>
          Relax and Recharge
        </Text>
      </ImageBackground>
      <TouchableOpacity style={styles.buttonView}>
        <Text style={styles.text} onPress={pressed}>
          START
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  buttonView: {
    backgroundColor: '#A75502',
    borderRadius: 30,
    padding: 10,
    width: 180,
    marginTop: 30,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
    color: '#F5F5F5',
  },
});
