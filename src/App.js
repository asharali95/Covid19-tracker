import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import Info from "./Pages/Info/Info";
import Test from "./Pages/Test/Test";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Info/:searchedCountry" component={Info} />
        <Route path="/Test" component={Test} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
