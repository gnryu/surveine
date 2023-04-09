import React from "react";
import styled from "styled-components";
import CoffeBeenList from "./CoffeBeenList";
import { ReactComponent as DefaultProfile } from "../img/33242.svg";
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const SideMenu = styled.div`
  width: 16vw;
  height: 100vh;
  background: #111536;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubMenu = styled.div`
  width: 16vw;
  background: #111536;
  display: flex;
  flex-direction: column;
  align-items: left;
`;
const CoffeeBeanPage = styled.div`
  width: 84vw;
  height: 100vh;
  background: white;
`;

const ProfileConainer = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 3.5rem;
  background: white;
  margin-top: 3rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserName = styled.div`
  color: white;
  font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 19px;
line-height: 60px
  display: block;
  margin-bottom:1rem;
  margin-top:1rem;
  
`;

const SubMenuList = styled.div`
  color: white;
  font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 19px;
line-height: 60px
  display: block;
  margin-bottom:2rem;
  margin-left:2rem;
  
`;

const Bar = styled.div`
  width: 80%;
  height: 0rem;

  border: 0.5px solid rgba(255, 255, 255, 0.5);
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

const DefaultProfileSet = styled(DefaultProfile)`
  width: 5rem;
  height: 5rem;
  display: inline;
`;

const TopBar = styled.div`
  weight: 84vw;
  height: 10vh;
  background: white;
  display: flex;
  justify-content: left;
`;

const TopMenu = styled.p`
  color: #1a2051;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 900;
  font-size: 1.3rem;
  display: block;
  margin-left: 3rem;
`;

const CenterMenu = styled.div`
  width: 50%;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const LeftMenu = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: right;
`;
const LoginBtn = styled.button`
  margin-right: 3rem;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 900;
  font-size: 1rem;
  width: 6rem;
  height: 40px;
  background: white;
  border: 2px solid #2b234a;
  border-radius: 25px;
  display: block;
`;

const BlankPage = () => {
  return (
    <Wrapper>
      <SideMenu>
        <ProfileConainer>
          <DefaultProfileSet />
        </ProfileConainer>

        <UserName>이도경</UserName>
        <Bar></Bar>
        <SubMenu>
          <SubMenuList>GPS 설문함</SubMenuList>
          <SubMenuList>제작함</SubMenuList>
          <SubMenuList>참여함</SubMenuList>
        </SubMenu>
      </SideMenu>

      <CoffeeBeanPage>
        <TopBar>
          <CenterMenu>
            <TopMenu>Work Space</TopMenu>
            <TopMenu>Sand Box</TopMenu>
          </CenterMenu>
          <LeftMenu>
            <LoginBtn> Login </LoginBtn>
          </LeftMenu>
        </TopBar>
        <CoffeBeenList />
      </CoffeeBeanPage>
    </Wrapper>
  );
};

export default BlankPage;
