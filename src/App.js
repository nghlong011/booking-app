import Header from "./components/Header";
import Slide from "./components/Slide";
import Contact from "./components/Contact";
import Nav_food from "./components/Nav_food";
import Bestseller from "./components/Order/Bestseller";
import Combo1 from "./components/Order/Combo1";
import ComboN from "./components/Order/ComboN";
import Noodles from "./components/Order/Noodles";
import Drinks from "./components/Order/Drinks";
import Nav_order from "./components/Order/Nav_order";
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
            <Header />
            <Nav_order />
            <Bestseller />
            <Combo1 />
            <ComboN />
            <Noodles />
            <Drinks />
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
