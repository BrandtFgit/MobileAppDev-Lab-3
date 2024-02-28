/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';


function App() 
{
  const [tasks, setTasks] = useState(['Do laundry','Go to gym','Walk dog']);

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
