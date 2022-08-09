import { Text, View, StyleSheet, Pressable } from 'react-native';

const GoalItem = (props) => {
  return (
    // .bind => allows preconfigure a fn. for future execution
    //  The bind() method allows an object to borrow a method from another object
    // without making a copy of that method.
    // This is known as function borrowing in JavaScript.
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        android_ripple={{ color: '#210644' }}
        // for ios
        style={({ pressed }) => pressed && styles.presssedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  presssedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});
