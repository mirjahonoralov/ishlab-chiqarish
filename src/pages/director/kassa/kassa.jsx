import "./../../../components/css/style.css"
import Kassa_Hisobot from "../../../components/director/components/kassa/kassaHisobot/kassaHisoboti"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Filter from "../../../components/director/components/Filter";


function Kassa() {

    return(
        <>
            <div className="container">
           <Filter/>   

            <div style={{background: "white" , borderRadius: "20px" , marginTop : "20px"}}>
            <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="dashboard_about__heading">Sotuv</Typography>
            <div></div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                <Kassa_Hisobot/>
            </Typography>
          </AccordionDetails>
            </div>
        </div>
        </>
    )
}
export default Kassa