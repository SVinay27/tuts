import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native'


const Spinner = () => {
    return (
        <View style={styles.container}>
          
          <ActivityIndicator size="large" color="#9754F9" />
          
        </View>
    )
}

export default Spinner

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  }
})
