import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Authors from './views/authors';
import EditAuthor from "./views/editAuthor";
import NewAuthor from "./views/newAuthor";

function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/authors" />

        <Route exact path="/authors">
          <Authors />
        </Route>

        <Route exact path="/authors/new">
          <NewAuthor />
        </Route>

        <Route exact path="/authors/:id">
          <EditAuthor />
        </Route>

      </Switch>
    </div>
  );
}

export default App;