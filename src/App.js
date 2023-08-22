import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
