import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Footer from './components/molecules/footer/footer';
import Navbar from './components/molecules/navbar/navbar'; // Importa el Navbar
import './styles/global.css'; // Importa el CSS global

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Navbar />
    <App />
    <Footer />
  </BrowserRouter>
);