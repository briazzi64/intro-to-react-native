

import { View, Image, StyleSheet, Text } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>
            StirTrek Shop
        </Text>
        <Image style={styles.logo} source={require('../../assets/icon.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginVertical: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#fff",
  },
  logo: {
    height: 35,
    width: 22
  }
});
