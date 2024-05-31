import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const categories = [
  { id: '1', name: 'Exercise', tasks: 12, image: require('../assets/study1.png') },
  { id: '2', name: 'Study', tasks: 12, image: require('../assets/exercise1.png') },
  { id: '3', name: 'Code', tasks: 8, image: require('../assets/code.jpg') },
  { id: '4', name: 'Cook', tasks: 5, image: require('../assets/cook1.png') },
  { id: '5', name: 'Read', tasks: 7, image: require('../assets/read1.jpg') },
  { id: '6', name: 'Shop', tasks: 3, image: require('../assets/shop1.png') },
  { id: '7', name: 'Clean', tasks: 4, image: require('../assets/clean1.png') },
  { id: '8', name: 'Travel', tasks: 6, image: require('../assets/travel2.png') },
];

const Category = () => {
  return (
    <View style={styles.categorySection}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <View style={styles.categoryCard}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{item.name}</Text>
            <Text style={styles.categoryTasks}>{item.tasks} Tasks</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categorySection: {
    marginBottom: 20,
    fontFamily: "poppins",
    padding: 10,
  },
  sectionTitle: {
    fontFamily:"poppins",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  categoryImage: {
    width: 160,
    height: 160,
    marginLeft: 30,
    marginBottom: 5,
    objectFit:"contain",
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    position:"absolute",
    marginRight: 130,
  },
  categoryTasks: {
    color: 'gray',
    position:"absolute",
    marginTop: 25,
    marginRight: 130,
  },
});

export default Category;
