import * as React from 'react';
import { useState } from 'react';
import {  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend ,  ComposedChart,
    Line,
    Area ,
    ResponsiveContainer,
    LabelList, Scatter} from 'recharts';
    import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import "./Ombor.css"

function valueLabelFormat(value) {
  const units = [ 'KG'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 120000 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 120000;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

function valueLabelFormat2(value2) {
  const units2 = [ 'KG'];

  let unitIndex2 = 0;
  let scaledValue2 = value2;

  while (scaledValue2 >= 430000 && unitIndex2 < units2.length - 1) {
    unitIndex2 += 2;
    scaledValue2 /= 540000;
  }

  return `${scaledValue2} ${units2[unitIndex2]}`;
}

function calculateValue(value) {
  return 2 ** value;
}
const  Ombor_chart = ({dataombarcharts}) => {
    function valuetext(value) {
        return `${value}°C`;
      }
      function calculateValue2(value) {
        return 2 ** value;
      }

      const marks = [
        {
          value: 0,
          label: '0',
        },
        {
          value: 5,
          label: '5',
        },
        {
          value: 10,
          label: '10',
        },
        {
          value: 15,
          label: '15',
        },
        {
          value: 20,
          label: '20',
        },
        {
          value: 25,
          label: '25',
        },
        {
          value: 30,
          label: '30',
        },
      ];
      const data_Size = [
        {
          name: 1,
          uv: 590,
          pv: 800,
          amt: 1400,
          cnt: 490
        },
        {
          name: 2,
          uv: 668,
          pv: 767,
          amt: 1506,
          cnt: 590
        },
        {
          name: 2,
          uv: 997,
          pv: 898,
          amt: 989,
          cnt: 350
        },
        {
          name: 3,
          uv: 1080,
          pv: 1150,
          amt: 1228,
          cnt: 480
        },
        {
          name: 4,
          uv: 1220,
          pv: 1108,
          amt: 1100,
          cnt: 460
        },
        {
          name: 5,
          uv: 800,
          pv: 680,
          amt: 1700,
          cnt: 380
        }
      ];
            const CustomTooltip5 = ({ active, payload, label }) => {
                if (active) {
                  return (
                    <div className="custom_tooltip7">
                      <p className="label5">{`${payload[0].value}`}</p>
                      <p className="label4">{`${payload[1].value}`}</p>

                    </div>
                  );
                }
              
                return null;
              };
              const CustomTooltip6 = ({ active, payload, label }) => {
                if (active) {
                  return (
                    <div className="custom_tooltip7">
                      <p className="label5">{`${payload[1].value}`}</p>
                    </div>
                  );
                }
              
                return null;
              };
            
              const [value, setValue] = React.useState(10);
              const [value2, setValue2] = React.useState(10);

          const handleChange = (event, newValue) => {
            if (typeof newValue === 'number') {
              setValue(newValue);
            }
          };
          const handleChange2 = (event, newValue) => {
            if (typeof newValue === 'number') {
              setValue2(newValue);
            }
          };
      let [posData, setposData] = useState({});

    return(
            <>
            <div className="Ombor_left-top">
                      <p className='Ombor_left-top-padding'>{dataombarcharts.name}</p>
                      <p className='Ombor_left-top-padding-icons'>May oyi, 2022</p>
                      <div className='Ombor_left-top-end'>
                          <span className='Ombor_left-top-span1'>Kirim</span>
                          <span className='Ombor_left-top-span2'>Chiqim</span>
                      </div>
                    </div>
                    <div className="Ombor_left-center">
                    <ComposedChart className='ombor_ComposedChart'
      width={593}
      height={244}
      data={data_Size}
      margin={{
        top: 10,
        right: 30,
        bottom: 10,
        left: 35
      }}
    >
      <CartesianGrid stroke=" #CCCCCC"/>
      <XAxis dataKey="name" onMouseOver={(data) => {
          setposData(data);
        }} />
      <Tooltip content={CustomTooltip5}          position={{ x: posData.x, y: 0}} />
      <Bar dataKey="pv" barSize={28} radius={5} fill="#06D6A0" />
      <Bar dataKey="uv" barSize={28} radius={5} fill="#289672 " />
    </ComposedChart>
    
                    </div>

                   <div className='ombor_ComposedChart_slider'>
      <p className='ombor_ComposedChart_slider_padding'>Qoldiq</p>
                   <Box sx={{ width: 398 }}>
                   <Typography id="non-linear-slider " className='ombor_ComposedChart_slider_span' gutterBottom>
        {valueLabelFormat2(calculateValue2(value))}
      </Typography>


                   <Slider
                            aria-label="Custom marks"
                            defaultValue={20}
                            getAriaValueText={valuetext}
                            step={5}
                            min={0}
                            max={30}
                            valueLabelDisplay="auto"
                            value={value}
                            scale={calculateValue2}
                            valueLabelFormat={valueLabelFormat2}
                            onChange={handleChange}
                            marks={marks}
                            aria-labelledby="non-linear-slider"
                            />
    </Box>
                   </div>

                <div className='ombor_ComposedChart_slider_bottom'>
                <p className='ombor_ComposedChart_slider_padding'>Zahira</p>

                            <Box sx={{ width: 398 }}>
                            <Typography id="non-linear-slider " className='ombor_ComposedChart_slider_span2' gutterBottom>
        {valueLabelFormat(calculateValue(value2))}
      </Typography>
                          <Slider
                                aria-label="Temperature"
                                defaultValue={15}
                                getAriaValueText={valuetext}
                                scale={calculateValue}
                                value={value2}
                                valueLabelFormat={valueLabelFormat}
                                valueLabelDisplay="auto"
                                onChange={handleChange2}
                                step={5}
                                marks={marks}
                                min={0}
                                max={30}
                              />
                            </Box>
</div>
{/* -------------------------------- 2chi ombor ------------------------------------------ */}
            </>
    )
}
export default Ombor_chart