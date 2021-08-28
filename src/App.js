import "./styles/app.scss";
import Home from "./components/home";
import PetList from "./components/petlist";
import Login from "./components/login";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/petlist">Go to pet List</Link>
      <Link to="/login">Go to login page </Link>
      <Switch>
        <Route exact path="/petlist" render={() => <PetList />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/" render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
