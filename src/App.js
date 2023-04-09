import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Workspace from './Workspace';
// 워크스페이스페이지 탑네비+사이드바
import Navi from './TopBar/Navi';
//일반페이지 탑네비바

function App() {
  return (
    <BrowserRouter>
    <Workspace/> 
    </BrowserRouter>
  );
}

export default App;
