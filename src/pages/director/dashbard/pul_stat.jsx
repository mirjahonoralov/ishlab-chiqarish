import React, { useEffect, useState, useRef, PureComponent } from "react";
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Sotuv_chart_panel from "../../../components/director/components/dashboard/sotuv_chart/sotuv_chart_panel";
import Ombor from "../../../components/director/components/dashboard/ombor/ombor";
import "react-datepicker/dist/react-datepicker.css";
// import { api } from "../../api/api";
import Moliya_panel from "../../../components/director/components/dashboard/moliya_panel/moliya_panel";
import Filter from "../../../components/director/components/Filter";
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
function CostomTooltip({ active, payload }) {
  if (active) {
    return (
      <div className="pie_tooltip">
        <p>$ {payload[0].value.toFixed(0)}</p>
      </div>
    );
  }
  return null;
}

const PulStatistikasi = ({ keyword, url }) => {
  return (
    <React.Fragment>
      {/* <DataPick /> */}
      <div className="container">
        <Filter />
        <Accordion
          defaultExpanded={true}
          style={{ borderRadius: "20px", marginTop: "20px" }}
        >
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
              <Sotuv_chart_panel />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded={true}
          style={{ borderRadius: "20px", marginTop: "20px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="Icons-about" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="dashboard_about__heading">Moliya</Typography>
            <div></div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Moliya_panel />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded={true}
          style={{ borderRadius: "20px", marginTop: "20px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="Icons-about" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="dashboard_about__heading">Ombor</Typography>
            <div></div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Ombor />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </React.Fragment>
  );
};

export default PulStatistikasi;
