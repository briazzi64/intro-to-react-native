import { View, FlatList, Button } from 'react-native';

export default function Categories({categories, selectedCategory, setSelectedCategory}) {
  return (
    <View>
      <FlatList
        horizontal={true}
        data={categories}
        renderItem={({item, index}) => (
          <Button key={index} title={item} color={selectedCategory === item ? "red" : "blue"} onPress={() => setSelectedCategory(item)} />
        )}>
      </FlatList>
    </View>
  );
}
