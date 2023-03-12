import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

import Page1 from "./components/pages/Page1/Page1";
import Page2 from "./components/pages/Page2/Page2";
import Title from "./components/navbar/Title";
import HomePage from "./components/pages/HomePage/HomePage";
import SidePanel from "./components/sidePanel/SidePanel";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
export const links = {
  Home: <HomePage />,
  First: <Page1 />,
  Second: <Page2 />,
};

const App: React.FC = () => {
    const location = useLocation();
  return (
    <main className="bg-color min-h-screen relative min-w-[400px]">
      <SidePanel />

      <Title
        topWord="Michal's"
        middleWord="Framer Motion"
        bottomWord="Playground"
      />
      <NavBar />
      <div className="App mx-auto px-1 py-6">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {Object.keys(links).map((link, index) => (
              <Route
                key={index}
                path={"/" + link}
                element={Object.values(links)[index]}
              />
            ))}
            <Route key="welcome" path="/" element={<HomePage />}></Route>
          </Routes>
        </AnimatePresence>
      </div>
    </main>
  );
};

export default App;
