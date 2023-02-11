import styled from "styled-components";

export const General = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const AmountDisplay = styled.div`
    color: ${props => props.negative ? '#C70000' : '#03AC00'};
`
export const Total = styled.div`
    display: ${props => props.show ? 'flex' : 'none'};
    justify-content: space-between;
    align-items: center;
    width: 300px;
    margin-bottom: 10px;
    position: absolute;
    bottom: 6px;
    *{
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
    }
    > *:nth-child(1){
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color:black;
    }
    > *:nth-child(2){
        font-size: 17px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: right;
    }
`
export const Top = styled.div`
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
export const Records = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${props => props.empty ? 'center' : 'flex-start'};
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
    padding: 8px;
    position: relative;
`
export const RecordTag = styled.div`
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
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    > *:nth-child(1) > *:nth-child(1){
        color:#C6C6C6;
        margin-right: 8px;
    }
    > *:nth-child(1) > *:nth-child(2){
        color:#000000;
        text-align: start;
    }
    > *:nth-child(2){
        color:${props => props.type === 'input' ? '#03AC00' : '#C70000'};
    }
`


export const Options = styled.div`
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