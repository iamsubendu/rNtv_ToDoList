import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const addGoalHandler = (entrdTxt) => {
    setCourseGoals((courseGoals) => [
      ...courseGoals,
      { text: entrdTxt, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };
  const delGoalHandler = (id) => {
    setCourseGoals((courseGoals) => {
      // filter will drop the false one
      return courseGoals.filter((goal) => goal.id !== id);
    });
  };
  const startAddGoalHandler = () => {
    setModalVisible(true);
  };
  const endAddGoalHandler = () => {
    setModalVisible(false);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoalHandler={addGoalHandler}
          visible={modalVisible}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalCont}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={delGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalCont: {
    flex: 5,
  },
});
