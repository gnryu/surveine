import FormCreation from "./pages/FormCreation";

import { Route, Routes } from "react-router-dom";
import BlankPage from "./pages/BlankPage";
import FormCheck from "./pages/FormCheck";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BlankPage />} />
      <Route path="/about" element={<FormCreation />} />
      <Route path="/check" element={<FormCheck />} />
    </Routes>
  );
}
export default App;
