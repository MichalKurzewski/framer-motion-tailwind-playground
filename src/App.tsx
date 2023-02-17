import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Page1 from "./components/pages/Page1";
import Page2 from "./components/pages/Page2";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-color h-screen">
      <NavBar />
      <div className="App container mx-auto px-4">
        <Routes>
          <Route path="/1" element={<Page1 />}></Route>
          <Route path="/2" element={<Page2 />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
