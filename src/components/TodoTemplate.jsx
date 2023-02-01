import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import TodoInsert from './TodoInsert'
import TodoItemList from './TodoItemList'

function TodoTemplate() {
    const [todos, setTodos] = useState([
        {
          id : 1,
          text : '리액트 기초 알아보기',
        },
        {
          id : 2,
          text : '컴포넌트 스타일링 하기',
        }
      ])

    const nextId = useRef(3);

    const handleSubmit = (text) => {
        const todo = {
            id: nextId.current,
            text,
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
    };
    const onDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    
    console.log(todos);
    return (
        <Container>
            <TodoBox>
            <Text>Todo-List</Text>
            <TodoInsert onSubmit={handleSubmit} />
            <TodoItemList 
                todos={todos}
                setTodos={setTodos}
                onDelete={onDelete}
                />
            </TodoBox>
        </Container>
  )
}

export default TodoTemplate

const Container = styled.div`
    background-color: #9b9797;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
`
const TodoBox = styled.div`
    width: 1000px;
    height: 800px;
    margin: 100px auto 100px;
    background-color: #dbd5d5;
`
const Text = styled.div`
    font-size: 60px;
    border-bottom: 1px solid;
    padding: 10px;
`