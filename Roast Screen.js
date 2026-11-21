import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function RoastScreen() {
  const [intensity, setIntensity] = useState('Savage');
  const [currentRoast, setCurrentRoast] = useState("Zomato pe ₹640 uda diye? Landlord ko ab Zomato coupons dega kya? 💀");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Roast Mode</Text>
      <View style={styles.selector}>
        {['Pyaar Se', 'Mild', 'Savage'].map((mode) => (
          <TouchableOpacity 
            key={mode} 
            style={[styles.button, intensity === mode && styles.activeButton]}
            onPress={() => setIntensity(mode)}
          >
            <Text style={styles.buttonText}>{mode}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.roastDisplay}>
        <Text style={styles.roastText}>{currentRoast}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 40, justifyContent: 'center' },
  header: { fontSize: 28, fontWeight: 'bold', color: '#FFF', textAlign: 'center', marginBottom: 20 },
  selector: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30 },
  button: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, backgroundColor: '#2A2A2A' },
  activeButton: { backgroundColor: '#FF3366' },
  buttonText: { color: '#FFF', fontWeight: 'bold' },
  roastDisplay: { backgroundColor: '#1E1E1E', padding: 30, borderRadius: 20, alignItems: 'center' },
  roastText: { color: '#FFD54F', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
});
