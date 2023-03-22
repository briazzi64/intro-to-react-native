import { ScrollView, StyleSheet, Button } from 'react-native';

export default function Categories({categories, selectedCategory, setSelectedCategory}) {
  return (
    <ScrollView style={styles.scrollViewContainer} contentContainerStyle={styles.categoriesSection} horizontal={true}>
      {categories.map(function (category, index) {
        return (
          <Button key={index} title={category} color={selectedCategory === category ? "red" : "blue"} onPress={() => setSelectedCategory(category)} />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categoriesSection: {
    flexDirection: 'row',
    marginBottom: 15,
    height: 40,
    marginBottom: 20,
  }
});
