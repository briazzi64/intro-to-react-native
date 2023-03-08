import { View, ScrollView, StyleSheet, Pressable, Text } from 'react-native';

export default function Categories({categories, selectedCategory, setSelectedCategory}) {
  return (
    <View style={styles.categoryWrapper}>
      <ScrollView contentContainerStyle={styles.categoriesContainer} horizontal={true}>
        {categories.map(function (category, index) {
          return (
            <Pressable
              key={index}
              style={selectedCategory === category ? {...styles.categoryButtonSelected, ...styles.categoryButton} : styles.categoryButton}
              onPress={() => setSelectedCategory(selectedCategory === category ? "" : category)}>
              <Text
                style={selectedCategory === category ? {...styles.categoryButtonText, ...styles.categoryButtonTextSelected} : styles.categoryButtonText}>
                  {category}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  categoryWrapper: {
    marginBottom: 15,
  },
  categoriesContainer: {
    flexDirection: 'row',
  },
  categoryButton: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
    marginRight: 10,
    height: 45
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
