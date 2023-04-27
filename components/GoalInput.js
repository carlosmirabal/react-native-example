import {useState} from "react";
import {Button, TextInput, View, StyleSheet, Modal} from "react-native";

export default function GoalInput(props) {
  const [goal, setGoal] = useState("");

  function goalInputHandler(value) {
    setGoal(value);
  }

  function addGoal() {
    if (goal !== "") {
      props.onAddGoal(goal);
      setGoal("");
    }
  }

  function cancel() {
    setGoal("");
    props.onHidden();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput value={goal} style={styles.textInput} placeholder="Your course goals!" onChangeText={goalInputHandler} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
    marginTop: 16,
  },
});
