/* eslint-disable react/react-in-jsx-scope */
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState, useId } from "react";
import TaskInput from "./components/TaskInput";
// import img from './assets/images/task.png'

export default function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [id, setId] = useState(useId());
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // React 18 => useId()
  const key = useId();

  function addTaskHandler(enteredText) {
    if (enteredText) {
      setId(key);
      // setAllTasks([...allTasks, enteredText]);
      // id : id
      setAllTasks((currentTasks) => [
        ...currentTasks,
        { id, task: enteredText },
      ]); // {key: uid, text: "Learn RN"}
    } else {
      Alert.alert("Warning 🚨", "Please enter your task !", [
        {
          text: "Sorry",
          style: "destructive",
        },
      ]);
      /*
      Alert prompt prend un titre, message 
      et une fonction pour récupérer le texte saisie
      Quand l'utilisateur presse sur "ok"
      Alert.prompt("Hello, world", "Where are you?", (text) =>
        console.log(text)
      );
      */
    }
  }

  function modalHandler() {
    // true => !true = false
    setModalIsVisible(!modalIsVisible);
  }

  return (
    <View style={styles.container}>
      {/* <TaskInput addTaskHandler={addTaskHandler} /> */}
      {/* Display all Tasks */}
      {/* <ScrollView>
        <View>
          {allTasks.map((task, index) => (
            <Text key={index}>{task} </Text>
          ))}
        </View>
      </ScrollView> */}
      {/* Button Add  */}
      <Button color={"#FFBD59"} title="Add New Task" onPress={modalHandler} />

      {/* Modal with TextInput */}
      <TaskInput
        addTaskHandler={addTaskHandler}
        modalIsVisible={modalIsVisible}
        modalHandler={modalHandler}
      />

      {/* Display all tasks */}
      <View style={styles.tasksContainer}>
        <FlatList
          data={allTasks}
          renderItem={(itemData) => (
            <View style={styles.taskItem}>
              <Text style={styles.taskText}>
                {itemData.index + 1} • {itemData.item.task}{" "}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          ListEmptyComponent={
            <Text style={styles.emptyText}>You don't have yet a task</Text>
          }
          //horizontal={true}
          //onEndReached={() => console.log('New Data')}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    paddingTop: 60,
    // paddingLeft: 16,
    // paddingRight: 16,
    paddingHorizontal: 16,
  },
  tasksContainer: {
    flex: 5,
    marginTop: 20,
  },
  taskItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5762B7",
  },
  taskText: {
    color: "#fff",
  },
  emptyText: {
    color: "#fff",
    textAlign: "center",
  },
});

/*
padding-left: 16px;
padding-right: 16px;
padding-inline: 16px;

padding-top: 16px;
padding-bottom: 16px;
padding-block: 16px;
*/
