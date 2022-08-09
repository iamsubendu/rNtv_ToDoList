import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Modal,
  Image,
} from 'react-native';
import { useState } from 'react';

const GoalInput = (props) => {
  const [entrdTxt, setEntrdTxt] = useState('');
  const goalInptHandler = (text) => {
    setEntrdTxt(text);
  };
  const addGoalHndlr = () => {
    props.onAddGoalHandler(entrdTxt);
    setEntrdTxt('');
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputCont}>
        <Image source={require('../assets/images/33.png')} style={styles.img} />
        <TextInput
          placeholder="Your course goal"
          style={styles.txtInput}
          onChangeText={goalInptHandler}
          value={entrdTxt}
        />
        <View style={styles.btnCont}>
          <View style={styles.btn}>
            <Button title="Add Goal" onPress={addGoalHndlr} color="#b180f0" />
          </View>
          <View style={styles.btn}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e4cfbc',
  },
  txtInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    color: '#120438',
    width: '100%',
    padding: 16,
  },
  btnCont: {
    marginTop: 16,
    flexDirection: 'row',
  },
  btn: {
    width: 100,
    marginHorizontal: 8,
  },
  img: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
