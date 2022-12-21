import './App.css';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from "./components/pages/Home"
import Outside from "./components/pages/Outside"
import Exploring from "./components/pages/Exploring"
import Show from "./components/pages/Show"

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
