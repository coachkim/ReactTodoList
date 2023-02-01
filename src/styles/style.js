import styled from "styled-components";

const Container = styled.div`
    margin-top: 20px;
`
const Form = styled.form`
    
`
const TextInput = styled.input`
    border-radius: 10px;
    height: 50px;
    width: 250px;
    border: none;
`
const InputBtn = styled.button`
    margin-left: 10px;
    width: 50px;
    height: 30px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    color: #ffffff;
    font-size: 1em;
    font-weight: 400;
    background: linear-gradient(to right, #e55d87, #5fc3e4);
    box-shadow: 0 2px 25px rgba(229, 93, 135, 0.5);
`
const ListBox = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 10px;
`
const DelteBtn = styled.button`
    width: 50px;
    height: 30px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    color: #ffffff;
    font-size: 1em;
    font-weight: 400;
    background: linear-gradient(to right, #e55d87, #5fc3e4);
    box-shadow: 0 2px 25px rgba(229, 93, 135, 0.5);
`
const EditBtn = styled.button`
    width: 50px;
    height: 30px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    color: #ffffff;
    font-size: 1em;
    font-weight: 400;
    background: linear-gradient(to right, #e55d87, #5fc3e4);
    box-shadow: 0 2px 25px rgba(229, 93, 135, 0.5);
    margin-right: 10px;
    margin-left: 10px;
`
export { Container, Form, TextInput, InputBtn, ListBox, DelteBtn, EditBtn }