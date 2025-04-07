import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import BaseRoute from "./pages/BaseRoute";
import Loader from "./components/General/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const MIN_LOADING_TIME = 1000;
    const startTime = Date.now();

    const handlePageLoad = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = MIN_LOADING_TIME - elapsed;

      if (remainingTime > 0) {
        setTimeout(() => setIsLoading(false), remainingTime);
      } else {
        setIsLoading(false);
      }
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
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
