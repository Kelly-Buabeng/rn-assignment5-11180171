import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { useContext } from 'react';
import { ThemeContext } from '../components/theme';

const SettingsScreen = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const settingsOptions = [
    { id: '1', title: 'Language' },
    { id: '2', title: 'My Profile' },
    { id: '3', title: 'Contact Us' },
    { id: '4', title: 'Change Password' },
    { id: '5', title: 'Privacy Policy' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#161622' : '#fff' }]}>
      <FlatList
        data={settingsOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.optionContainer}>
            <Text style={[styles.optionText , {color: isDark ? '#fafafa' : '#161622'}]}>{item.title}</Text>
            <Icon name="chevron-forward" size={24} color={ isDark ? '#fafafa' : '#161622'} />
          </TouchableOpacity>
        )}
        ListFooterComponent={() => (
          <View style={styles.themeContainer}>
            <Text style={[styles.optionText, {color: isDark ? '#fafafa' : ''}]}>Theme</Text>
            <Switch value={isDark} onValueChange={toggleTheme} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    marginTop:40,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor:'gray'
  },
  optionText: {
    fontSize: 18,
    flex: 1,
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 20,
    paddingHorizontal: 10,
  },
});

export default SettingsScreen;