import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const MOCK_DATA = [
  { id: '1', title: 'Zomato', amount: '₹640', date: 'Just now' },
  { id: '2', title: 'Myntra', amount: '₹2,499', date: 'Yesterday' },
];

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>KharchaRoast Dashboard</Text>
      <View style={styles.balanceCard}>
        <Text style={styles.label}>Safe to Spend</Text>
        <Text style={styles.amount}>₹2,400</Text>
      </View>
      <Text style={styles.sectionTitle}>Recent Crimes</Text>
      <FlatList
        data={MOCK_DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemAmount}>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', paddingTop: 60, paddingHorizontal: 20 },
  header: { fontSize: 24, fontWeight: 'bold', color: '#FFF', marginBottom: 20 },
  balanceCard: { backgroundColor: '#1E1E1E', padding: 25, borderRadius: 15, alignItems: 'center' },
  label: { color: '#888', fontSize: 14 },
  amount: { color: '#00E676', fontSize: 40, fontWeight: 'bold', marginTop: 5 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#FF3366', marginTop: 30, marginBottom: 10 },
  item: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E1E1E', padding: 15, borderRadius: 10, marginVertical: 5 },
  itemTitle: { color: '#FFF', fontSize: 16 },
  itemAmount: { color: '#FF5252', fontSize: 16, fontWeight: 'bold' },
});
