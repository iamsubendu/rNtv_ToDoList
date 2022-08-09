import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [entrdTxt, setEntrdTxt] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInptHandler = (text) => {
    setEntrdTxt(text);
  };
  const addGoalHandler = () => {
    // setCourseGoals([...courseGoals, entrdTxt]);
    // setCourseGoals((courseGoals) => [...courseGoals, entrdTxt]);
    setCourseGoals((courseGoals) => [
      ...courseGoals,
      // FlatList works more better if it have a key
      // { text: entrdTxt, key: Math.random().toString() },
      { text: entrdTxt, id: Math.random().toString() },
    ]);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputCont}>
        <TextInput
          placeholder="Your course goal"
          style={styles.txtInput}
          //onChangeText={goalInptHandler()} => this will execute as app starts
          onChangeText={goalInptHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalCont}>
        {/* <ScrollView>
          {courseGoals.map((goal) => (
            // add view before text otherwise rounded corners
            // of style wont be added for ios
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    width: '100%',
  },
  inputCont: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  txtInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalCont: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    //in native child dont get affected by their parents
    color: 'white',
  },
});
