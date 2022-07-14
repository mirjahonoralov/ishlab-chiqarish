import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
`
export const HeaderRight = styled.div`
    width: 720px;
    display: flex;
    justify-content: space-between;
    span{
        font-family: 'SF Pro Display';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #333333;
    }
`
export const HeaderRight_div = styled.div`
    display: flex;
    width: 250px;
    justify-content: space-between;
    p{
        font-family: 'SF Pro Display';
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
        border-bottom: 2px solid #B9B9B9;
    }
`
export const ButtonIcon = styled.button`
    background: #FFA500;
    border-radius: 8px;
    width: 40px;
    padding: 5px 9px;
    cursor: pointer;
`
