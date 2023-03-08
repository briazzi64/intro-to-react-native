import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as Contacts from 'expo-contacts';
import * as Linking from 'expo-linking';

export default function App() {
  const [contact, onSetContact] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
            name: "Mom"
        });

        if (data.length > 0) {
          onSetContact(data[0])
        }
      }
    })();
  }, []);

  if (!contact) {
    return (
        <View style={styles.container}>
          <Text>Finding your special contact...</Text>
        </View>
      );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Did you wish your Mom a happy Cinco de Mayo?</Text>
      <Button onPress={() => Linking.openURL(`tel:${contact.phoneNumbers[0].number}`)} title="When did you last call your mom?"></Button>
      <Text style={styles.text}>Or what about ordering some food to celebrate?</Text>
      <View style={styles.buttonWrapper}>
        <Button onPress={() => Linking.openURL("https://www.doordash.com/")} title="Doordash"></Button>
        <Button onPress={() => Linking.openURL("https://www.ubereats.com/")} title="UberEats"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  text: {
    fontSize: 22,
    marginVertical: 15,
    textAlign: "center"
  },
  buttonWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-around',
  }
});
