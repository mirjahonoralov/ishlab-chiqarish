import * as React from 'react';
import "./../../../components/css/style.css"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Ombor from '../../../components/director/components/dashboard/ombor/ombor';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Ombor_qoshish from '../../../components/common/ombor_qoshish/Ombor_qoshish';
import { useState } from "react";
import "./Ombor_dashboard.css"
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
const OmborDashboard = () =>{
    const [open, setOpen] =  useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <>
    <div defaultExpanded={true} style={{ padding: " 0px 20px", backgroundColor:"white", borderRadius: "20px" ,marginTop: "20px" }}>
          <AccordionSummary
            id="panel1a-header"
          >
            <div className="dashboard_ombor_top">
            <Typography className="dashboard_about__heading">Sotuv</Typography>
            <Button onClick={handleOpen}>Ombor qo’shish</Button>
            </div>
          </AccordionSummary>
              <Ombor />
        </div> 
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Ombor_qoshish/>
          </Box>
        </Fade>
      </Modal>
        </>
    )
}
export default OmborDashboard