import Kirim_hisobot_card_common from "../../../common/kirim_hisobot_card/kirim_hisobot_card_common"

function Kirim_hisobot_card() {
    const kirimData = [ 
        {buttonSum : "So’m" , buttonDollar : "Usd" , titleMonySum : "279,446,25" , titleMonyDollar : "$15000", titleAbout : "Naqd pul" , id: 1},
        {buttonSum : "So’m" , buttonDollar : "Usd" , titleMonySum : "1,676,677,50" , titleMonyDollar : "$35000",  titleAbout : "Nasiya" , id: 2},
        {buttonSum : "So’m" , buttonDollar : "Usd" , titleMonySum : "1,676,677,50" ,  titleMonyDollar : "$16000", titleAbout : "Bank o’tkazmalar" , id: 3},
        {buttonSum : "So’m", buttonDollar : "Usd" , titleMonySum : "13,676,677,50" , titleMonyDollar : "$750000",  titleAbout : "Plastik o’tkazmalar" , id: 4},

    ]
    return(
        <>
            <div className="kirim_cards">
            {kirimData && kirimData.map(elem =>(
                        <Kirim_hisobot_card_common key={elem} data={elem} />
                ))}
                <div className="kirim_hisobot_card">
                    <div className="kirim_hisobot_top">
                        <button className="kirim_hisobot_top_buttons_left">Umumiy hisob</button>
                    </div>
                    <div className="kirim_hisobot_center">
                        <h3 className="kirim_hisobots_center_heading1">2,676,677,50
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Kirim_hisobot_card