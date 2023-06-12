import Header from "./components/Header";
import Slide from "./components/Slide";
import Contact from "./components/Contact";
import Nav_food from "./components/Nav_food";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header></Header>
            <Slide></Slide>
            <Nav_food />
            <Contact />
          </Route>
          <Route path="/order">
            <Header></Header>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
