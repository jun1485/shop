import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addCount, changeName, increaseAge } from "../reduxStore"

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
      <button onClick={() => {
        dispatch(increaseAge(1))
      }}>
        나이 1살 올리기
      </button>

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
            basket.cart.map((name, i) => {
              return (
                <tr>
                  <td>{basket.cart[i].id}</td>
                  <td>{basket.cart[i].name}</td>
                  <td>{basket.cart[i].count}</td>
                  <td>
                    <button onClick={() => {
                      // dispatch(basket[i].increaseCount1())
                      dispatch(addCount(basket.cart[i].id));
                    }}>+</button>
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