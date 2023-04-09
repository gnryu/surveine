import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CoffeeBean from "./CoffeeBean";
import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../img/PlusIcon.svg";
import { ReactComponent as SearchIcon } from "../img/search.svg";
const Wrapper = styled.div``;

const MenuInfo = styled.div`
  display: inline;
`;

const MainMenu = styled.p`
  display: block;
  margin-top: 1rem;
  margin-left: 5rem;
  font-size: 1rem;
  font-weight: 400;
`;
const SubMenu = styled.p`
  display: block;
  margin: 1rem 5rem;
  font-size: 1.1rem;
  font-weight: 700;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 2rem;
  background: rgba(248, 248, 248, 0.7);
  border-radius: 10px;
  border: 2px solid #1a2051;
  margin-right: 3rem;
`;

const SearchInput = styled.input`
  background: rgba(248, 248, 248, 0.7);
  width: 12rem;
  height: 1rem;
  border: none;
  margin-left: 1rem;
  border-radius: 10px;
  border-right: 0px;
  border-top: 0px;
  boder-left: 0px;
  boder-bottom: 0px;
  &: focus {
    outline: none;
  }
`;

const SearchBtn = styled.div`
  border-right: 0px;
  border-top: 0px;
  boder-left: 0px;
  boder-bottom: 0px;
`;

const FormList = styled.div`
  display: flex;
  margin: 1rem 3rem;
`;
const PlusDiv = styled.div`
  width: 5rem;
  height: 10rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPlusIcon = styled(PlusIcon)`
  width: 2rem;
  height: 2rem;
  display: inline;
`;

const StyledSerachBtn = styled(SearchIcon)`
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
`;

function CoffeBeenList(ref) {
  //검색해야하는 변수
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  const searchChange = (event) => {
    //search안에 들어가 있는 value를 바꿈
    setSearchValue(event.target.value);
  };

  const clickSearch = () => {
    //검색을 클릭했을 때 실행되야할 기능 구현
    alert("검색 클릭");
  };

  const clickAddCofeebean = () => {};

  useEffect(() => {
    // 데이터베이스에서 데이터를 가져오는 API 요청
    setData([
      //이건 예시
      { id: 1, title: "example1", content: "This is example data 1" },
      { id: 2, title: "example2", content: "This is example data 2" },
      { id: 3, title: "example1", content: "This is example data 1" },
      { id: 4, title: "example1", content: "This is example data 1" },
      { id: 5, title: "example1", content: "This is example data 1" },
      { id: 6, title: "example1", content: "This is example data 1" },
      { id: 7, title: "example1", content: "This is example data 1" },
      { id: 8, title: "example1", content: "This is example data 1" },
      { id: 9, title: "example1", content: "This is example data 1" },
      { id: 10, title: "example1", content: "This is example data 1" },
      { id: 11, title: "example1", content: "This is example data 1" },
      { id: 12, title: "example1", content: "This is example data 1" },
      { id: 13, title: "example1", content: "This is example data 1" },
      { id: 14, title: "example1", content: "This is example data 1" },
      { id: 15, title: "example1", content: "This is example data 1" },
      { id: 16, title: "example1", content: "This is example data 1" },
      { id: 17, title: "example1", content: "This is example data 1" },
      { id: 18, title: "example1", content: "This is example data 1" },
      { id: 19, title: "example1", content: "This is example data 1" },
      { id: 20, title: "example1", content: "This is example data 1" },
      { id: 21, title: "example1", content: "This is example data 1" },
    ]);
  }, []);

  return (
    <Wrapper>
      <Header>
        <MenuInfo>
          <MainMenu>제작함</MainMenu>
          <SubMenu>기본 제작함</SubMenu>
        </MenuInfo>
        <SearchDiv>
          <SearchInput placeholder="검색하세요"></SearchInput>
          <SearchBtn onClick={clickSearch}>
            <StyledSerachBtn />
          </SearchBtn>
        </SearchDiv>
      </Header>

      <FormList>
        <Link to="/check">
          <CoffeeBean />
        </Link>
        <Link to="/about">
          <PlusDiv>
            <StyledPlusIcon />
          </PlusDiv>
        </Link>
      </FormList>
    </Wrapper>
  );
}

export default CoffeBeenList;
