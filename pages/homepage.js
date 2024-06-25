import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import { ThemeContext, useTheme } from '../components/theme';
import { useContext } from 'react';

const transactions = [
  {
    id: "1",
    name: "Apple Store",
    category: "Entertainment",
    amount: "- $5.99",
    icon: require("../assets/apple.png"),
  },
  {
    id: "2",
    name: "Spotify",
    category: "Music",
    amount: "- $12.99",
    icon: require("../assets/spotify.png"),
  },
  {
    id: "3",
    name: "Money Transfer",
    category: "Transaction",
    amount: "$300",
    icon: require("../assets/moneyTransfer.png"),
  },
  {
    id: "4",
    name: "Grocery",
    category: "Transaction",
    amount: "- $88",
    icon: require("../assets/grocery.png"),
  },
];

const footerIcons = [
  {
    id: '1',
    name: 'Sent',
    icon: require('../assets/send.png'),
  },
  {
    id: '2',
    name: 'Receive',
    icon: require('../assets/recieve.png'),
  },
  {
    id: '3',
    name: 'Loan',
    icon: require('../assets/loan.png'),
  },
  {
    id: '4',
    name: 'Topup',
    icon: require('../assets/topUp.png'),
  },
];

const Homepage = () => {
  const { isDark } = useTheme(ThemeContext);

  return (
    <>
      <ScrollView style={[{ flex: 1, paddingTop: 40, backgroundColor: isDark ? '#1e1e2d' : '#fff' },{backgroundColor: isDark? '#161622': '#fff'}]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
          <View style={{ width: 50, height: 50, borderRadius: 25, marginRight: 16 }}>
            <Image source={require('../assets/profile.png')} style={{ width: '100%', height: '100%', borderRadius: 25 }} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, color: isDark ? '#ccc' : '#888' }}>Welcome back, </Text>
            <Text style={[{ fontSize: 18, fontWeight: 'bold', color: isDark ? '#fff' : '#000' },{color: isDark ? 'white' : ''}]}> Kelly Buabeng</Text>
          </View>
          <Image source={require('../assets/search.png')} style={{ height: 40, width: 40, borderRadius: 50, backgroundColor: '#eee' }} />
        </View>

        <Image source={require('../assets/Card.png')} style={{ height: 250, width: '95%', borderRadius: 12, marginVertical: 20, alignSelf: 'center' }} />

        <FlatList
          data={footerIcons}
          keyExtractor={item => item.id}
          contentContainerStyle={{ width: '95%', marginVertical: 20, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between' }}
          horizontal
          renderItem={({ item }) => (
            <View style={{ alignItems: 'center' }}>
              <View style={{ borderRadius: 25, backgroundColor: '#eee', padding: 15, marginBottom: 8 }}>
                <Image source={item.icon} style={{ height: 30, width: 30 }} />
              </View>
              <Text style={{ fontSize: 14, marginTop: 8, color: isDark ? '#fafafa' : '#333' }}>{item.name}</Text>
            </View>
          )}
        />

        <View style={styles.transactionHeader}>
          <Text style={[styles.transactionTitle, { color: isDark ? '#fafafa' : '#000' }]}>Transactions</Text>
          <Text style={styles.sellAllText}>See All</Text>
        </View>

        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.transationView}
          renderItem={({ item }) => (
            <View style={styles.transaction}>
              <View style={[styles.transactionIconBackground, { backgroundColor: isDark ? '#1e1e2d' : '#eee' }]}>
                <Image source={item.icon} style={styles.transactionIcon} />
              </View>
              <View style={styles.transactionDetails}>
                <Text style={[styles.transactionName, { color: isDark ? '#fafafa' : 'black' }]}>{item.name}</Text>
                <Text style={[styles.transactionCategory, { color: isDark ? '#bbb' : '#888' }]}>{item.category}</Text>
              </View>
              <Text style={[styles.transactionAmount, { color: isDark ? 'white' : 'black' }]}>{item.amount}</Text>
            </View>
          )}
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  transactionHeader: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sellAllText: {
    fontSize: 14,
    color: "#007AFF",
  },
  transationView: {
    marginVertical: 20,
    width: '95%',
    alignSelf: 'center',
  },
  transaction: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  transactionIconBackground: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    borderRadius: 50,
    padding: 15,
    marginRight: 10,
  },
  transactionIcon: {
    width: 30,
    height: 30,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionCategory: {
    fontSize: 14,
    color: "#888",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Homepage;
