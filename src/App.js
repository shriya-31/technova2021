import "./styles/app.scss";
import Home from "./components/home";
import PetList from "./components/petlist";
import AnimalSelection from "./components/onboarding1";
import PersonalitySelection from "./components/onboarding2";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";
import Bookmarks from "./components/bookmarks";
import Login from "./components/login";
import Register from "./components/register";
import BookSession from "./components/book";
import { Switch, Route, Link } from "react-router-dom";
import Meeting from "./components/meeting";
import dogs from "./database";

function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link>
      <Link to="/register">Get Started</Link>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/petlist" render={() => <PetList dogs={dogs} />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/register" render={() => <Register />} />
        <Route
          exact
          path="/animal-selection"
          render={() => <AnimalSelection />}
        />
        <Route
          exact
          path="/personality-selection"
          render={() => <PersonalitySelection />}
        />
        <Route exact path="/dashboard" render={() => <Dashboard />} />
        <Route exact path="/profile/:id" component={Page} />
        <Route exact path="/bookmarks" render={() => <Bookmarks />} />
        <Route
          exact
          path="/select-meeting-time"
          render={() => <BookSession />}
        />
        <Route exact path="/confirmed-meeting" render={() => <Meeting />} />
      </Switch>
    </div>
  );
}

function Page({ match }) {
  let params = match.params;
  let currentDog = dogs.find((dog) => {
    console.log(dog.id === params.id);
    return dog.id === params.id;
  });
  return <Profile dog={dogs.find((dog) => dog.id === params.id)} />;
}

export default App;
