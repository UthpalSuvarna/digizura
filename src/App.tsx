
import { Navbar } from './components/layout/Navbar';
import { HomePage } from './pages/home/HomePage';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <Footer />
    </main>
  );
}

export default App;
