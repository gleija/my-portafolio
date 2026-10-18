
import { Header } from "./components/Header/Header";
import { About } from "./sections/About/About";
import { Experience } from "./sections/Experience/Experience";
import { Skills } from "./sections/Skills/Skills";
import { Projects } from "./sections/Projects/Projects";

import "./App.css";

const App = (): React.JSX.Element => {
  return (
    <main className="portfolio">
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </main>
  );
};

export default App;
