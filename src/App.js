import './App.css';
import './tooplate_style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import  AddNote  from './components/AddNote';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import NoteState from './context/notes/NoteState';
import Notes from './components/Notes';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <div id="slider">
            <div id="tooplate_wrapper">
              <Navbar />
              <div id="content">
                <div class="scroll">
                  <div class="scrollContainer">
                    <Switch>
                      <Route exact path="/">
                        <AddNote/>
                      </Route>
                      <Route exact path="/notes">
                        <Notes />
                      </Route>
                      <Route exact path="/about">
                        <About />
                      </Route>
                      <Route exact path="/contact">
                        <Contact />
                      </Route>
                      <Route exact path="/login">
                        <Login />
                      </Route>
                      <Route exact path="/signup">
                        <Signup />
                      </Route>
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
