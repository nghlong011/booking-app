import Order from "./router/Order";
import GioHang from "./components/GioHang";
import Home from "./router/Home";
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
          <Route path="/" exact component={Home}></Route>
          <Route path="/order" component={Order}></Route>
          <Route path="/cart">
            <GioHang />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
