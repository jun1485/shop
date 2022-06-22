import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "../App.css";
import "../App.js";

function Event() {
  let [eventNotice, setEventNotice] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      setEventNotice(0);
    }, 2000);

    return () => {
      clearTimeout(timer)     // 기존에 있던 타이머 제거 (Clean up 함수)
    }
  }, []);       // []을 붙이면 처음 mount될 때 한번만 최초실행함

  return (
    <>
      <h2 style={{ marginTop: "20px" }}>오늘의 이벤트!!</h2>
      <Outlet />
      <br />
      {eventNotice === true ? (
        <h3 className="eventForTwoSecond" style={{ color: "red" }}>
          80% 특가! 이 이벤트는 2초 후 종료됩니다.
        </h3>
      ) : (
        false
      )}
    </>
  );
}

export default Event;
