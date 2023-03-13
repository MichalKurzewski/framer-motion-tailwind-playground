import { Route, Routes } from "react-router-dom";
import NavBar from "./components/atomic/Organisms/navbar/NavBar";

import Page1 from "./components/pages/Page1/Page1";
import Page2 from "./components/pages/Page2/Page2";
import Title from "./components/atomic/Organisms/navbar/Title";
import HomePage from "./components/pages/HomePage/HomePage";
import SidePanel from "./components/atomic/Organisms/sidePanel/SidePanel";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export const links = {
  Home: <HomePage />,
  First: <Page1 />,
  Second: <Page2 />,
};

const App: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  return (
    <main className="min-h-screen relative min-w-[400px]">
      <section id="absolutes">
        <NavBar />
        <Title
          topWord="Michal's"
          middleWord="Framer Motion"
          bottomWord="Playground"
        />
        <SidePanel />
      </section>
      <div className="App mx-auto px-1 py-6">
        <LayoutGroup>
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
        </LayoutGroup>
      </div>
    </main>
  );
};

export default App;
