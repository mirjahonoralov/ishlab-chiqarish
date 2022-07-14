import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    padding: 15px;
    text-align: center;
    h2{
        margin: 0;
        padding: 0;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.2px;
        color: #25282B;
        width: 250px;
        margin-top: 20px;
        margin-bottom: 8px;
    }
    span{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.1px;
        color: #52575C;
    }
`
export const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    button:nth-child(1){
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.1px;
        color: #828282;
        padding: 12px 24px;
        background: #FFFFFF;
        border: 1px solid #BEC8D0;
        border-radius: 6px;
        cursor: pointer;
    }
    button:nth-child(2){
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.1px;
        color: #FFFFFF;
        padding: 12px 24px;
        background: #289672;
        border-radius: 6px;
        cursor: pointer;
    }
`
export const Button = styled.button`
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        text-align: center;
        letter-spacing: 0.1px;
        color: #FFFFFF;
        padding: 12px 24px;
        background: #289672;
        border-radius: 6px;
        cursor: pointer;
        margin: 0 auto;
        margin-top: 15px;
`