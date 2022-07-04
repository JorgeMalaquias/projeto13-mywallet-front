import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate, } from 'react-router-dom';
import TokenContext from '../contexts/TokenContext.js';
import UserContext from '../contexts/UserContext.js';
import dotenv from 'dotenv';
dotenv.config();


function logging(e, email, setEmail, password, setPassword, setToken, navigate, setUser) {
    e.preventDefault();
    const user = {
        email,
        password
    }
    axios.post(`https://backendsdriven.herokuapp.com/sign-in`, user).then((r) => {
        setToken(r.data.token);
        setEmail('');
        setPassword('');
        setUser(r.data.name)
        navigate('/general');
    }).catch((r) => {
        alert("Dados inválidos");
    });
}

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setToken } = useContext(TokenContext);
    const { setUser} = useContext(UserContext);
    const navigate = useNavigate();
    return (
        <LoginTag>
            <Title>My Wallet</Title>
            <FormTag onSubmit={(e) => logging(e, email, setEmail, password, setPassword, setToken, navigate, setUser)}>
                <input value={email} type="text" placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
                <input value={password} type="text" placeholder='Senha' required onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Entrar</button>
            </FormTag>
            <div><Link to={'/register'}>Primeira vez? Cadastre-se!</Link></div>
        </LoginTag>

    );
}

const LoginTag = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    *{
        font-family: 'Raleway', sans-serif;
    }
    *:last-child{
        color:white;
    }
`
const Title = styled.div`
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;
    color:#FFFFFF;
`
const FormTag = styled.form`
    width: 326px;
    height: 188px;
    margin: 36px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    input{
        height: 58px;
        width: 326px;
        left: 25px;
        top: 233px;
        border-radius: 5px;
        background-color: white;
        border: none;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;
        color:#000000;
        padding: 16px;
    }
    button{
        height: 46px;
        width: 326px;
        left: 23px;
        top: 375px;
        border-radius: 5px;
        background-color:#A328D6;
        border: none;
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`