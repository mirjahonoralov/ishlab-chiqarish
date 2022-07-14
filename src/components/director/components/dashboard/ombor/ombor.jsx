import {  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend ,  ComposedChart,
    Line,
    Area ,
    ResponsiveContainer,
    LabelList, Scatter} from 'recharts';
    import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Ombor_chart from './ombor_chart';
import "./Ombor.css";
function Ombor() {
            const data = [
                {name : "1.Xomashyo" , id : 1},
                {name : "2.Tayyor" , id : 2},
                {name : "3.Yarim tayyor" , id : 3},
                {name : "4.Furnitura" , id : 4}
            ]
    return(
        <>
            <div className="Ombor">
                    {data.map(item =>(
                <div className="Ombor_left">
                    <Ombor_chart key={item.id} dataombarcharts={item}/>
                </div>
                        ))}

                </div>
        </>
    )
}
export default Ombor