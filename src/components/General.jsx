import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, } from 'react-router-dom';
import styled from "styled-components";
import UserContext from '../contexts/UserContext.js';
import TokenContext from '../contexts/TokenContext.js';
import RecordsContext from '../contexts/RecordsContext.js';

function loggingOut(setUser, setToken, navigate) {
    setUser(undefined);
    setToken(undefined);
    navigate('/');
}
function addingNewInput(navigate, setDisable, setDisable2){
    setDisable(true);
    setDisable2(true);
    setTimeout(()=>{
        navigate('/input');
    },1000)
}
function addingNewOutput(navigate, setDisable2, setDisable){
    setDisable(true);
    setDisable2(true);
    setTimeout(()=>{
        navigate('/output');
    },1000)
}

function Record({ record, key }) {
    return (
        <>
            <RecordTag type={record.type} key={key}>
                <div>{record.date}</div>
                <div>{record.name}</div>
                <div>{record.price}</div>
            </RecordTag>
        </>
    );
}
export default function General() {
    const { user, setUser } = useContext(UserContext);
    const { token, setToken } = useContext(TokenContext);
    const navigate = useNavigate();
    const { records, setRecords } = useContext(RecordsContext);
    const [disable,setDisable]= useState(false);
    const [disable2,setDisable2]= useState(false);
    const config = {
        Headers: {
            token: `Bearer ${token}`
        }

    }
    useEffect(() => {
        axios.get('API', config).then((r) => {
            setRecords(r);
        }).catch((r) => {
            console.log(r);
        })
    }, []);
    return (
        <GeneralTag>
            <Top>
                <div>{`Olá, ${user}`}</div>
                <ion-icon name="log-out-outline" onClick={() => loggingOut(setUser, setToken, navigate)}></ion-icon>
            </Top>
            <Records empty={(records.length === 0)}>
                {records.length === 0 ? <div>Não há registros de
                    entrada ou saída</div> : records.map((r, i) => <Record record={r} key={i + 1} />)}
            </Records>
            <Options>
                <button disabled={disable} onClick={()=>addingNewInput(navigate, setDisable, setDisable2)}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <div>Nova
                        entrada</div>
                </button>
                <button disabled={disable2} onClick={()=>addingNewOutput(navigate, setDisable2, setDisable)}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <div>Nova
                        saída</div>
                </button>
            </Options>
        </GeneralTag>
    );
}

const GeneralTag = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px;
    width: 328px;
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    font-family: 'Raleway', sans-serif;
    color:white;
    ion-icon{
        height: 30px;
        width: 30px;
    }
`
const Records = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${props => props.empty ? 'center' : 'space-between'};
    background-color: white;
    color:#868686;
    width: 326px;
    height: 446px;
    overflow-y: scroll;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    border-radius: 5px;
    letter-spacing: 0em;
    text-align: center;
    color: #868686;
    margin-bottom: 14px;
    margin-top: 20px;
`
const RecordTag = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    margin-bottom: 10px;
    *{
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
    }
    > *:nth-child(1){
        color:#C6C6C6;
    }
    > *:nth-child(2){
        color:#000000;
    }
    > *:nth-child(3){
        color:${props => props.type === 'input' ? '#03AC00' : '#C70000'};
    }
`


const Options = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 326px;
    > *{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        height: 114px;
        width: 155px;
        left: 25px;
        top: 537px;
        border-radius: 5px;
        background-color: #A328D6;
        color:white;
        padding: 14px;
        border: none;
        ion-icon{
        height: 30px;
        width: 30px;
        }
        *{
            font-family: 'Raleway', sans-serif;
            font-size: 17px;
            font-weight: 700;
            line-height: 20px;
            letter-spacing: 0em;
            text-align: left;

        }
    }
`