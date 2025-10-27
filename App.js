import { StyleSheet, Text, View,TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
          <TextInput style={styles.textinput} placeholder='Your course goal!'/>
          <Button title='Add Goal'/>
      </View>
      <View>
        <Text>List of goals </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer : {
    padding : 20
  },
  inputContainer :{
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  textinput : {
    borderWidth : 1,
    borderColor : '#cccccc',
    width : '80%',
    marginRight:8,
    padding:8,
  }
});
