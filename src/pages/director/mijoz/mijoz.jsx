import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Modal_common from "../../../components/common/super_modal/super_modal";
import Tolov_form from "../../../components/director/components/tolov_form/tolov_form";
import Kirim_hisobot from "../../../components/director/components/kirim_hisoboti/kirim_hisobot"
import Tolov_qoshish from "../../../components/director/components/tolov_qoshish_table/tolov_qoshish_table";
import Mijozlar_boyicha from "../../../components/director/components/Mijozlar_boyicha/Mijozlar_boyicha";
import Akt_mijoz from "../../../components/director/components/akt_mijoz/akt_mijoz";
import Boshlangich_balans from "../../../components/director/components/Boshlangich_balans/Boshlangich_balans";
import Buyurtma_qarz from "../../../components/director/components/Buyurtma_boyicha_table/Buyurtma_qarz_Table";
function Mijoz() {
    return(
        <div className="container">
        <Tolov_qoshish/>
        <Akt_mijoz/>
        <Mijozlar_boyicha/>
        <Accordion defaultExpanded={true} style={{ borderRadius: "20px" ,marginTop: "20px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="Icons-about" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="dashboard_about__heading">Kirim hisoboti</Typography>
            <div></div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Kirim_hisobot />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Boshlangich_balans/>
        <Buyurtma_qarz/>
 
     </div>
    )
}
export default Mijoz;
