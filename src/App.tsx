import Squares from "./Components/backgrounds/Squares";
import Navbar from "./Components/layouts/Navbar";
import { AboutPage } from "./Components/sections/AboutPage";
import { HomePage } from "./Components/sections/HomePage";
import { LogosPage } from "./Components/sections/LogosPage";

function App() {
  return (
    <>
      <div className="fixed inset-0 z-1 pointer-events-none">
        <Squares
          speed={0.3}
          borderColor="#271E37"
          squareSize={25}
          hoverFillColor="rgba(153, 51, 153)"
          direction="down"
        />
      </div>
      <Navbar />
      <main>
        <HomePage />
        <LogosPage />
        <AboutPage />
      </main>
    </>
  );
}

export default App;
