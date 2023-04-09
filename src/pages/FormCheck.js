import React, { useEffect, useState } from "react";
import FormQuestion from "../formComponents/FormQuestion";
import { ReactComponent as PlusIcon } from "../img/PlusIcon.svg";
import styled from "styled-components";
import { nanoid } from "nanoid";
import QstOptions from "../formComponents/QstOptions";
import axios from "axios";
import serverData from "../Data.json";
const ALL = {};

const DATA = [];
const QptionDATA = [];
//지나 부분

function FormCreation() {
  const [title, setTitle] = useState();
  const [type, setType] = useState("체크박스");
  const [countList, setCountList] = useState([0]);
  const [qstTitle, setQstTitle] = useState();
  const [qstArr, setQstArr] = useState(DATA);
  const [input, setInput] = useState("");
  const [options, setOptions] = useState([]);
  const [qstImg, setQstImg] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [essential, setEssential] = useState(false);
  const [branch, setBranch] = useState(false);
  const [branchCont, setBranchCont] = useState({});

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
      qstId: "Q-" + nanoid(),
      qstTitle: qstTitle,
      qstType: type,
      options: options,
      qstImg: qstImg,
      anonymous: anonymous,
      essential: essential,
      branch: branch,
      branchCont: branchCont,
    };
    setQstArr([...qstArr, newQst]);
    setQstTitle("");
    setOptions([]);
    console.log([...qstArr, newQst]);
  };

  const postEnq = async () => {
    ALL.enqTitle = "enq title";
    ALL.enqCont = qstArr;

    axios.post("/api/postEnq", ALL).then((response) => {
      console.log(response);
    });
    console.log(JSON.stringify(ALL));
  };

  // const postEnq = async () => {
  //   // qstArr 대신 JSON.stringify(qstArr) 사용?
  //   axios.post("/api/postEnq", qstArr).then((response) => {
  //     console.log(response);
  //   });
  //   console.log(qstArr);
  // };

  function deleteQst(qstId) {
    const remainingTasks = qstArr.filter((task) => qstId !== task.qstId);
    setQstArr(remainingTasks);
  }

  const QstList = qstArr.map((qst) => (
    <FormQuestion
      qstId={qst.qstId}
      qstTitle={qst.qstTitle}
      deleteTask={deleteQst}
      qstType={qst.qstType}
      options={qst.options}
      qstImg={qst.qstImg}
      anonymous={qst.anonymous}
      essential={qst.essential}
      branch={qst.branch}
      branchCont={qst.branchCont}
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

  return (
    <FormMain>
      <FormSection>
        {serverData.enqId}<br/>
        <h1>Test</h1>
        {serverData.enqCont[0].qstId}
      </FormSection>
    </FormMain>
  );
}

export default FormCreation;

const Wrapper = styled.div`
  display: inline-block;
  display: table-row;
`;

const OptionBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  margin: 1rem 2rem 2rem;
`;

const OptList = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "NotoSans-Regular";
  font-size: 14px;
  line-height: 2px;
  margin: 1rem 2rem;
`;

const Btn = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  margin-top: 7px;
`;

const SubjOption = styled.div`
  font-family: "NotoSans-Regular";
  font-size: 12px;
  color: #747474;
  line-height: 1.5;
  margin-top: 25px;
  margin-left: 35px;
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
  margin-right: 15px;
`;

const MainFrame = styled.form`
  display: block;
  margin: auto;
  width: 50rem;
  height: 11rem;
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
  width: 35.5rem;
  height: 2rem;
  margin: 2rem 1rem 0.5rem 2rem;
`;

const HeadBtn = styled.div`
  display: flex;
  flex-direction: row;
`;

const QstBtn = styled.div`
  margin-left: 10px;
`;
