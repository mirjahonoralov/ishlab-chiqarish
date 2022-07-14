import styled from "styled-components";
import StrelkaIcon from "../../../../assets/icons/customer-panel/history-order/Strelka_icon.svg"
export const Wrapper = styled.div`
width: 100%;
padding: 32px;
text-align: center;
.css-1wxstni-MuiSvgIcon-root{
    width: 42px;
    height: 42px;
}
.css-3adcp6-MuiSvgIcon-root{
    width: 42px;
    height: 42px;
}
.css-kglq79-MuiRating-root .MuiRating-iconEmpty .MuiSvgIcon-root{

}
.css-4b67si-MuiSvgIcon-root{
    width: 42px;
    height: 42px; 
}
.css-dqr9h-MuiRating-label{
    width: 56px;
}
.css-kglq79-MuiRating-root{
    margin-left: 54px;
}
h3{
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000000;
    margin-bottom: 8px;
}
p{
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #81755C;
    margin-bottom: 20px;
}
input[type="file"]{
  display: none;
}
button{
    background: #289672;
    border-radius: 100px;
    padding: 12px 36px 12px 36px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    display: flex;
    margin-right: 2px;
    margin-left: auto;
    margin-top: 20px;
}
button::after{
    content: "";
    background-image: url(${StrelkaIcon});
    background-repeat: no-repeat;
    background-size: cover;
    width: 12px;
    height: 12px;
    position: relative;
    left: 10px;
    top: 5px;
}
`

export const Label =  styled.label`
cursor: pointer;
width: 100%;
background: none;
display: flex;
align-items: center;
border-radius: 50px;
max-height: 60px;
height: 100%;
font-size: 16px;
font-weight: 400;
color: #666;
border: 2px dashed rgba(1, 27, 39, 0.3);
padding: 13px 20px;
`
export const Img = styled.img`
  margin-right: 10px;
  background-color: #289672;
  padding: 4px;
  border-radius: 50%;
`;
export const Images = styled.div`
 display: flex;
 width: 100%;
 height: 78px;
 justify-content: space-between;
 margin-top: 15px;
 border-bottom: 2px solid #DADADA;
`