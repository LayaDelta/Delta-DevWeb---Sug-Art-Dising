import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // 👈 CAMBIA a HashRouter
import App from './App';
// 👇 Asegúrate que estas rutas son correctas (revisa mayúsculas y rutas)
import Footer from './components/molecules/footer/footer'; // 👈 Revisa mayúsculas
import Navbar from './components/molecules/navbar/navbar'; // 👈 Revisa mayúsculas
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter> {/* 👈 CAMBIA a HashRouter */}
    <Navbar />
    <App />
    <Footer />
  </HashRouter>
);