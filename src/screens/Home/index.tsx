import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

import logo from "../../assets/logo.png";

export default function Home() {
  const [task, setTask] = useState<string>("");

  function handleAddTask() {
    console.log(task), setTask("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>

      <View style={styles.form}>
        <TextInput
          onChangeText={setTask}
          value={task}
          selectionColor="#F2F2F2"
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          style={[styles.input, { borderColor: task ? "#5E60CE" : "#0D0D0D" }]}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={handleAddTask}
        >
          <AntDesign name="pluscircleo" size={16} color="#F2F2F2" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
