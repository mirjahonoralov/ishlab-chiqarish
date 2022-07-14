import React from "react";
import { useState } from "react";
import UniversalModal from "../../common/unversal_modal/unversal_modal";
import EditModal from "./components/edit-modal";
import Section from "./components/section";
import { Container, EditButton, Header, Icons, Wrapper } from "./style";

const ChangeOrder = () => {
  let data = [
    {
      label: "Buyurtma 1",
      id: 1,
    },
    {
      label: "Buyurtma 2",
      id: 2,
    },
    {
      label: "Buyurtma 3",
      id: 3,
    },
    {
      label: "Buyurtma 4",
      id: 4,
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleEdit = (item) => {
    setOpen(true);
    setSelectedData({
      company: "Algorithm Gate Way",
      productType: "Yarim tayyor",
      colors: "Qizil, Yashil, Sariq",
      yarnType: "Paxta",
      thread: "15458 m",
      potType: "33 кг,  50 кг,  100 кг,  120 кг",
      orderWeight: "33 кг,  50 кг,  100 кг,  120 кг",
      orderCount: "15 ta",
      deadline: "02 / 07 / 2022",
      location: "Toshkent sh, Chilonzor 20 KV, 1151 uy",
      phoneNumber: "+99899 957 86-11",
      paymentType: "Naqd",
    });
    console.log(item);
  };

  return (
    <Container>
      <Header>
        <h1>Buyurtmani o’zgartirish</h1>
        <EditButton
          disabled={selectedItem}
          onClick={() => selectedItem && handleEdit(selectedItem)}
        >
          {selectedItem ? <Icons.EditWhite /> : <Icons.Edit />}
          O’zgartirish
        </EditButton>
      </Header>
      <Wrapper>
        {data.map((item) => (
          <Section
            key={item.id}
            id={item.id}
            label={item.label}
            setSelectedItem={setSelectedItem}
          />
        ))}
      </Wrapper>

      <UniversalModal open={open}>
        <EditModal
          selectedData={selectedData}
          handleClose={() => setOpen(false)}
        />
      </UniversalModal>
    </Container>
  );
};

export default ChangeOrder;
