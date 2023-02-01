import React from 'react'
import { ListBox } from '../styles/style'
import TodoItem from './TodoItem'

function TodoItemList({ todos, setTodos, onDelete }) {
  return (
      <ListBox>
      <ul>
        {todos && //todos가 있을때만 출력
          todos.map((todo) => (  
            <TodoItem 
                key={todo.id}
                todos={todos}
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
