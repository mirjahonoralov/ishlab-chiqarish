import React from "react";
import { Icons, ModalTop, ModalWrapper } from "../style";
import CloseIcon from "@mui/icons-material/Close";
import CommonButton from "../../../common/button/";
import { useFormik } from "formik";

const EditModal = ({ handleClose, selectedData }) => {
  const formik = useFormik({
    initialValues: selectedData,
    onSubmit: (values) => {
      console.log(values);
      // o'zgartirilgan malumotlar backendga ketadi shetdan
    },
  });

  return (
    <ModalWrapper>
      <ModalTop>
        <h2>Buyurtmani tahrirlash</h2>
        <CloseIcon onClick={handleClose} />
      </ModalTop>

      <form onSubmit={formik.handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <div>
                  <Icons.Home /> Kompaniya nomi
                </div>
              </td>
              <td>
                <input
                  onChange={formik.handleChange}
                  name="company"
                  type="text"
                  value={formik.values.company}
                />
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <Icons.Check /> Mahsulot turi
                </div>
              </td>
              <td>
                <input
                  onChange={formik.handleChange}
                  name="productType"
                  type="text"
                  value={formik.values.productType}
                />
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <Icons.Chart /> Ranglar
                </div>
              </td>
              <td>
                <input
                  name="colors"
                  type="text"
                  value={formik.values.colors}
                  onChange={formik.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <Icons.Yarn /> Ip turi
                </div>
              </td>
              <td>
                <input
                  onChange={formik.handleChange}
                  name="yarnType"
                  type="text"
                  value={formik.values.yarnType}
                />
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <Icons.Thread /> Ip o’lchami
                </div>
              </td>
              <td>
                <input
                  name="thread"
                  type="text"
                  value={formik.values.thread}
                  onChange={formik.handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>
                <div>
                  <Icons.Pot /> Qozon tipi
                </div>
              </td>
              <td>
                <input
                  name="potType"
                  type="text"
                  value={formik.values.potType}
                  onChange={formik.handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>
                <div>
                  <Icons.Cart /> Buyurtma kilosi
                </div>
              </td>
              <td>
                <input
                  onChange={formik.handleChange}
                  name="orderWeight"
                  type="text"
                  value={formik.values.orderWeight}
                />
              </td>
            </tr>

            <tr>
              <td>
                <div>
                  <Icons.Cart /> Buyurtma soni
                </div>
              </td>
              <td>
                <input
                  onChange={formik.handleChange}
                  name="orderCount"
                  type="text"
                  value={formik.values.orderCount}
                />
              </td>
            </tr>

            <tr>
              <td>
                <div>
                  <Icons.Calendar /> Muddat
                </div>
              </td>
              <td>
                <input
                  onChange={formik.handleChange}
                  name="deadline"
                  type="text"
                  value={formik.values.deadline}
                />
              </td>
            </tr>

            <tr>
              <td>
                <div>
                  <Icons.Location /> Yuboriladian manzil
                </div>
              </td>
              <td>
                <input
                  onChange={formik.handleChange}
                  name="location"
                  type="text"
                  value={formik.values.location}
                />
              </td>
            </tr>

            <tr>
              <td>
                <div>
                  <Icons.Call /> Telefon raqam
                </div>
              </td>
              <td>
                <input
                  onChange={formik.handleChange}
                  name="phoneNumber"
                  type="text"
                  value={formik.values.phoneNumber}
                />
              </td>
            </tr>

            <tr>
              <td>
                <div>
                  <Icons.Dollar /> To’lov turi
                </div>
              </td>
              <td>
                <input
                  onChange={formik.handleChange}
                  name="paymentType"
                  type="text"
                  value={formik.values.paymentType}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <CommonButton name="Saqlash" margin={"20px 0 0 0"} type="submit" />
      </form>
    </ModalWrapper>
  );
};

export default EditModal;
