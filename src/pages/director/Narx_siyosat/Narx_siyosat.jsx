import "./../../../components/css/style.css"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Narx_siyosati from "../../../components/director/components/Narx_siyosati/Narx_siyosati";
// import NarxSiyosatiTable from "../../components/director/components/Narx_siyosati/Narx_siyosati_table";
const NarxSiyosati = ()=>{
    return(
        <>
                <div defaultExpanded={true} style={{ padding: " 0px 20px", backgroundColor:"white", borderRadius: "20px" ,marginTop: "20px" }}>
          <AccordionSummary
            id="panel1a-header"
          >
            <div className="dashboard_ombor_top">
            <Typography className="dashboard_about__heading">Narx siyosati</Typography>
            </div>
          </AccordionSummary>
              <Narx_siyosati/>
              {/* <NarxSiyosatiTable/> */}
        </div> 
        </>
    )
}
export default NarxSiyosati