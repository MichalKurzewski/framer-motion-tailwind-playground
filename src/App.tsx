import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

import Page1 from "./components/pages/Page1";
import Page2 from "./components/pages/Page2";
import Title from "./components/navbar/Title";
import WelcomePage from "./components/pages/WelcomePage";
import Footer from "./components/pages/Footer";
import {atom} from 'jotai';

export const links = {
  Home: <WelcomePage />,
  First: <Page1 />,
  Second: <Page2 />,
};
export const isMenuToggledAtom = atom(false);

function App() {
  return (
    <main className="bg-color min-h-screen relative min-w-[400px]">
      <Title />
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
      <Footer />
    </main>
  );
}

export default App;
