import React, { useContext } from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { ThemeContext,ThemeProvider } from './components/theme';
import Homepage from './pages/homepage';
import Settings from './pages/settings';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { isDark } = useContext(ThemeContext);
  const theme = isDark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconPath;
            if (route.name === 'Home') {
              iconPath = require('./assets/home.png');
            } else if (route.name === 'My Cards') {
              iconPath = require('./assets/Card.png');
            } else if (route.name === 'Statistics') {
              iconPath = require('./assets/statictics.png');
            } else if (route.name === 'Settings') {
              iconPath = require('./assets/settings.png');
            }
            return (
              <Image
                source={iconPath}
                style={[styles.icon, { tintColor: color, width: size, height: size }]}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: isDark ? 'white' : 'blue',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: isDark ? '#161622' : '',
          },
        }}
      >
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen name="My Cards" component={Homepage} />
        <Tab.Screen name="Statistics" component={Homepage} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  icon: {
    resizeMode: 'contain',
  },
});

export default App;