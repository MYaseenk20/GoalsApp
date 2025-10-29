import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";
function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')
    
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    };

    function addGoalHandler(){
        props.addGoal(enteredGoalText);
        setEnteredGoalText('')
    }

    return (<View style={styles.inputContainer}>
        <TextInput
            style={styles.textinput}
            placeholder='Your course goal!'
            onChangeText={goalInputHandler}
            value={enteredGoalText}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
    </View>);
}

export default GoalInput;

const styles = StyleSheet.create({
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

})