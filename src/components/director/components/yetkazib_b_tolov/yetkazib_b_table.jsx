import CommonTable from "../../../common/commonTable"
import Thead from "../../../common/commonTable/Thead";
function Yetkazib_b_table() {
    return(
        <>
    <CommonTable    title="Kirimlar"
            isInputBtn={true}
            tHead={<Thead data={tHeadData} />}
            tRoad={<TRoad data={data} />}/>
        </>
    )
}
export default Yetkazib_b_table