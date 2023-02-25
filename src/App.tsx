import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

import Page1 from "./components/pages/Page1";
import Page2 from "./components/pages/Page2";

export const links = {
  First: <Page1 />,
  Second: <Page2 />,
};


function App() {
  return (
    <div className="bg-color h-screen">
      <NavBar />
      <div className="App container mx-auto px-4">
        <Routes>
          {Object.keys(links).map((link, index) => (
            <Route
              key={index}
              path={"/" + link}
              element={Object.values(links)[index]}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
