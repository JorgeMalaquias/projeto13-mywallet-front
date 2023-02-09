import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate, } from 'react-router-dom';
import TokenContext from '../../contexts/TokenContext.js';
import * as Style from './style';

function sendData(e,price,name,setDisable, token, navigate){
    e.preventDefault();
    setDisable(true);
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const body = {
        price,
        name,
        type:'input'
    }
    axios.post(`${process.env.REACT_APP_API}/records`,body,config).then((r)=>{
        navigate('/general');
    }).catch((r)=>{
        setDisable(false);
        alert('Alguns dos dados inseridos é inválido!');
    })
}
export default function Input() {
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');
    const [disable,setDisable]= useState(false);
    const {token} = useContext(TokenContext);
    const navigate = useNavigate();
    return (
        <Style.InputTag>
            <div>Nova entrada</div>
            <Style.FormTag onSubmit={(e)=>sendData(e,price,name,setDisable, token, navigate)}>
                <input type="text" value={price} placeholder='Valor' required onChange={(e) => setPrice(e.target.value)} />
                <input type="text" value={name} placeholder='Descrição' required onChange={(e) => setName(e.target.value)} />
                <button disabled={disable} type='submit'>Salvar entrada</button>
            </Style.FormTag>
        </Style.InputTag>
    );
}



