// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './components/Header';
import Category from './components/Category';
import OngoingTask from './components/OngoingTask';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Category />
        <OngoingTask />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF3EB',
    padding: 10,
  },
});
