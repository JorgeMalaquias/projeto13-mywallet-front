import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate, } from 'react-router-dom';
import RecordsContext from '../../contexts/RecordsContext.js';
import * as Style from './style';

function loggingOut(setUser, setToken, navigate, token) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    setUser(undefined);
    setToken(undefined);
    axios.delete(`${process.env.REACT_APP_API}/log-out`, config);
    navigate('/');
}
function addingNewInput(navigate, setDisable, setDisable2) {
    setDisable(true);
    setDisable2(true);
    setTimeout(() => {
        navigate('/input');
    }, 1000)
}
function addingNewOutput(navigate, setDisable2, setDisable) {
    setDisable(true);
    setDisable2(true);
    setTimeout(() => {
        navigate('/output');
    }, 1000)
}

function Record({ record }) {
    return (
        <>
            <Style.RecordTag type={record.type}>
                <div>
                    <div>{record.date}</div>
                    <div>{record.name}</div>
                </div>
                <div>{Number(record.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
            </Style.RecordTag>
        </>
    );
}
export default function General() {
    const [user, setUser] = useState(window.localStorage.getItem("name"));
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const navigate = useNavigate();
    const { records, setRecords } = useContext(RecordsContext);
    const [disable, setDisable] = useState(false);
    const [disable2, setDisable2] = useState(false);
    const [amount, setAmount] = useState(undefined);

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.get(`${process.env.REACT_APP_API}/records`, config).then((r) => {
            setRecords(r.data);
            let sum = 0;

            for (let i = 0; i < r.data.length; i++) {
                sum += Number(r.data[i].price);
            }
            setAmount(Number(sum).toFixed(2));
        }).catch((r) => {
            alert('Erro inesperado ao carregar suas informações');
        })
    }, []);
    return (
        <Style.General>
            <Style.Top>
                <div>{`Olá, ${user}`}</div>
                <ion-icon name="log-out-outline" onClick={() => loggingOut(setUser, setToken, navigate, token)}></ion-icon>
            </Style.Top>
            <Style.Records empty={(records.length === 0)}>
                {records.length === 0 ? <div>Não há registros de
                    entrada ou saída</div> : records.map((r, i) => <Record record={r} key={i + 1} />)}
                <Style.Total show={!(records.length === 0)}>
                    <div>SALDO</div>
                    <Style.AmountDisplay negative={(amount < 0)}>{Number(amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Style.AmountDisplay>
                </Style.Total>
            </Style.Records>
            <Style.Options>
                <button disabled={disable} onClick={() => addingNewInput(navigate, setDisable, setDisable2)}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <div>Nova
                        entrada</div>
                </button>
                <button disabled={disable2} onClick={() => addingNewOutput(navigate, setDisable2, setDisable)}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <div>Nova
                        saída</div>
                </button>
            </Style.Options>
        </Style.General>
    );
}


