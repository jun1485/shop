import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeTitle, changeName } from "../reduxStore"

function Cart() {
  // let a = useSelector((state) => { return state })
  // console.log(a);

  // let productData = useSelector((state) => { return state })
  // console.log(productData);

  const basket = useSelector((state) => { return state })
  const dispatch = useDispatch()

  return (
    <>
      {console.log({ basket })};
      <h3>{basket.user.name} ({basket.user.age})의 장바구니</h3>
      <button onClick={() => {
        dispatch(changeName())
      }}>이름 변경</button>


      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>

          {
            basket.basket.map((name, i) => {
              return (
                <tr>
                  <td>{basket.basket[i].id}</td>
                  <td>{basket.basket[i].name}</td>
                  <td>{basket.basket[i].count}</td>
                  <td>
                    <button onClick={() => {
                      dispatch(changeTitle());
                    }}></button>
                  </td>
                </tr>
              )
            })
          }
          {
            console.log(basket.productData)
          }
        </tbody>
      </Table>
    </>
  )
}

export default Cart;