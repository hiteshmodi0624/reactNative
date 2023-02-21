import { StatusBar } from "expo-status-bar";
import { Fragment, useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modalVisible, manageModal] = useState(false);
  const [list, manageList] = useState([]);
  const onPressHandler = (currInput) => {
    manageList((prev) => [
      ...prev,
      { text: currInput, id: Math.random().toString() },
    ]);
    manageModal(false);
  };
  const deleteGoalHandler = (id) => {
    manageList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };
  const startAddGoalHandler = () => {
    manageModal(true);
  };
  const endAddGoalHandler = () => {
    manageModal(false);
  };
  return (
    <Fragment>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          color="#b180f0"
          title="Add New Goal"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={onPressHandler}
          modalVisible={modalVisible}
          closeModal={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={list}
            alwaysBounceVertical="false"
            keyExtractor={(item, index) => item.id}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
