import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import Configure from "./pages/configure";
import { Preview } from "./pages/preview";
import Deploy from "./pages/deploy";
import Docs from "./pages/docs";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/configure" element={<Configure />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/deploy" element={<Deploy />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
