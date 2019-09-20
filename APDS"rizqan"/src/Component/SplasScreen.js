import React, { Component } from 'react'
import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  ActivityIndicator
} from 'react-native'
import Route from '../Route/index'

const { width: WIDTH } = Dimensions.get('window')
export default class SplasScreen extends React.Component {
  state = {
    role: true
  }


  render () {
    setTimeout(() => {
      this.setState({
        role: false
      })
    }, 500)
    if (this.state.role) {
      return (
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require('../image/background-utul-ugm-2-300x300.jpg')}
            style={{ width: '100%', height: '100%' }}
          >
            <View
              style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
            >
              <Text style={{ fontSize: 20, marginBottom:15 }}>DAFTAR SISWA-SIWSI</Text>
              <ActivityIndicator
              size="large"
              color="#00ffff" />
              <Text>loading...</Text>
            </View>
          </ImageBackground>
        </View>
      )
    }
    
    return(<Route />) 
  }
}
