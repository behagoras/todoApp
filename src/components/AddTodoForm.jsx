import { Input } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

const AddTodoInput = styled(Input)`
  margin-bottom: 16px;
`
export default function AddTodoForm({ addTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ value: e.target.todo.value })
    const { value } = e.target.todo
    addTodo(value)
    e.target.todo.value = ''
  }
  return (
    <form onSubmit={handleSubmit}>
      <AddTodoInput
        type="text"
        name="todo"
        placeholder="Agrega una tarea"
        fullWidth
      />
    </form>
  )
}
