import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [safeBalance, setSafeBalance] = useState(2400);
  const [latestRoast, setLatestRoast] = useState("Zomato pe ₹640 uda diye? Landlord ko ab Zomato coupons dega kya? 💀");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KharchaRoast</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Safe-to-Spend</Text>
        <Text style={styles.balance}>₹{safeBalance}</Text>
      </View>
      <View style={styles.roastBox}>
        <Text style={styles.roastText}>{latestRoast}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#FF3366', marginBottom: 20 },
  card: { backgroundColor: '#1E1E1E', padding: 30, borderRadius: 20, width: '80%', alignItems: 'center' },
  label: { color: '#888', fontSize: 16 },
  balance: { color: '#00E676', fontSize: 48, fontWeight: 'bold', marginVertical: 10 },
  roastBox: { backgroundColor: '#FF8F00', padding: 20, borderRadius: 15, width: '85%', marginTop: 20 },
  roastText: { color: '#000', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
});
