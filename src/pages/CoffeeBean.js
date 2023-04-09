import React from "react";
import styled from "styled-components";

const CoffeeBox = styled.div`
  width: 238px;
  height: 179px;
  border: 2px solid #21296b;
  border-radius: 10px;
  margin-left: 30px;
`;

const Title = styled.p`
  height: 24px;
  margin-left: 15px;
`;
const CoffeeBean = () => {
  return (
    <CoffeeBox>
      <div
        style={{
          position: "relative",
          display: "inline-block",
          alignItems: "center",
        }}
      >
        <img
          src="img/coffeeBeans.png"
          alt="이미지"
          style={{ display: "block", width: "100%" }}
        />
        <p
          style={{
            position: "absolute",
            top: "5px",
            left: "10px",
            width: "47px",
            height: "22px",
          }}
        >
          상태
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <span></span>
        <Title>설문조사 제목</Title>

        <button
          style={{
            marginLeft: "5px",
            marginRight: "12px",
            background: "none",
            border: "none",
          }}
          onClick={etcBtnClick}
        >
          <img src="img/icon_more.png" />
        </button>
      </div>
    </CoffeeBox>
  );
};

function etcBtnClick() {
  alert("더보기 버튼 클릭");
}

export default CoffeeBean;

// <div style={{ display: "flex" }}>
//   <span></span>
//   <p style={{ position: "absolute", height: "24px", margin: 0, marginLeft: "15px" }}>[설문조사 제목]</p>

//   <button style={{ float: "right", marginRight: "12px", background: "none", border: "none" }}>
//     <img src="img/icon_link.png" />
//   </button>

//   <button style={{ float: "right", marginRight: "12px", background: "none", border: "none" }}>
//     <img src="img/icon_more.png" />
//   </button>
// </div>;
