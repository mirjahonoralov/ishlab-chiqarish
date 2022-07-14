import { Th } from "../../../common/table/style";

const THead = () => (
  <thead>
    <Th width="10px">№</Th>
    <th>Mahsulot nomi</th>
    <th>Mahsulot turi</th>
    <th>Rang</th>
    <th>Ip turi</th>
    <th colSpan={2}>
      <div className="double">
        Qoldiq
        <div className="double-bottom">
          <div className="divider"></div>
          <div className="item">Soni</div>
          <div className="item">Kilo</div>
        </div>
      </div>
    </th>
    <Th width="142px">So’n kopaytirish</Th>
    <Th width="142px">Kilo ko’paytirish</Th>
    <Th width="100px"></Th>
  </thead>
);

export default THead;
