import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const textListStyle = { fontSize:26, lineHeight: 36 };

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'left', marginHorizontal:30 }}>
        <Text style={textListStyle}>1.　ヨーヨーすくい</Text>
        <Text style={textListStyle}>2.　わなげ</Text>
        <Text style={textListStyle}>3.　射的</Text>
        <Text style={textListStyle}>4.　魚釣り</Text>
        <Text style={textListStyle}>5.　ききヨーグルト</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>抽選</Text>
    </View>
  );
}

function RulesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ルール</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="屋台" component={HomeScreen} />
          <Tab.Screen name="抽選" component={SettingsScreen} />
          <Tab.Screen name="ルール" component={RulesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
