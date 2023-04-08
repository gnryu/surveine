import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../img/PlusIcon.svg";
import QstOptions from "./QstOptions";

const qstInfo = {
  qstId: "",
  qstType: "radio",
  qstTitle: "",
  qstImg: "",
  anonymous: true,
  essential: true,
  branch: false,
  branchCont: {
    branchOst: "",
    branchOpt: [],
  },
};
const PlusDiv = styled.div`
  display: block;
  margin: auto;
  text-align: center;
`;

const StyledPlusIcon = styled(PlusIcon)`
  width: 2rem;
  height: 2rem;
  display: inline;
  margin-top: 3rem;
`;

const MainFrame = styled.div`
  display: block;
  margin: auto;
  width: 50em;
  height: 10em;
  background: #f8f8f8;
  border: 1px solid #21296b;
  border-radius: 28px;
  margin-bottom: 3em;
  display: table;
  &:hover {
    border: 2px solid #ffa07a;
  }
`;

const QuesTitle = styled.input`
  display: inline;
  width: 30rem;
  height: 2rem;
  margin: 1rem 1rem;
`;

function FormQuestion(props) {
  const [title, setTitle] = useState();
  const [id, setId] = useState(0);

  let [count, setCount] = useState(0);
  const [qstBox, newQstBox] = useState([
    {
      qst: {
        qstId: 1,
        qstType: "radio",
        qstTitle: "제목 없는 설문",
        anonymous: false,
        essential: false,
        branch: false,
        branchCont: {
          branchOst: "",
          branchOpt: [],
        },
      },
    },
  ]);

  const [qstInfo, setQstInfo] = useState({
    qst: {
      qstId: 0,
      qstType: "radio",
      qstTitle: "제목 없는 설문",
      anonymous: false,
      essential: false,
      branch: false,
      branchCont: {
        branchOst: "",
        branchOpt: [],
      },
    },
  });

  // 타이틀 업데이트
  const handleClick = (setValue) => {
    let key = Object.keys(setValue)[0];
    let id = Object.keys(setValue)[1];
    let value = Object.values(setValue)[0];
    let idValue = Object.values(setValue)[1];
    setQstInfo({
      ...qstInfo,
      qst: {
        ...qstInfo.qst,
        [key]: value,
        [id]: idValue,
      },
    });
  };

  //타입 바뀌면 rerender

  const IdChange = (currentId) => {
    setId(currentId);
  };

  const SaveToArray = (e) => {
    let count = 0;
    qstBox.map((data) => {
      if (data.qst.qstId == id) {
        qstBox[id] = qstInfo;
        count++;
        console.log(JSON.parse(JSON.stringify([...qstBox])));
        return;
      }
    });
    if (count == 0) {
      newQstBox([...qstBox, qstInfo]);
      console.log(JSON.parse(JSON.stringify([...qstBox, qstInfo])));
      if (id == 0) {
        newQstBox([qstInfo]);
        console.log(JSON.parse(JSON.stringify(qstInfo)));
      }
    }
  };
  //

  return (
    <>
      {props.countList &&
        props.countList.map((item, i) => (
          <>
            <MainFrame
              onClick={(e) => {
                IdChange(item);
              }}
            >
              <QuesTitle
                type="text"
                value={qstInfo.qstTitle}
                placeholder="질문 제목을 입력하세요"
                onChange={(e) => {
                  handleClick({ qstTitle: e.target.value, qstId: item });
                }}
              />

              <button onClick={SaveToArray}>저장</button>
              <QstOptions />
            </MainFrame>
          </>
        ))}
    </>
  );
}

export default FormQuestion;
