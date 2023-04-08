import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SideNavi from './SideBar/SideNavi';
import NaviTwo from './TopBar/NaviTwo';

function Workspace() {
  return (
    <div>
       <div className='container'>
        <NaviTwo/>
        <SideNavi/>
       </div>
    </div>
  );
}

export default Workspace;
