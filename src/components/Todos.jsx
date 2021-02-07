import React from 'react'
import styled from 'styled-components'
import Todo from './Todo'

const TodosWrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat( auto-fill, minmax(250px, 1fr) );
`

export default function Todos({ deleteTodo, setDone, todos, updateTodo }) {
  return (
    <TodosWrapper>
      {todos.map((todo) => (
        <Todo
          deleteTodo={deleteTodo}
          setDone={setDone}
          todo={todo}
          updateTodo={updateTodo}
        />
      ))}
    </TodosWrapper>
  )
}
