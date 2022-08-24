import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

type Props = {
  title: string;
  color: string;
  value?: number;
};

export default function Counter({ title, color, value = 0 }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color }]}>{title}</Text>
      <View style={styles.value}>
        <Text style={styles.valueText}>{value}</Text>
      </View>
    </View>
  );
}
