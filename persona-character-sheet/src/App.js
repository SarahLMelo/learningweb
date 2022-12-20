import './App.css';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from "./pages/Home"
import Outside from "./pages/Outside"
import Exploring from "./pages/Exploring"
import Show from "./pages/Show"
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} > </Route>
        <Route path="/outside" element={<Outside />} > </Route>
        <Route path="/exploring" element={<Exploring />} > </Route>
        <Route path="/show" element={<Show />} > </Route>
      </Routes>

    </Router>
);
}

export default App;
