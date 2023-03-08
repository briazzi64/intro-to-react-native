import { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

import Header from "./components/header/Header";
import MyStore from "./components/myStore/MyStore";
import Search from "./components/search/Search";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";

import Constants from 'expo-constants';

export default function App() {
  const [search, onChangeSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setProducts(products);

      const categories = [...new Set( products.map(product => product.category)) ];
      setCategories(categories);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <MyStore />
      <Search search={search} onChangeSearch={onChangeSearch} />
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory} />
      <Products products={products} selectedCategory={selectedCategory} search={search} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#3a3c55',
    padding: 10
  }
});
