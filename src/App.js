import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Workspace from './Workspace';
import Navi from './TopBar/Navi';

function App() {
  return (
    <BrowserRouter>
    <Workspace/>
    </BrowserRouter>
  );
}

export default App;
