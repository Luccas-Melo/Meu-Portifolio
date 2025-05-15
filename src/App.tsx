
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import BoltApp from './bolt/App';
import './bolt/index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store/*" element={<Store />} />
        <Route path="/bolt/*" element={<BoltApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;