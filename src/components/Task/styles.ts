import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#262626",
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 8,
    minHeight: 64,
    padding: 12,
    marginBottom: 8,
  },
  unchecked: {
    height: 18,
    width: 18,
    borderWidth: 1.5,
    borderColor: "#4EA8DE",
    borderRadius: 999,
    marginRight: 12,
  },
  checked: {
    alignItems: "center",
    justifyContent: "center",
    height: 18,
    width: 18,
    backgroundColor: "#5E60CE",
    borderRadius: 999,
    marginRight: 12,
  },
  text: {
    flex: 1,
    color: "#F2F2F2",
    fontSize: 14,
    lineHeight: 20,
  },
  checkedText: {
    flex: 1,
    color: "#808080",
    fontSize: 14,
    textDecorationLine: "line-through",
  },
  trashButton: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginLeft: 8,
  },
});
