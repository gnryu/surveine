import React, { useEffect, useState } from "react";
import FormQuestion from "../formComponents/FormQuestion";
import { ReactComponent as PlusIcon } from "../img/PlusIcon.svg";
import styled from "styled-components";
import { nanoid } from "nanoid";
import QstOptions from "../formComponents/QstOptions";

const DATA = [];

const FormMain = styled.div`
  background: grey;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlusDiv = styled.div`
  display: block;
  margin: auto;
  text-align: center;
`;

const FormSection = styled.div`
  width: 92%;
  height: 92%;
  overflow: auto;
  background-color: white;
  border-radius: 2rem 2rem 2rem 2rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  background-color: white;
`;

const HeaderHalf = styled.div`
  width: 50%;
  height: 10vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.direction};
  margin-left: 3rem;
  margin-right: 3rem;
`;
const Menu = styled.p`
  font-size: 1.4rem;
  font-weight: 800;
  color: #1a2051;
`;

const StyledPlusIcon = styled(PlusIcon)`
  width: 3rem;
  height: 3rem;
  display: inline;
  margin-top: -1rem;
  margin-bottom: 4rem;
`;

const TitleInput = styled.div`
  width: 100%;
  height: 5em;
  display: flex;
  justify-content: center;
  margin-top: 0rem;
  margin-bottom: 1rem;
`;

const TitleField = styled.input`
  width: 30rem;
  height: 3em;
  display: block;
  text-align: center;
  font-size: 1rem;
  border-radius: 1rem;
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
const TypeSelect = styled.div`
  display: inline-block;
`;

const MainFrame = styled.form`
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

function FormCreation() {
  const [title, setTitle] = useState();
  const [type, setType] = useState("체크박스");
  const [countList, setCountList] = useState([0]);
  const [qstTitle, setQstTitle] = useState();
  const [qstArr, setQstArr] = useState(DATA);

  const onChangeInput = (e) => {
    setTitle(e.target.value);
  };

  const onQstTitleChange = (e) => {
    setQstTitle(e.target.value);
  };

  const selectType = (e) => {
    setType(e.target.value);
  };

  const addQst = (event) => {
    event.preventDefault();
    const newQst = {
      id: "Q-" + nanoid(),
      title: qstTitle,
      qstType: type,
    };
    setQstArr([...qstArr, newQst]);
    setQstTitle("");
    console.log(qstArr);
  };

  function deleteQst(id) {
    const remainingTasks = qstArr.filter((task) => id !== task.id);
    setQstArr(remainingTasks);
  }

  const QstList = qstArr.map((qst) => (
    <FormQuestion
      id={qst.id}
      title={qst.title}
      deleteTask={deleteQst}
      qstType={qst.qstType}
    />
  ));
  // const onAddDetailDiv = () => {
  //   let countArr = [...countList];
  //   let counter = countArr.slice(-1)[0];
  //   counter += 1;
  //   countArr.push(counter); // index 사용 X
  //   // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용
  //   setCountList(countArr);

  return (
    <FormMain>
      <FormSection>
        <Header>
          <HeaderHalf direction="left">
            <Menu>{title}</Menu>
          </HeaderHalf>
          <HeaderHalf direction="right">
            <button>배포</button>
            <button>저장</button>
            <vutton>응답</vutton>
          </HeaderHalf>
        </Header>
        <TitleInput>
          <TitleField
            type="text"
            value={title}
            placeholder="설문 제목을 입력하세요"
            onChange={onChangeInput}
          />
        </TitleInput>

        {QstList}

        <MainFrame onSubmit={addQst}>
          <QuestNum>질문</QuestNum>
          <QuesTitle
            type="text"
            value={qstTitle}
            placeholder="질문 제목을 입력하세요"
            onChange={onQstTitleChange}
          />
          <TypeSelect>
            <select onChange={selectType}>
              <option id="checkBox">체크박스</option>
              <option>객관식 질문</option>
              <option>서술형 질문</option>
            </select>
            <QstOptions qstType={type} />
          </TypeSelect>
          <button>저장</button>
        </MainFrame>
        {/* <StyledPlusIcon onClick={addTask()} /> */}
      </FormSection>
    </FormMain>
  );
}

export default FormCreation;
