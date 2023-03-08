import { useState, useEffect } from "react";
import { View, Text, FlatList, Image, Pressable, StyleSheet } from 'react-native';

export default function Products({products, selectedCategory, search}) {
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  
  useEffect(() => {
    setProductsToDisplay(products);
  }, [products]);

  useEffect(() => {
    if (!selectedCategory && !search) {
      setProductsToDisplay(products);
      return;
    }

    let filteredProducts = [...products];
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    if (search) {
      filteredProducts = filteredProducts.filter(product => product.title.includes(search));
    }

    setProductsToDisplay(filteredProducts);
  }, [selectedCategory, search]);

  const renderProduct = ({item}) => (
    <Pressable style={styles.productWrapper} onPress={() => alert(`${item.title} Pressed`)}>
      <Image style={styles.productImage} source={{uri: item.image}} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={productsToDisplay}
      renderItem={item => renderProduct(item)}
    />
  );
}

const styles = StyleSheet.create({
  productWrapper: {
    flexDirection: "row",
    marginBottom: 15,
    borderColor: "#fff",
    borderWidth: 1
  },
  productImage: {
    width: 125,
    height: 125,
    marginRight: 10
  },
  productInfo: {
    flex: 1,
    paddingVertical: 10
  },
  productTitle: {
    color: "#fff",
  },
  productPrice: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10
  }
});
