import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home/Home"
import Search from "./Pages/Search/Search"
import Error from "./Pages/Error/Error"
import Info from "./Pages/Info/Info"
import Test from './Pages/Test/Test';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/Search" component={Search}/>
        <Route path="/Info" component={Info}/>
        <Route path="/Error" component={Error}/>
        <Route path="/Test/:searchedCountry" component={Test}/>
      </Switch>
    </div>
  );
}

export default App;
