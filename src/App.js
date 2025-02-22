import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import BaseRoute from "./pages/BaseRoute";
import Loader from "./components/General/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<BaseRoute />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
