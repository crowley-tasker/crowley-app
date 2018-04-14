import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import HabitCard from './app/components/HabitCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
});

const App = () => (
  <View style={styles.container}>
    <ScrollView>
      <HabitCard title="Wake up early than 6 am" />
      <HabitCard title="Don't miss class" />
      <HabitCard title="Don't miss class" />
      <HabitCard title="Don't miss class" />
      <HabitCard title="Don't miss class" />
      <HabitCard title="Don't miss class" />
    </ScrollView>
  </View>
);

export default App;
