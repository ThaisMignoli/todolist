import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { styles } from "./styles";

export type TaskDataProps = {
  text: string;
  isDone: boolean;
  id: string;
};

type Props = {
  data: TaskDataProps;
  onCheckPress: () => void;
  onTrashPress: () => void;
};

export default function Task({ data, onCheckPress, onTrashPress }: Props) {
  const [isTrashPressed, setIsTrashPressed] = useState(false);
  return (
    <View style={styles.container}>
      {data.isDone ? (
        <TouchableOpacity style={styles.checked} onPress={onCheckPress}>
          <FontAwesome5 name="check" size={9} color="#F2F2F2" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.unchecked} onPress={onCheckPress} />
      )}

      <Text style={data.isDone ? styles.checkedText : styles.text}>
        {data.text}
      </Text>

      <TouchableOpacity
        style={[
          styles.trashButton,
          isTrashPressed && { backgroundColor: "#333333" },
        ]}
        onPress={onTrashPress}
        onPressIn={() => setIsTrashPressed(true)}
        onPressOut={() => setIsTrashPressed(false)}
      >
        <Octicons
          name="trash"
          size={18}
          color={isTrashPressed ? "#E25858" : "#808080"}
        />
      </TouchableOpacity>
    </View>
  );
}
