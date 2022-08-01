import './App.css';
import NavBar from './components/js/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clock from './components/js/Clock';
import TicTacToe from './pages/TicTacToe';
import Calculator from './pages/Calculator';
import Resume from './pages/Resume';
import ToDoList from './pages/ToDoList'

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Clock />
        <Routes>
            <Route exact path="/my-website" element={<Home />}/>
            <Route exact path="/resume" element={<Resume />}/>
            <Route exact path="/projects" element={<Projects />}/>
            <Route exact path="/projects/tictactoe" element={<TicTacToe />}/>
            <Route exact path="/projects/calculator" element={<Calculator />}/>
            <Route exact path="/projects/todolist" element={<ToDoList />}/>
            <Route exact path="/contact" element={<Contact />}/> 
            {/* 
            <Route exact path="/resume" element={<OldResume />}/>
            <Route exact path="/oldtesting" element={<OldTesting />}/>
            */}
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
