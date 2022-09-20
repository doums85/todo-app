import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Image,
} from "react-native";

export default function TaskInput(props) {
  const [enteredTask, setEnteredTask] = useState("");
  const taskInputHandler = (enteredText) => setEnteredTask(enteredText);

  function onPressHandler() {
    props.addTaskHandler(enteredTask);
    props.modalHandler();
  }

  return (
    <Modal visible={props.modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        {/* IMAGE */}
        <Image
          style={styles.image}
          source={require("../assets/images/task.png")}
        />
        {/* TextInput */}
        <TextInput
          style={styles.textInput}
          onChangeText={taskInputHandler}
          placeholder={"You Task..."}
          placeholderTextColor="#fff"
        />

        {/* BUTTONS */}
        <View style={styles.containerButtons}>
          <View style={styles.button}>
            <Button
              color={"#FFBD59"}
              title="Cancel"
              onPress={props.modalHandler}
            />
          </View>

          <View style={styles.button}>
            <Button title="Add Task" onPress={onPressHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: "#31356E",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: 80,
    height: 80,
    margin: 20,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#5762B7",
    backgroundColor: "#5762B7",
    borderRadius: 6,
    padding: 8,
    marginRight: 8,
    color: "#fff",
  },
  containerButtons: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
