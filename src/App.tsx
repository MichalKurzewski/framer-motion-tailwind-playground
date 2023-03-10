import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

import Page1 from "./components/pages/Page1";
import Page2 from "./components/pages/Page2";
import Title from "./components/navbar/Title";
import WelcomePage from "./components/pages/WelcomePage";
import SidePanel from "./components/pages/SidePanel/SidePanel";

export const links = {
  Home: <WelcomePage />,
  First: <Page1 />,
  Second: <Page2 />,
};

const App: React.FC = () => {
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
    </main>
  );
};

export default App;
