import "./../../../components/css/style.css"
import Mijoz_tahlili_component from "../../../components/director/components/Mijozlar_tahlili_component/Mijozlar_tahlili_component"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Filter from "../../../components/director/components/Filter";
function Mijozlar_Tahlili() {
    return(
        <>
            <div className="container">
           <Filter/>   
           <Accordion defaultExpanded={true} style={{ borderRadius: "20px" ,marginTop: "20px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="Icons-about" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="dashboard_about__heading">Sotuv</Typography>
            <div></div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Mijoz_tahlili_component />
            </Typography>
          </AccordionDetails>
        </Accordion>
        </div>
        </>
    )
}
export default Mijozlar_Tahlili