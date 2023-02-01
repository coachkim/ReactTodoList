import React, { useEffect, useRef, useState } from 'react'
import { Container, Form, TextInput, InputBtn } from '../styles/style'


function TodoInsert({onSubmit}) {
    const [content, setContent] = useState("");
    const ref = useRef();

    const handleChange = (e) => {
        setContent(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content) return;
        onSubmit(content);
        setContent("");
    };

    useEffect(() => {
        ref.current.focus();
    }, []);
    
  return (
    <Container>
        <Form onSubmit={handleSubmit}>
        <TextInput
            ref={ref}
            type={"text"}
            placeholder="오늘 할 일"
            value={content}
            onChange={handleChange}
        />
        <InputBtn
            type="submit" 
            onClick={handleSubmit}
        >
        작성
        </InputBtn>
        </Form>
    </Container>
  )
}

export default TodoInsert