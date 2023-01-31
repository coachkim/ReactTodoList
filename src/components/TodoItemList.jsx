import React from 'react'
import { ListBox } from '../styles/style'
import TodoItem from './TodoItem'

function TodoItemList({ todos, setTodos, onDelete }) {
  return (
      <ListBox>
      <ul>
        {todos && todos.map((todo) => (  
            <TodoItem 
                key={todo.id}
                todo={todo}
                setTodo={setTodos}
                onDelete={onDelete}
            />
        ))}
      </ul>
      </ListBox>
  )
}

export default TodoItemList
