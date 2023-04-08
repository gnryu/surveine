import FormCreation from "./pages/FormCreation";

import { Route, Routes } from "react-router-dom";
import BlankPage from "./pages/BlankPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<BlankPage />} />
      <Route path="/about" element={<FormCreation />} />
    </Routes>
  );
}
export default App;
