import { StyleSheet, View, TextInput, Button, Modal,Image } from "react-native";
import { useState } from "react";
function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    };

    function addGoalHandler() {
        if(enteredGoalText.trim().length == 0){
            alert('Please enter a goal before adding!')
            return ;
        }
        props.addGoal(enteredGoalText);
        setEnteredGoalText('')
    }

    return (
        <Modal visible={props.isVisible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image 
                style = {styles.image} 
                source={require('../assets/images/goal.png')}
                // source={require('../assets/images/goaasfdl.png')}
                />
                <TextInput
                    style={styles.textinput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color='#5e0acc' />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.isCancel} color='#f31282'/>
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
        borderBottomWidth: 1,
        padding : 24,
        backgroundColor : '#311b6b'
    },
    textinput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color : '#120438',
        borderRadius : 6,
        width: '100%',
        marginRight: 8,
        padding: 16,
        
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    button : {
        width : '40%',
        marginHorizontal : 8,
        marginVertical : 8,
    },
    image : {
        width : 100,
        height : 100,
        margin : 20
    }
})