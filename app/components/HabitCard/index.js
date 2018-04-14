/*
  @flow
*/
import { Text, View } from 'react-native';
import React from 'react';
import style from './style';

const HabitCard = props => (
  <View style={style.container}>
    <Text style={style.cardTitle}>{props.title}</Text>
    <View>
      <Text>Weekly Calendar</Text>
    </View>
    {/* <Text>Reasons</Text>
    <Text>I am losing too much time sleeping</Text>
    <Text>Schedule</Text>
    <Text>Everyday except Sunday and Saturday</Text>
    <Text>Progress</Text>
    <View><Text>Graph</Text></View> */}
  </View>
);

export default HabitCard;
