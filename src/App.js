import "./App.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route } from "react-router-dom";
import Detail from "./pages/detail.js";
import Event from "./pages/event";
import axios from "axios";
import Table from "./pages/Cart"

function App() {
  const [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"> Jun's shop </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/"> Home </Nav.Link>
            <Nav.Link href="/detail/0"> Detail </Nav.Link>
            <Nav.Link href="/event"> Event </Nav.Link>
            <Nav.Link href="/cart"> Cart </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={<>
            <div className="shoesInfoImg"> </div>
            <div className="shoesList">
              {shoes.map((name, i) => {
                return (
                  <div className="container">
                    <div className="row">
                      <img
                        onClick={() => {
                          window.location.href = "/detail/" + i;
                        }}
                        className="shoesImg"
                        src={name.source}
                        alt="img" />
                      <div className="col-md-4">
                        <h4> {shoes[i].title} </h4>{" "}
                        <p> {shoes[i].content} </p>
                        <p> {shoes[i].price} </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              onClick={() => {
                let count;
                if (count == 0) {
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((result) => {
                      let newSetShoes = [...shoes, ...result.data];
                      setShoes(newSetShoes);
                      count++;
                      console.log(count);
                    });
                } else if (count == 1) {
                  axios
                    .get("https://codingapple1.github.io/shop/data3.json")
                    .then((result) => {
                      let newSetShoes = [...shoes, ...result.data];
                      setShoes(newSetShoes);
                      count++;
                    });
                } else {
                  alert("더이상 불러올 상품이 없어요!");
                  console.log(count);
                }
              }}
            >
              더보기
            </button>

          </>
          }
        ></Route>

        <Route path="/detail/:user_id" element={<Detail shoes={shoes} />}>
          <Route path="i" element={<h3>!!특가세일!!</h3>}></Route>
        </Route>
        <Route path="/event" element={<Event />}>
          <Route
            path="i"
            element={<h3>첫 주문 시 양배추즙 서비스!</h3>}
          ></Route>
        </Route>
        <Route path="/cart" element={
          <Table />
        }>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
