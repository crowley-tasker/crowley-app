import { Text, View } from 'react-native';
import React from 'react';
import style from './style';

const days = {
  en: ['SUN', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
  pt_br: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
};

const DaysOfWeek = () => (
  <View style={style.container}>
    <Text>{days.pt_br.join(' | ')}</Text>
  </View>
);

export default DaysOfWeek;
