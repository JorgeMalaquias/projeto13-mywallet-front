import { useState } from 'react';
import axios from 'axios';
import { useNavigate, } from 'react-router-dom';
import * as Style from './style';

function sendData(e, price, name, setDisable, token, navigate) {
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
        type: 'input'
    }
    axios.post(`${process.env.REACT_APP_API}/records`, body, config).then((r) => {
        navigate('/general');
    }).catch((r) => {
        setDisable(false);
        alert(r.response.data);
    })
}
export default function Input() {
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');
    const [disable, setDisable] = useState(false);
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const navigate = useNavigate();
    return (
        <Style.InputTag>
            <div>Nova entrada</div>
            <Style.FormTag onSubmit={(e) => sendData(e, price, name, setDisable, token, navigate)}>
                <input type="text" value={price} placeholder='Valor' required onChange={(e) => setPrice(e.target.value)} />
                <input type="text" value={name} placeholder='Descrição' required onChange={(e) => setName(e.target.value)} />
                <button disabled={disable} type='submit'>Salvar entrada</button>
            </Style.FormTag>
        </Style.InputTag>
    );
}



