
import { useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import axios from 'axios';
import * as Style from './style';

function registering(e, name, setName, email, setEmail, password, setPassword, password2, setPassword2, navigate) {
    e.preventDefault();
    if (!(password === password2)) {
        alert('As senhas digitadas não são iguais!');
        setPassword('');
        setPassword2('');
    } else {
        const body = {
            name,
            email,
            password
        }
        axios.post(`${process.env.REACT_APP_API}/sign-up`, body).then((r) => {

            alert('Cadastro feito com sucesso. Para acessar sua conta faça o login');
            setName('');
            setEmail('');
            setPassword('');
            setPassword2('');
            navigate('/');
        }).catch((r) => {
            alert('Dados inválidos!');
        })
    }
}

function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const navigate = useNavigate();
    return (
        <Style.FormTag onSubmit={(e) => registering(e, name, setName, email, setEmail, password, setPassword, password2, setPassword2, navigate)}>
            <input value={name} type="text" placeholder='Nome' required onChange={(e) => setName(e.target.value)} />
            <input value={email} type="text" placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
            <input value={password} type="text" placeholder='Senha' required onChange={(e) => setPassword(e.target.value)} />
            <input value={password2} type="text" placeholder='Confirme a senha' required onChange={(e) => setPassword2(e.target.value)} />
            <button type='submit'>Cadastrar</button>
        </Style.FormTag>
    );
}
export default function Register() {


    return (
        <Style.LoginTag>
            <Style.Title>My Wallet</Style.Title>
            <RegisterForm />
            <div><Link to={'/'}>Já tem uma conta? Entre agora!</Link></div>
        </Style.LoginTag>
    );
}


