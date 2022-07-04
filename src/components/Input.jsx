import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate, } from 'react-router-dom';
import TokenContext from '../contexts/TokenContext.js';
import UserContext from '../contexts/UserContext.js';


function sendData(price,name,setDisable, token, navigate){
    setDisable(true);
    const config = {
        Headers: {
            token: `Bearer ${token}`
        }
    }
    const body = {
        price,
        name,
        type:'input'
    }
    axios.post("URL",body,config).then((r)=>{
        console.log(r);
        navigate('/general');
    }).catch((r)=>{
        console.log(r);
        console.log('deu ruim');
    })
}
export default function Input() {
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');
    const [disable,setDisable]= useState(false);
    const {token} = useContext(TokenContext);
    const navigate = useNavigate();
    return (
        <InputTag>
            <div>Nova entrada</div>
            <FormTag onSubmit={()=>sendData(price,name,setDisable, token, navigate)}>
                <input type="text" value={price} placeholder='Valor' required onChange={(e) => setPrice(e.target.value)} />
                <input type="text" value={name} placeholder='Descrição' required onChange={(e) => setName(e.target.value)} />
                <button disabled={disable} type='submit'>Salvar entrada</button>
            </FormTag>
        </InputTag>
    );
}

const InputTag = styled.div`
    font-family: 'Raleway', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 326px;
    height: 100%;
    padding-top: 10px;
    > *:nth-child(1){
        font-size: 26px;
        font-weight: 700;
        line-height: 31px;
        letter-spacing: 0em;
        text-align: left;
        color:white;
        margin-bottom: 20px;
    }
    input{
        height: 58px;
        width: 326px;
        left: 25px;
        top: 96px;
        border-radius: 5px;
        color: black;
        padding: 10px;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;

    }
    button{
        height: 46px;
        width: 326px;
        left: 25px;
        top: 238px;
        border-radius: 5px;
        color:white;
        background-color: #A328D6;
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0em;
        border: none;

    }
`
const FormTag = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 188px;
    width: 326px;
    font-family: 'Raleway', sans-serif;
`