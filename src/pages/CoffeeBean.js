import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
              top: "1px",
              left: "10px",
              width: "47px",
              height: "22px",
              color: "#FFFFFF"
            }}
          >
            <Status>상태</Status>
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <span></span>
          
          <BeanDetail>
            <StyledLink to="/check">
              <Title>설문조사 제목</Title>
            </StyledLink>
          </BeanDetail>
          
          <button
            style={{
              marginLeft: "90px",
              marginRight: "12px",
              background: "none",
              border: "none",
              marginBottom: "6px"
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

const CoffeeBox = styled.button`
  width: 238px;
  height: 179px;
  border: 2px solid #21296b;
  border-radius: 10px;
  margin-left: 30px;
  background-color: #FFFFFF;
`;

const Title = styled.p`
  font-size: 16px;
  margin-left: 15px;
`;

const BeanDate = styled.div`
  font-size: 12px;
`;

const Status = styled.div`
  width: 60px;
  height: 24px;
  background-color: #1A2051;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 40px;
  line-height: 24px;
`;

const BeanDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

const StyledLink = styled(Link)`
  font-weight: ${(props) => (props.isActive ? "bold": "normal")};
`;