import styled from 'styled-components';

export const InputTag = styled.div`
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
export const FormTag = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 188px;
    width: 326px;
    font-family: 'Raleway', sans-serif;
`