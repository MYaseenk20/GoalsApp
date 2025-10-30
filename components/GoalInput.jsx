import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import { useState } from "react";
function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    };

    function addGoalHandler() {
        props.addGoal(enteredGoalText);
        setEnteredGoalText('')
    }

    return (
        <Modal visible={props.isVisible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textinput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.isCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        padding : 16,
        borderBottomColor: '#cccccc'
    },
    textinput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        marginRight: 8,
        padding: 8,
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    button : {
        width : '40%',
        marginHorizontal : 8,
        marginVertical : 8,
    }
})