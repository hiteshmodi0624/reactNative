import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = (props) => {
  const [currInput, manageInput] = useState("");
  const goalInputHandler = (enteredText) => {
    manageInput(enteredText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(currInput);
    manageInput("");
  };
  return (
    <Modal visible={props.modalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          onChangeText={goalInputHandler}
          placeholder="Your course goal!"
          style={styles.textInput}
          value={currInput}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button onPress={props.closeModal} title="Cancel" color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    width: "100%",
    padding: 16,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    borderRadius: 6,
    marginTop: 16,
    borderRadius: 6,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
