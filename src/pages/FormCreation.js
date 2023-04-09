import React, { useEffect, useState } from "react";
import FormQuestion from "../formComponents/FormQuestion";
import { ReactComponent as PlusIcon } from "../img/PlusIcon.svg";
import styled from "styled-components";
import { nanoid } from "nanoid";
import QstOptions from "../formComponents/QstOptions";

const DATA = [];
const QptionDATA = [];
//지나 부분
let newQst = {};
const Wrapper = styled.div`
  display: inline-block;
  display: table-row;
`;

const OptionBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  margin-left: 15px;
  margin-bottom: 10px;
`;

const OptList = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "NotoSans-Regular";
  font-size: 14px;
  line-height: 2px;
  margin-left: 10px;
  margin-bottom: 15px;
`;

const Btn = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

const SubjOption = styled.div`
  font-family: "NotoSans-Regular";
  font-size: 12px;
  color: #747474;
  line-height: 1.5;
  margin-left: 15px;
`;

// 도경 부분
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
  const [input, setInput] = useState("");
  const [options, setOptions] = useState([]);
  const [fullForm, setFullForm] = useState({ id: 2, title: "", qustions: [] });
  const [formId, setFormId] = useState("Form-" + nanoid());

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
    newQst = {
      id: "Q-" + nanoid(),
      title: qstTitle,
      qstType: type,
      options: options,
    };
    setQstArr([...qstArr, newQst]);
    setQstTitle("");
    setOptions([]);
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
      options={qst.options}
    />
  ));
  // const onAddDetailDiv = () => {
  //   let countArr = [...countList];
  //   let counter = countArr.slice(-1)[0];
  //   counter += 1;
  //   countArr.push(counter); // index 사용 X
  //   // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용
  //   setCountList(countArr);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  function AddOption(e) {
    e.preventDefault();
    console.log("Success!");
    console.log(input);
    if (!input || /^\s*$/.test(input)) {
      return;
    }

    const newOptions = [...options, input];

    setOptions(newOptions);
    setInput("");
  }

  function saveForm() {
    const newForm = {
      id: formId,
      title: title,
      qustions: [...qstArr],
    };
    setFullForm(newForm);
  }

  function saveButton() {
    saveForm();
    saveForm();
    console.log(fullForm);
  }
  return (
    <FormMain>
      <FormSection>
        <Header>
          <HeaderHalf direction="left">
            <Menu>{title}</Menu>
          </HeaderHalf>
          <HeaderHalf direction="right">
            <button>배포</button>
            <button onClick={saveButton}>저장</button>
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

        <MainFrame>
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
          </TypeSelect>
          <button onClick={addQst}>저장</button>

          {type == "체크박스" && (
            <div>
              <OptList>
                {options.map((it) => (
                  <div>
                    <input type="checkbox" value={it} /> <label>{it}</label>
                  </div>
                ))}
              </OptList>
              <OptionBox>
                <br />
                <br />
                <input
                  type="text"
                  placeholder="옵션"
                  value={input}
                  name="text"
                  onChange={handleChange}
                />
                <Btn>
                  <button onClick={AddOption}>+</button>
                </Btn>
              </OptionBox>
            </div>
          )}

          {type == "객관식 질문" && (
            <div>
              <OptList>
                {options.map((it) => (
                  <div>
                    <input type="radio" value={it} /> <label>{it}</label>
                  </div>
                ))}
              </OptList>

              <OptionBox>
                <br />
                <br />
                <input
                  type="text"
                  placeholder="옵션"
                  value={input}
                  name="text"
                  onChange={handleChange}
                />
                <Btn>
                  <button onClick={AddOption}>+</button>
                </Btn>
              </OptionBox>
            </div>
          )}

          {type == "서술형 질문" && (
            <SubjOption>
              텍스트
              <hr size="1" width="500px" color="gray" />
            </SubjOption>
          )}
        </MainFrame>

        {/* <StyledPlusIcon onClick={addTask()} /> */}
      </FormSection>
    </FormMain>
  );
}

export default FormCreation;
