import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    marginRight: 8,
  },
  value: {
    backgroundColor: "#333333",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 2,
    justifyContent: "center",
  },
  valueText: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "bold",
  },
});
