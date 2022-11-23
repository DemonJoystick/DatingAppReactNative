import {React} from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,TextInput,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inputs from './inputs.js'

function SignupScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.titleText}>HoneY</Text>
        <Text style={styles.bodyText}>Bee Mine</Text>
        <Button
          title="Sign up"
          onPress={() => navigation.navigate('Final')}
        />
      </View>
    );
  }

  export default SignupScreen

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fffaaa',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText: {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom:20
    },
    bodyText: {
      fontSize: 15,
      color:'yellow',
      fontWeight: "bold"
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });