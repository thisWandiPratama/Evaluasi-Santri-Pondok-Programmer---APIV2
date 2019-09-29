import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from "react-native";

import Home from './pages/Home'

export default class App extends React.Component {
  state = {
    splash: true
  };
  render() {
    setTimeout(() => {
      this.setState({
        splash: false
      });
    }, 5000);

    if (this.state.splash) {
      return (
        <View style={{ alignItems: "center", paddingTop: 150 }}>
          <Image
            source={require("./assets/splash.png")}
            style={{ height: 150, width: 150 }}
          />
          <View style={{ alignItems: "center", paddingTop: 50 }}>
            <Text>Loading...</Text>
          </View>
        </View>
      );
    }
    return(
      <Home/>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
