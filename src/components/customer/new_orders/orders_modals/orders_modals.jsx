import { Wrapper,Buttons } from "./styled_orders_modals";
import Succes_1 from "./../../../../assets/icons/customer-panel/orders/orders_success_1.svg"
function OrdersModal({onClose , changeModal , data}) {
    const handleSubmit = () =>{
        console.log(data);
        changeModal(2)
    }
    return(
        <Wrapper>
                <img src={Succes_1} width={145} height={113} alt="" />
                <h2>Siz ushbu buyurtmani tasdiqlashni xohlaysizmi ?</h2>
                <span>Iltimos ushbu oynani yopmang</span>
                <Buttons>
                    <button onClick={onClose}>Yo’q</button>
                    <button onClick={handleSubmit}>Ha</button>
                </Buttons>
        </Wrapper>
    )
}
export default OrdersModal
