import "./styles/app.scss";
import Home from "./components/home";
import PetList from "./components/petlist";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/petlist">Go to pet List</Link>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/petlist" render={() => <PetList />} />
      </Switch>
    </div>
  );
}

export default App;
