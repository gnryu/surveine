import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SideNavi from './SideBar/SideNavi';


function Workspace() {
  return (
    <div>
       <div className='container'>
        <SideNavi/>
       </div>
    </div>
  );
}

export default Workspace;
