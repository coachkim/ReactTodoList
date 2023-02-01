import React, { useEffect, useRef, useState } from 'react'
import { DelteBtn, EditBtn } from '../styles/style'

function TodoItem({ todo, todos, onDelete, setTodo }) {
  const { id, text } = todo;
  const [edited, setEdited] = useState(false);
  const [newText, setNewText] = useState(text);
  const editInputRef = useRef();
  const onClickEditBtn = () => {
    setEdited(true);
  }  
  const onChangeEditInput = (e) => {
    setNewText(e.target.value);
  }
  const onClickSubmitBtn = () => {
    const editedTodoList = todos.map((item) => ({
      ...item, 
        text: item.id === id ? newText : text
    }));
    setTodo(editedTodoList);
    setEdited(false);
  }
  
  useEffect(() => {
    if(edited) {
      editInputRef.current.focus();
    }
  }, [edited])

  return (
    <div style={{display: "flex", marginBottom: "10px"}}>
        {/* 체크박스 클릭하면 내용 부분 줄 그어지게 */}
      <input 
        style={{marginRight: "10px"}}
        type={"checkbox"} 
        />
      {!edited ? (
        <div style={
          {border: "1px solid", padding: "10px", marginRight: "10px"}}>
          {text}
        </div>) : (
        
          <input
          type={"text"}
          placeholder={text}
          value={newText}
          ref={editInputRef}
          onChange={onChangeEditInput}
        />
        
        )
      }
      {!edited ? (
        <EditBtn onClick={onClickEditBtn}>
          수정
        </EditBtn> ) : (
        <EditBtn onClick={onClickSubmitBtn}>
          완료
        </EditBtn>
      )}
      <DelteBtn onClick={()=>onDelete(id)} >삭제</DelteBtn>
    </div>
  )
}

export default TodoItem
