import Expense from "./tables/expense";
import Income from "./tables/income";
import CashRegisters from "./tables/cash-registers";
import MoneyResidue from "./tables/money-residue";
import Confirmation from "./tables/confirmation";
function Boshqalar() {
  return (
    <>
      <Expense />
      <Income />
      <CashRegisters />
      <MoneyResidue />
      <Confirmation />
    </>
  );
}
export default Boshqalar;
