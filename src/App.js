import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/setup" component={Setup} />
      </Switch>
    </Router>
  );
}

export default App;
