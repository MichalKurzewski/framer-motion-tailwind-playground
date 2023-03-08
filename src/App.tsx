import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

import Page1 from "./components/pages/Page1";
import Page2 from "./components/pages/Page2";
import Title from "./components/pages/Title";
import WelcomePage from "./components/pages/WelcomePage";
import Footer from "./components/pages/Footer";

export const links = {
  Home: <WelcomePage />,
  First: <Page1 />,
  Second: <Page2 />,
};

function App() {
  return (
    <div className="bg-color min-h-screen relative min-w-[400px]">
      <Title />
      <NavBar />
      <div className="App container mx-auto px-14 mt-6">
        <Routes>
          {Object.keys(links).map((link, index) => (
            <Route
              key={index}
              path={"/" + link}
              element={Object.values(links)[index]}
            />
          ))}
          <Route key="welcome" path="/" element={<WelcomePage />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
