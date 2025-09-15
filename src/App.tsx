
import { Navbar } from './components/layout/Navbar';
import { HomePage } from './pages/home/HomePage';
import { FeaturedSection } from './pages/home/FeaturedSection';
import { PlatformSkills } from './pages/home/PlatformSkills';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <FeaturedSection />
      <PlatformSkills />
      <Footer />
    </main>
  );
}

export default App;
