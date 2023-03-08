import { ScrollView, StyleSheet, Button } from 'react-native';

export default function Categories({categories, selectedCategory, setSelectedCategory}) {
  return (
    <ScrollView contentContainerStyle={styles.categoriesSection} horizontal={true}>
      {categories.map(function (category, index) {
        return (
          <Button key={index} title={category} color={selectedCategory === category ? "#fff" : "transparent"} onPress={() => setSelectedCategory(category)} />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categoriesSection: {
    flexDirection: 'row',
    marginBottom: 15
  }
});
