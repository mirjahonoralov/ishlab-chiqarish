import { useRef } from "react"

function Kirim_hisobot_card_common({data}) {
    const Sum = useRef()
    const Dollar = useRef()
    const SumAbout = useRef()
    const DollarAbout = useRef()
    return(
        <>
            <div className="kirim_hisobot_card">
                    <div className="kirim_hisobot_top">
                        <button className="kirim_hisobot_top_button_left" ref={Sum} onClick={()=>{
                                    Sum.current.className = "kirim_hisobot_top_button_left"
                                    Dollar.current.className = "kirim_hisobot_top_button_right"
                                    SumAbout.current.style.display = "block"
                                    DollarAbout.current.style.display = "none"
}}>{data.buttonSum}</button>
                        <button className="kirim_hisobot_top_button_right" ref={Dollar} onClick={()=>{
                                    Sum.current.className = "kirim_hisobot_top_button_left_active"
                                    Dollar.current.className = "kirim_hisobot_top_button_right_active"
                                    SumAbout.current.style.display = "none"
                                    DollarAbout.current.style.display = "block"
}}>{data.buttonDollar}</button>
                    </div>
                    <div className="kirim_hisobot_center">
                        <h3 className="kirim_hisobot_center_heading1" ref={SumAbout} >{data.titleMonySum}
                        </h3>
                        <h3 className="kirim_hisobot_center_heading" ref={DollarAbout} >{data.titleMonyDollar}
                        </h3> 
                        <span className="kirim_hisobot_center_span">{data.titleAbout}</span>
                    </div>
            </div>
        </>
    )
}
export default Kirim_hisobot_card_common