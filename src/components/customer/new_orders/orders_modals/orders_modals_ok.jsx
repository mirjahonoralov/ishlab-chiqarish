import { Wrapper,Buttons , Button } from "./styled_orders_modals";
import Succes_1 from "./../../../../assets/icons/customer-panel/orders/orders_success_2.svg"
function OrdersModalOk({close}) {
    return(
        <Wrapper>
                <img src={Succes_1} width={145} height={113} alt="" />
                <h2>Sizning buyurtmangiz tasdiqlandi va raqamingizga SMS xabar jo’natildi</h2>
                <div>
                    <Button onClick={close}>Ok</Button>
                </div>
        </Wrapper>
    )
}
export default OrdersModalOk
