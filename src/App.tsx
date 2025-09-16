import Navbar from './Components/layouts/Navbar';
import { HomePage } from './Components/sections/HomePage';
import { LogosPage } from './Components/sections/LogosPage';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HomePage />
        <LogosPage />
      </main>
    </>
  );
}

export default App;