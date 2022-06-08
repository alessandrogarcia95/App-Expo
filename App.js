import React, { } from 'react';
import { StyleSheet, View,FlatList } from 'react-native';
import ToDo from './components/ToDo';
import TodoInput from './components/ToDoInput';
export default class App extends React.Component {
  state = {
    todoList: []
  }
  
  //elimina todo
  /*eliminaTodo = (id) =>{
    this.setState({
      todoList: this.state.todoList.filter(to => to.id !== id)
    
    })
  }*/
  //trim toglie spazi vuoti
  aggiungiTodo = (value) => {
    if (value.trim() === "") {
      alert("Inserisci testo")
      return
    }
    this.setState(statoIniziale => {
      return {
        todoList: statoIniziale.todoList.concat({ value: value, id: Math.random().toString() })
      }
    })
    //svuotare dopo l'invio
    this.setState({ value: '' })
  }
  render() {
    return (
      <View>
        <TodoInput aggiungi={this.aggiungiTodo}/>
        <FlatList
          data={this.state.todoList}
          renderItem={item =>
          <ToDo title={item.item.value}>
          </ToDo>} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  
});