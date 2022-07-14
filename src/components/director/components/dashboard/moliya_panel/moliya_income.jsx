
import { useRef } from "react"  
import { PieChart, Pie, Legend, Tooltip ,Cell ,    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,}  from "recharts";
  import "./moliya.css"

const Moliya_income = ({dataIncome}) =>{
    const button_left = useRef()
    const button_right = useRef()
    const dollar_modal = useRef()
    const usz_modal = useRef()
    const button_bottom__left = useRef()
    const button_bottom__right = useRef()
    const right_usz_modal = useRef()
    const right_usd_modal = useRef()
    return(
        <>
                            <div className="dashboard_finance__left">
                        <div className="dashboard_finance__left-top">
                            <button className="dashboard_finance__left-top-button" ref={button_left} onClick={()=>{
                                            button_right.current.className = "dashboard_finance__left-top-button-white"
                                            button_left.current.className = "dashboard_finance__left-top-button"
                                            usz_modal.current.style.display = "block"
                                            dollar_modal.current.style.display = "none"
                            }} >SO’M</button>
                            <button className="dashboard_finance__left-top-button-white" onClick={()=>{
                                            button_right.current.className = "dashboard_finance__left-top-button-white__active"
                                            button_left.current.className = "dashboard_finance__left-top-button__active"
                                            usz_modal.current.style.display = "none"
                                            dollar_modal.current.style.display = "block"
                            }} ref={button_right} >USD</button>
                        </div>
                            <div ref={usz_modal} className="dashboard_finance__right-bottom">
                                    <div className="dashboard_finance__left-bottom-top">
                                    <div className="dashboard_finance__left-bottom--left">
                                        <span className="finance_padding">{dataIncome.name}</span>
                                        <span className="finance_span">May oyi, 2022</span>
                                    </div>
                                    <div className="dashboard_finance__left-bottom--right">
                                    <span className="finance_right__span">Umumiy qiymat</span>
                                    <span className="finance_right__span_bottom">11,177,850,00</span>
                                    </div>
                                    </div>
                                    <div className="dashboard_finance__left-bottom--bottom">
                                    <div className="dashboard_finance__left-bottom--bottom-left">
                                    <span className="finance_bottom__right__span">Plastik o’tkazmalar</span>
                                    <span className="finance_bottom_right__span_bottom">1,676,677,50</span>
                                    <span className="finance_bottom__right__span_bottom">Nasiya</span>
                                    <span className="finance_bottom_right__span_bottom">1,676,677,50</span>
                                    </div>
                                    <div className="dashboard_finance__left-bottom--bottom-right">
                                    <span className="finance_bottom__left-bottom__span">Naqd</span>
                                    <span className="finance_bottom_left-bottom__span_bottom">279,446,25</span>
                                    <span className="finance_bottom__left-bottom__span_bottom">Bank o’tkazmalart</span>
                                    <span className="finance_bottom_right__span_bottom">1,676,677,50</span>
                                    </div>
                                    </div>
                            </div>
                            <div ref={dollar_modal} className="dashboard_finance__left_usd">
                            <div className="dashboard_finance__left-bottom">
                                    <div className="dashboard_finance__left-bottom-top">
                                    <div className="dashboard_finance__left-bottom--left">
                                        <span className="finance_padding">Daromad</span>
                                        <span className="finance_span">May oyi, 2022</span>
                                    </div>
                                    <div className="dashboard_finance__left-bottom--right">
                                    <span className="finance_right__span">Umumiy qiymat</span>
                                    <span className="finance_right__span_bottom">23,205,850,00</span>
                                    </div>
                                    </div>
                                    <div className="dashboard_finance__left-bottom--bottom">
                                    <div className="dashboard_finance__left-bottom--bottom-left">
                                    <span className="finance_bottom__right__span">Plastik o’tkazmalar</span>
                                    <span className="finance_bottom_right__span_bottom">6,376,677,50</span>
                                    <span className="finance_bottom__right__span_bottom">Nasiya</span>
                                    <span className="finance_bottom_right__span_bottom">12,876,677,50</span>
                                    </div>
                                    <div className="dashboard_finance__left-bottom--bottom-right">
                                    <span className="finance_bottom__left-bottom__span">Naqd</span>
                                    <span className="finance_bottom_left-bottom__span_bottom">1079,446,25</span>
                                    <span className="finance_bottom__left-bottom__span_bottom">Bank o’tkazmalart</span>
                                    <span className="finance_bottom_right__span_bottom">3,576,677,50</span>
                                    </div>
                                    </div>
                            </div>
                    </div>
                    </div>
        </>
    )
}

export default Moliya_income