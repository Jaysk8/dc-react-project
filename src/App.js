import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WatchList from "./components/WatchList";
import Donate from "./components/Donate";

function App() {
  return (
    <Router>
      <div className="App">
        < Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              < Home />
            </Route>
            <Route path="/watchlist">
              < WatchList />
            </Route>
            <Route path="/donate">
              < Donate />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
