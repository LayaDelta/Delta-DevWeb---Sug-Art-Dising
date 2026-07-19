import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './i18n';
import Footer from './components/molecules/footer/Footer';
import Navbar from './components/molecules/navbar/Navbar';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter> {/* 👈 CAMBIA a HashRouter */}
    <Navbar />
    <App />
    <Footer />
  </HashRouter>
);