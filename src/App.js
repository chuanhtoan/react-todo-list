import './App.css'
import Header from './components/Header'
import Todos from './components/Todos'
import { useState, useEffect } from 'react'
import db from './firebase'
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id, 
        todo: doc.data().todo,
        checked: doc.data().checked,
      })))
    })
  }, [])

  const addTodo = (e) => {
    e.preventDefault()

    if(input) {
      db.collection('todos').add({
        todo: input,
        checked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
    }

    setInput('')
  }

  const deleteTodo = (id) => {
    db.collection('todos').doc(id).delete()
  }

  const checkTodo = (id) => {
    db.collection('todos').doc(id).update({
      checked: !todos.find(todo => todo.id === id).checked
    })
  }

  return (
    <div className='App'>
      <Header 
        addTodo={addTodo} 
        input={input}
        setInput={setInput} 
      />
      <Todos 
        todos={todos}
        deleteTodo={deleteTodo} 
        checkTodo={checkTodo}
      />
    </div>
  );
}

export default App;
