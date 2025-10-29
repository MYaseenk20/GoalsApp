import { useState } from 'react';
import { StyleSheet, View,FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text: enteredGoalText,key:Math.random().toString()}])
  };

  function deleteGoalHandler(id){
      setCourseGoals((currentCourseGoals) =>
        {
      return currentCourseGoals.filter((goal) => goal.id !== id);
        } 
    )
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput addGoal ={addGoalHandler}/>
      <View style={styles.goalsContainers}>
        <FlatList data={courseGoals}  renderItem={(itemData) =>{
            return <GoalItem text={itemData.item.text}  id={itemData.item.id} onDeleteItem = {deleteGoalHandler} />;
        }}
        keyExtractor={(item,index) => {
          return item.id;
        }}
        /> 
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

  goalsContainers: {
    flex: 6,
  },
 
});
