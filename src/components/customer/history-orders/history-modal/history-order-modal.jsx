import { Wrapper , Button as AsButton , Img , Label , Images} from "./style-history-order-modal"
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import FileUploadIcons from "../../../../assets/icons/customer-panel/history-order/file_upload_icons.svg"
import AvatarImg from "../../../../assets/icons/customer-panel/history-order/avatar_img.png"
const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
      color: theme.palette.action.disabled,
    },
  }));
  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon color="error" />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon color="error" />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon color="warning" />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon color="success" />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon color="success" />,
      label: 'Very Satisfied',
    },
  };
  
  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };
  const ImgData = [
    {
    id : 1,
   },
   {
    id : 2,
  },
  {
    id : 3,
  },
  {
    id : 4,
  },{
    id : 5,
  },  {
    id : 6,
  },
]
const HistoryOrderModal = ()=>{
    return(
        <Wrapper>
            <h3>Baholash</h3>
            <p>Sizning har bir bahongiz biz uchun juda muhim :)</p>
            <StyledRating
      name="highlight-selected-only"
      defaultValue={1}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
    />
        <input style={{display : "block" , margin : "0 auto" , marginTop : "20px", marginBottom : "15px"  , width:"419px"}} className="form-input" placeholder="Izoh qoldiring" type="text" /> 

        <input type="file" id="file" name="file" required />
                    <Label for="file" name="file">        <Img src={FileUploadIcons} width={24} height={24} alt="icon-button" />
        Foto hisobot yuklash</Label>
            <Images>
            {ImgData.map(elem =><>
            <img key={elem.id} src={AvatarImg} width={56} height={53} alt="" />
        </>)}
            </Images>

            <button>Yuborish</button>
        </Wrapper>
    )
}
export default HistoryOrderModal