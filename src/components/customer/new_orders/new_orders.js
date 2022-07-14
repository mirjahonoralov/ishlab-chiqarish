import styled from "styled-components";
import New_orders_user from "../../../assets/icons/customer-panel/orders/new_order_users.svg"
export const Wrapper = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 20px;
    padding:   20px 15px  ;
    height: fit-content;
    margin-top: 40px;
`
export const TopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    span{
        font-family: 'SF Pro Display';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
        display: flex;
        align-items: center;
    }
    button{
        margin: 0;
        padding: 0;
        background: #E87F45;
        border-radius: 20px;
        padding: 12.5px 15px;
        font-family: 'SF Pro Display';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        margin-left: 5px;
        cursor: pointer;
    }
    button::before{
        content: "";
        display: block;
        background-image: url(${New_orders_user});
        width: 24px;
        height: 24px;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        right: 5px;
}

`
export const Form = styled.form`
    width: 100%;
    margin-top: 20px;
`
export const Top = styled.div`
display: flex;
justify-content: space-between;
margin-bottom:40px;
`
export const Center = styled.div`
display: flex;
justify-content: space-between;
margin-bottom:40px;
`
export const Bottom = styled.div`
display: flex;
justify-content: space-between;
margin-bottom:40px;
`
export const Bottom2 = styled.div`
display: flex;
justify-content: space-between;
margin-bottom:40px;
`
export const Button = styled.button`
display: flex;
margin-left: auto;
background: #289672;
border-radius: 30px;
font-family: 'SF Pro Display';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
padding: 15px 50px;
`