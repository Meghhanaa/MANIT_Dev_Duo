import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Sign from './component/Sign';
import PostSection from './component/PostSection.JSX';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Sign />} />
      </Routes>
    </Router>
  );
}

export default App;