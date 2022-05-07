import React from 'react';
import { View,Text } from 'react-native';

import { styles } from './style';

export function Copyright() {
  return (
    <View>
      <Text style={styles.text}>Feito com amor pelo Erick</Text>
    </View>
  );
}