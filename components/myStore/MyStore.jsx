import { useState } from "react";
import { Text, View, Pressable, Image, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import findClostestStore from "../../utils/findClosestStore";

export default function MyStore() {
  const [text, onSetText] = useState("Find the closest StirTrek conference!");
  const [userCoords, onSetUserCoords] = useState([]);

  async function getLocation() {
    onSetText("Getting your location...");
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      onSetText('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    onSetUserCoords([latitude, longitude]);

    const closestStore = findClostestStore(userCoords);
    onSetText(closestStore.name);
  }

  if (userCoords.length === 0) {
    return (
      <Pressable onPress={getLocation} style={styles.findMyStore}>
        <Image style={styles.storeLocatorIcon} source={require('../../assets/storeLocator.png')} />      
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.userCoords}>
      <Text style={styles.text}>Your lat/long is: {JSON.stringify(userCoords)}</Text>    
      <Text style={styles.text}>Your closest StirTrek is: {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  findMyStore: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 15
  },
  userCoords: {
    marginBottom: 15
  },
  text: {
    color: "#fff",
    fontSize: 16
  },
  storeLocatorIcon: {
    width: 30,
    height: 30,
    marginRight: 10
  }
});
