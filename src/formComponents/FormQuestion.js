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

  // {qstType == "체크박스" && (
  //   <div>
  //     <OptList>
  //       {options.map((it) => (
  //         <div>
  //           <input type="checkbox" value={it} /> <label>{it}</label>
  //         </div>
  //       ))}
  //     </OptList>

  return (
    <>
      <MainFrame>
        <QstFrame>
          <QstTitle>{props.qstTitle}</QstTitle>
          <DelBtn>
            <button
              type="button"
              className="btn btn__danger"
              onClick={() => props.deleteTask(props.qstId)}
            >
              {" "}
              Delete{" "}
            </button>
          </DelBtn>
        </QstFrame>

        <OptFrame>
          <QstOptions qstType={props.qstType} />
          {props.qstType == "체크박스" &&
            props.options.map((it) => (
              <OptBox>
                <input type="checkbox" value={it} />
                <label>{it}</label>
              </OptBox>
            ))}
          {props.qstType == "객관식 질문" &&
            props.options.map((it) => (
              <OptBox>
                <input type="radio" value={it} />
                <label>{it}</label>
              </OptBox>
            ))}
        </OptFrame>
      </MainFrame>
    </>
  );
}

export default FormQuestion;

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
  height: 10rem;
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
  margin: 30px 200px 2px 30px;
`;

const OptBox = styled.div`
  margin-left: 30px;
  margin-bottom: 10px;
  margin-top: 15px;
`;

const DelBtn = styled.div`
  margin-right: 10px;
  margin-top: 25px;
`;

const QstFrame = styled.div`
  display: flex;
  flex-direction: row;
`;

const OptFrame = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;
