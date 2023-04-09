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

const QuestNum = styled.div`
  width: 5rem;
  height: 2rem;
  margin-top: -1rem;
  margin-left: -0.2rem;
  border-radius: 0.5rem;
  background: #1a2051;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const MainFrame = styled.div`
  display: block;
  margin: auto;
  width: 50rem;
  height: 15rem;
  background: #f8f8f8;
  border: 1px solid #21296b;
  border-radius: 20px;
  margin-bottom: 3em;
  display: table;
  &:hover {
    border: 2px solid #1a2051;
  }
`;

const QuesTitle = styled.input`
  display: inline;
  width: 30rem;
  height: 2rem;
  margin: 1rem 1rem;
`;

const QstTitle = styled.div`
  display: inline-block;
  width: 30rem;
  margin: 1rem 1rem;
`;

//함수

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

  const SaveToArray = (idreal) => {
    console.log(idreal);
  };
  //

  return (
    <>
      <MainFrame>
        <QstTitle>{props.title}</QstTitle>
        <QstOptions qstType={props.qstType} />
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          {" "}
          Delete{" "}
        </button>
      </MainFrame>
    </>
  );
}

export default FormQuestion;
