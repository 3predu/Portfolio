import Squares from "./Components/backgrounds/Squares";
import Navbar from "./Components/layouts/Navbar";
import { AboutPage } from "./Components/sections/AboutPage";
import { HomePage } from "./Components/sections/HomePage";

function App() {
  return (
    <>
      <div id="background" className="fixed inset-0 z-[-1]">
        <Squares
          speed={0.3}
          borderColor="#271E37"
          squareSize={25}
          direction="down"
        />
      </div>
      <Navbar />
      <main>
        <HomePage />
        <AboutPage />
      </main>
    </>
  );
}

export default App;
