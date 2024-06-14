import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import HeartIcon from 'react-native-vector-icons/FontAwesome';
import BloodIcon from 'react-native-vector-icons/Fontisto';
import BreathingIcon from 'react-native-vector-icons/MaterialCommunityIcons'; // Example icon
import TemperatureIcon from 'react-native-vector-icons/FontAwesome';
import OxygenIcon from 'react-native-vector-icons/MaterialCommunityIcons'; // Example icon

const Vitals = () => {
  const [vitals, setVitals] = useState([
    'Heart Rate',
    'Blood Pressure',
    'Breathing Level',
    'Temperature',
    'Oxygen Level'
  ]);

  const icons = {
    'Heart Rate': <HeartIcon name="heartbeat" size={24} color="white" />,
    'Blood Pressure': <BloodIcon name="blood-drop" size={24} color="white" />,
    'Breathing Level': <BreathingIcon name="lungs" size={24} color="white" />, // Example icon
    'Temperature': <TemperatureIcon name="thermometer" size={24} color="white" />,
    'Oxygen Level': <OxygenIcon name="water-percent" size={24} color="white" />, // Example icon
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        {icons[item]}
      </View>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Vitals</Text>
      <FlatList 
        data={vitals} 
        renderItem={renderItem} 
        keyExtractor={(item, index) => index.toString()} 
        numColumns={2} 
      />
    </View>
  );
}

export default Vitals

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  itemText: {
    color: 'white',
    fontSize: 18,
  },
});
