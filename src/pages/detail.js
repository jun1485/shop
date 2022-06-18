import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import "../App.css";
import "../App.js";
import { Nav } from "react-bootstrap";
import TabContent from "../components/TapContent";
import { useDispatch } from "react-redux";
import { addToCartState } from "../reduxStore";


function Detail(props) {
  const [showCheckError, setShowCheckError] = useState(false);

  const { user_id } = useParams();

  const findIdx = props.shoes.find(x => x.id == user_id);

  const [tabContent, setTabContent] = useState();

  const isCorrectForm = ((e) => {
    if (isNaN(e.target.value)) {
      setShowCheckError('경고 : 숫자만 입력해주세요!')
    }
    else setShowCheckError('');
  })

  useEffect(() => {
    if (localStorage.watched === undefined) localStorage.setItem('watched', JSON.stringify([]));

    let watchedItems = JSON.parse(localStorage.getItem('watched'));
    watchedItems.unshift(findIdx.id);
    watchedItems = [...new Set(watchedItems)].slice(0, 3);
    localStorage.setItem('watched', JSON.stringify(watchedItems));
  }, [])

  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={findIdx.source} width="100%" alt="shoesImg" />
        </div>
        <div className="col-md-6">
          <span>주문수량 : </span>
          <input className="detailInput" type="text" onChange={isCorrectForm} />
          <p>{showCheckError}</p>
          <h4 className="pt-5"> {findIdx.title} </h4> <p> {findIdx.content} </p>
          <p> {findIdx.price} </p> <Outlet> </Outlet>
          <button className="btn btn-danger" onClick={() => {
            dispatch(addToCartState())
          }
          }> 주문하기 </button>
          <button className="btn btn-danger" onClick={() => {
            axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result) => {
              })
              .catch(() => {
                console.log('데이터 가져오기 실패!');
              })
          }}> 물건 가져오기 </button>
        </div>
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={() => {
              setTabContent(0)
            }} eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {
              setTabContent(1)
            }} eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {
              setTabContent(2)
            }}
              eventKey="link2">버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tabContent={tabContent} />
      </div>
    </div>
  );
}

export default Detail;
