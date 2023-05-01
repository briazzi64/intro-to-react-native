import { View, FlatList, StyleSheet, Pressable, Text } from 'react-native';

export default function Categories({categories, selectedCategory, setSelectedCategory}) {
  return (
    <View style={styles.categoryWrapper}>
      <FlatList
        horizontal={true}
        data={categories}
        renderItem={({item, index}) => (
          <Pressable
            style={[
              styles.categoryButton,
              selectedCategory === item ? styles.categoryButtonSelected : null,
              index === 0 ? { marginLeft: 0 } : { marginLeft: 10 }
            ]}
            onPress={() => setSelectedCategory(selectedCategory === item ? "" : item)}>
            <Text
              style={[
                styles.categoryButtonText,
                selectedCategory === item ? styles.categoryButtonTextSelected : null
              ]}>
              {item}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryWrapper: {
    marginBottom: 15,
  },
  categoryButton: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10
  },
  categoryButtonSelected: {
    backgroundColor: "#fff"
  },
  categoryButtonText: {
    color: "#fff",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 16
  },
  categoryButtonTextSelected: {
    color: "#3a3c55",
  }
});
