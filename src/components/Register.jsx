import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate,  } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

function registering(e,name,setName,email,setEmail,password,setPassword,password2,setPassword2, navigate){
    e.preventDefault();
    if(!(password===password2)){
        alert('As senhas digitadas não são iguais!');
        setPassword('');
        setPassword2('');
    }else{
        const body={
            name,
            email,
            password
        }
        axios.post(`http://localhost:5000/sign-up`,body).then((r)=>{

            alert('Cadastro feito com sucesso. Para acessar sua conta faça o login');
            setName('');
            setEmail('');
            setPassword('');
            setPassword2('');
            navigate('/');
        }).catch((r)=>{
            alert('Dados inválidos!');
        })
    }
}
export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [password2,setPassword2] = useState('');
    const navigate = useNavigate();
    return (
        <LoginTag>
            <Title>My Wallet</Title>
            <FormTag onSubmit={(e)=>registering(e,name,setName,email,setEmail,password,setPassword,password2,setPassword2, navigate)}>
                <input value={name} type="text" placeholder='Nome' required onChange={(e)=>setName(e.target.value)}/>
                <input value={email} type="text"placeholder='Email' required onChange={(e)=>setEmail(e.target.value)}/>
                <input value={password} type="text" placeholder='Senha' required onChange={(e)=>setPassword(e.target.value)}/>
                <input value={password2} type="text"placeholder='Confirme a senha' required onChange={(e)=>setPassword2(e.target.value)}/>
                <button type='submit'>Cadastrar</button>
            </FormTag>
            <div><Link to={'/'}>Já tem uma conta? Entre agora!</Link></div>
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
    height: 330px;
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