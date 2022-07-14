
import { useRef } from "react"  
import "./moliya.css"

const Moliya_indebtedness = ({dataIndebt})=>{
    const left_ind_modal = useRef()
    const left_ind = useRef()
    const left_and_button = useRef()
    const right_and_button = useRef()
    
    return(
        <>
                <div className="dashboard_finance_bottom">
                            <div className="dashboard_finance_bottom_left">
                    <div className="dashboard_finance__left-top">
                            <button className="dashboard_finance__bottom-top-button" ref={left_and_button} onClick={()=>{
                                            left_and_button.current.className = "dashboard_finance__bottom-top-button"
                                            right_and_button.current.className = "dashboard_finance__right-bottom-button-white"
                                            left_ind.current.style.display = "block"
                                            left_ind_modal.current.style.display = "none"
                            }}  >Haqdorlik</button>
                            <button className="dashboard_finance__right-bottom-button-white"  onClick={()=>{
                                            right_and_button.current.className = "dashboard_finance__left-top-button-white__a"
                                            left_and_button.current.className = "dashboard_finance__left-top-button__a"
                                            left_ind.current.style.display = "none"
                                            left_ind_modal.current.style.display = "block"
                            }} ref={right_and_button} >Qarzdorlik</button>
                        </div>
                    </div>
                            </div>
                                        <div className="dashboard_finance_bottom---left">
                                <div ref={left_ind} className="dashboard_finance__left-totals--bottom">
                                <p className="dashboard_finance__left-totals--bottom-padding">{dataIndebt.name}</p>
                                <div className="dashboard_finance__left-totals--bottom---top">
                                <span className="dashboard_finance__left-totals--bottom-right">
                                Umumiy
                                </span>
                                <span className="dashboard_finance__left-totals--bottom-left">
                                15,177,850,00
                                </span>
                                </div>
                                <div className="dashboard_finance__left-totals--bottom---top">
                                <span className="dashboard_finance__left-totals--bottom-right">
                                Umumiy
                                </span>
                                <span className="dashboard_finance__left-totals--bottom-left">
                                15,177,850,00
                                </span>
                                </div>
                                <div className="dashboard_finance__left-totals--bottom---top">
                                <span className="dashboard_finance__left-totals--bottom-right">
                                Umumiy
                                </span>
                                <span className="dashboard_finance__left-totals--bottom-left">
                                15,177,850,00
                                </span>
                                </div>
                            </div>
                            <div ref={left_ind_modal} className="dashboard_finance__left-totals--bottom-modal">
                                <p className="dashboard_finance__left-totals--bottom-padding">Umumiy haqdorlik bo’yicha</p>
                                <div className="dashboard_finance__left-totals--bottom---top">
                                <span className="dashboard_finance__left-totals--bottom-right">
                                Umumiy
                                </span>
                                <span className="dashboard_finance__left-totals--bottom-left">
                                43,477,850,00
                                </span>
                                </div>
                                <div className="dashboard_finance__left-totals--bottom---top">
                                <span className="dashboard_finance__left-totals--bottom-right">
                                Umumiy
                                </span>
                                <span className="dashboard_finance__left-totals--bottom-left">
                                52,177,850,00
                                </span>
                                </div>
                                <div className="dashboard_finance__left-totals--bottom---top">
                                <span className="dashboard_finance__left-totals--bottom-right">
                                Umumiy
                                </span>
                                <span className="dashboard_finance__left-totals--bottom-left">
                                76,567,850,00
                                </span>
                                </div>
                            </div>
                                </div>
        </>
    )
}

export default Moliya_indebtedness