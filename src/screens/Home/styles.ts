import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
  },
  header: {
    backgroundColor: "#0D0D0D",
    height: 170,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    flexDirection: "row",
    position: "absolute",
    marginTop: 143,
    marginHorizontal: 24,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: "#262626",
    color: "#F2F2F2",
    fontSize: 16,
    borderRadius: 6,
    padding: 16,
    borderWidth: 1,
  },
  button: {
    width: 52,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    marginLeft: 4,
  },
  content: {
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 24,
  },
  progress: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
