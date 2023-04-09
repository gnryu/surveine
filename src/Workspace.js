import './App.css';
import SideNavi from './SideBar/SideNavi';
import Nav from './TopBar/Nav';


function Workspace() {
  return (
   <div className='container'>
    <Nav/>
    {/* 탑 네비게이션바 */}
    <SideNavi/>
    {/* 사이드 네이게이션바 */}
   </div>
  
  );
}

export default Workspace;
