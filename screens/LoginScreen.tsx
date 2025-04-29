import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LoginScreen({navigation}: any) {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button 
             title='ingresar'
             onPress={ () => navigation.navigate("Drawer")} 
      />
    </View>
  )
}

const styles = StyleSheet.create({})