import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate, } from 'react-router-dom';
import TokenContext from '../../contexts/TokenContext.js';
import UserContext from '../../contexts/UserContext.js';
import * as Style from './style';


function logging({ e, email, setEmail, password, setPassword, navigate }) {
    e.preventDefault();
    const user = {
        email,
        password
    }
    axios.post(`${process.env.REACT_APP_API}/sign-in`, user).then((r) => {
        window.localStorage.setItem("token", r.data.token);
        window.localStorage.setItem("name", r.data.name);
        setEmail('');
        setPassword('');
        navigate('/general');
    }).catch((r) => {
        alert("Dados inválidos");
    });
}

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return (
        <Style.Form onSubmit={(e) => logging({ e, email, setEmail, password, setPassword, navigate })}>

            <input value={email} type="text" placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />

            <input value={password} type="text" placeholder='Senha' required onChange={(e) => setPassword(e.target.value)} />

            <button type='submit'>Entrar</button>

        </Style.Form>
    );
}

export default function Login() {
    return (
        <Style.Login>
            <Style.Title>My Wallet</Style.Title>
            <LoginForm />
            <div><Link to={'/register'}>Primeira vez? Cadastre-se!</Link></div>
        </Style.Login>

    );
}

