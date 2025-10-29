import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this,props.id)}>
      <View style={styles.goalText}>
        <Text style={{ color: 'white' }} >{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalText: {
    backgroundColor: '#5e0acc',
    color: '#ffffff',
    borderRadius: 6,
    padding: 8,
    margin: 6
  }
});