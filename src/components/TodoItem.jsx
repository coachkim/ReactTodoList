import React from 'react'
import { DelteBtn } from '../styles/style'

function TodoItem({ todo, onDelete }) {
    
  return (
    <div style={{display: "flex", marginBottom: "10px"}}>
        {/* 체크박스 클릭하면 내용 부분 줄 그어지게 */}
      <input 
        style={{marginRight: "10px"}}
        type={"checkbox"} 
        />
      <div style={
        {border: "1px solid", padding: "10px", marginRight: "10px"}}>
        {todo.text}
      </div>
      <DelteBtn onClick={()=>onDelete(todo.id)} >삭제</DelteBtn>
    </div>
  )
}

export default TodoItem
