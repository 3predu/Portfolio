import Navbar from './Components/layouts/Navbar';
import { AboutPage } from './Components/sections/AboutPage';
import { HomePage } from './Components/sections/HomePage';
import { LogosPage } from './Components/sections/LogosPage';

function App() {
  return (
    <>
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