import { useState } from 'react';
import { StyleSheet, View,FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible,setModalVisible] = useState(false);

  function setModalVisibleHandler(){
    setModalVisible(true);
  };

  function hideModalHandler(){
    setModalVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text: enteredGoalText,id:Math.random().toString()}])
    hideModalHandler()
  };

  function deleteGoalHandler(id){
      setCourseGoals((currentCourseGoals) =>
        {
      return currentCourseGoals.filter((goal) => goal.id !== id);
        } 
    )
  }
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#5e0acc' onPress={setModalVisibleHandler}/>
      <GoalInput addGoal ={addGoalHandler} isVisible={isModalVisible} isCancel = {hideModalHandler}/>
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
  },

  goalsContainers: {
    flex: 6,
  },
 
});
