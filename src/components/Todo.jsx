import React from 'react'
import styled from 'styled-components'
import { Checkbox, Input, Button } from '@material-ui/core'

const TodoInput = styled(Input)`
  text-decoration: ${(props) => props.done && 'line-through'};
`
const TodoFlex = styled.div`
  display:flex;
  align-items:center;
`

export default function Todo(props) {
  const { todo, updateTodo, deleteTodo, setDone } = props
  return (
    <TodoFlex>
      <Checkbox
        onClick={() => setDone(todo.id)}
        checked={todo.done}
        fullWidth
      />
      <TodoInput
        onChange={(e) => updateTodo(todo.id, e.target.value)}
        done={todo.done}
        value={todo.content}
        multiline={true}
        fullWidth
      />
      <Button type="button" onClick={() => deleteTodo(todo.id)} color="secondary" variant="contained">
        Delete
      </Button>
    </TodoFlex>
  )
}
