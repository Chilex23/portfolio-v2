import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Overlay from './Components/Overlay/Overlay';
import ProjectDetails from './Pages/Project-Details/Project-Details';
import HomePage from './Pages/Homepage/Homepage';

function App() {
  return (
    <div className="dark:bg-stone-900 dark:text-gray-300">
      <Router>
        <NavBar />
        <Overlay />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects/:projectId' element={<ProjectDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
