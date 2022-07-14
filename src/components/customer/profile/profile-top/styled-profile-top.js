import styled from "styled-components";
import backgroundImg from "./../../../../assets/icons/customer-panel/profile/before_background.png"
export const Wrapper = styled.div`
border-radius: 9px;
height: 285px;
    margin-bottom: 20px;
`
export const WrapperTop = styled.div`
width: 100%;
background: rgba(0, 0, 0, 0.2);
height: 195px;
padding: 15px;
border-radius: 9px 9px 0px 0px;
    img{
        background: rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(15px);
        border-radius: 50%;
        padding: 5px;
        display: flex;
        margin-left: auto;
        cursor: pointer;
    }
    input[type="file"]{
  display: none;
}
h1{
    width: 100%;
    margin: 0 auto;
    text-align: center;
    color: red;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 57px;
    color: #7E7D7D;
  }
`
export const WrapperBottom = styled.div`
    background-image: url(${backgroundImg});
    width: 100%;
    height: 180px;
    position: relative;
    bottom: 90px;
    background-size: cover;
border-radius: 0px 0px 9px 9px;
  img{
    cursor: pointer;
  }
`
export const Background_img = styled.div`
       object-fit: contain;
       background-color: #E8E8E8;
       border-radius: 50%;
       width: 150px;
       padding: 33px;
       height: 150px;
       cursor: pointer;
       input[type="file"]{
  display: none;
}
`
export const WrapperBottomLeft = styled.div`
       margin-left: 210px;
       position: relative;
       top: 13px;
       display: flex;

`
export const WrapperAbout = styled.div`
        position: relative;
        top: 80px;
        left: 32px;
       h3{
        margin: 0;
        padding: 0;
        font-family: 'SF Pro Display';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 20px;
        color: #000000;
       }
       span{
        font-family: 'SF Pro Display';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #000000;
        opacity: 0.6;
       }
`
