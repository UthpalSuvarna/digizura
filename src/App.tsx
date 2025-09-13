
import { Navbar } from './components/layout/Navbar';
import { HomePage } from './pages/home/HomePage';
import { FeaturedSection } from './pages/home/FeaturedSection';
import './App.css';

function App() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <FeaturedSection />
    </main>
  );
}

export default App;
