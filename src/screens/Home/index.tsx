import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import uuid from "react-native-uuid";

import { styles } from "./styles";

import logo from "../../assets/logo.png";
import Counter from "../../components/Counter";
import Task, { TaskDataProps } from "../../components/Task";
import EmptyState from "../../components/EmptyState";

export default function Home() {
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<TaskDataProps[]>([]);

  const createdAmount = taskList.filter((task) => task.isDone === false).length;
  const doneAmount = taskList.filter((task) => task.isDone === true).length;

  function handleAddTask() {
    if (!task) return;
    setTaskList((prevState) => [
      ...prevState,
      {
        text: task,
        isDone: false,
        id: String(uuid.v4()),
      },
    ]);
    setTask("");
  }

  function handleDeleteTask(id: string) {
    Alert.alert("Excluir", "Deseja excluir a tarefa?", [
      {
        text: "Sim",
        onPress: () =>
          setTaskList((prevState) =>
            prevState.filter((task) => task.id !== id)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleCheck(id: string) {
    setTaskList((prevState) =>
      prevState.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isDone: !task.isDone,
          };
        }
        return task;
      })
    );
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

      <View style={styles.content}>
        <View style={styles.progress}>
          <Counter title="Criadas" color="#4EA8DE" value={createdAmount} />
          <Counter title="Concluídas" color="#8284FA" value={doneAmount} />
        </View>

        <FlatList
          data={taskList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Task
              data={item}
              onCheckPress={() => handleCheck(item.id)}
              onTrashPress={() => handleDeleteTask(item.id)}
            />
          )}
          ListEmptyComponent={<EmptyState />}
        />
      </View>
    </View>
  );
}
