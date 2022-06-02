import React from 'react'
import styled from 'styled-components'
import AddTodoForm from './components/AddTodoForm'
import Todos from './components/Todos'

const Wrapper = styled.div`
  padding: 16px;
`

const Subtitle = styled.h2`
  padding-bottom:0;
  margin-bottom:0;
`

function App() {
  const [todos, setTodos] = React.useState([])
  const addTodo = (value) => setTodos([...todos, {
    id: new Date(),
    done: false,
    content: value,
  }])
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id))
  }
  const setDone = (id) => setTodos(todos.map((t) => (
    t.id === id ?
      { ...t, done: !t.done } :
      t
  )))
  const updateTodo = (id, content) => setTodos(todos.map((t) => (
    t.id === id ?
      { ...t, content } :
      t
  )))

  return (
    <Wrapper>
      <h1>Mi lista de tareas</h1>
      <Subtitle>Agrega una tarea</Subtitle>
      <AddTodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        setTodos={setTodos}
        deleteTodo={deleteTodo}
        setDone={setDone}
        updateTodo={updateTodo}
      />
      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
    </Wrapper>
  )
}

export default App
