import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { DaysOfWeek, HabitCard } from './app/components';

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
    <DaysOfWeek />
    <ScrollView>
      <HabitCard title="Wake up early than 6 am" />
      <HabitCard title="Don't miss class" />
      <HabitCard title="One new recipe a week" />
      <HabitCard title="One pull request a week" />
      <HabitCard title="" />
      <HabitCard title="Daily production above the six" />
      <HabitCard title="2 liters of water a day" />
      <HabitCard title="One book per month" />
      <HabitCard title="One new movie a week" />
      <HabitCard title="One hour one daily knowledge" />
    </ScrollView>
  </View>
);

export default App;
