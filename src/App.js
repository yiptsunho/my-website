import './App.css';
import Navbar from './Components/js/Navbar';
import Home from './Components/Pages/Home';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clock from './Components/js/Clock';
import TicTacToe from './Components/Pages/TicTacToe';
import Calculator from './Components/Pages/Calculator';
import Resume from './Components/Pages/Resume';
import ToDoList from './Components/Pages/ToDoList'

function App() {

    /*const scrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0,0);
    }, [location]);
  }*/


  return (
    <>
      <Router>
        <Navbar />
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
