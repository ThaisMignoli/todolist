import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

export default function EmptyState() {
  return (
    <>
      <View style={styles.divider} />
      <Ionicons
        name="clipboard-outline"
        size={56}
        color="#383838"
        style={styles.image}
      />
      <Text style={[styles.text, styles.title]}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </>
  );
}
