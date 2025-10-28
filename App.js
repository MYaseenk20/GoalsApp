import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  };
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText])
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textinput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainers}>
        <ScrollView >
          {courseGoals.map((item) => (
            <View style={styles.goalText} key={item}>
              <Text style={{ color: 'white' }} >{item}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textinput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainers: {
    flex: 6,
  },
  goalText: {
    backgroundColor: '#5e0acc',
    color: '#ffffff',
    borderRadius: 6,
    padding: 8,
    margin: 6
  }
});
