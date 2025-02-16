import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseRoute from "./pages/BaseRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<BaseRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
