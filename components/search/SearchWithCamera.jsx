import { View, StyleSheet, TextInput, Image } from 'react-native';

export default function Search({search, onChangeSearch}) {
  return (
    <View style={styles.searchSection}>
      <Image style={styles.searchIcon} source={require('../../assets/search.png')} />
      <TextInput style={styles.searchInput} onChangeText={onChangeSearch} value={search} placeholder="Search" placeholderTextColor="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 15
  },
  searchIcon: {
    height: 20,
    width: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: "#fff",
    fontSize: 16
  },
});
