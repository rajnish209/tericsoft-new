
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Searchemployee from './Components/Searchemployee';

function App() {
  return (
    <div className="App">

<Switch>
      <Route exact path ="/">
      <Home/>
      </Route>
    {/* <Home/> */}
    <Route  path ="/component/Search">
      <Searchemployee/>
      </Route>
    {/* <Searchemployee/> */}
    </Switch>
    </div>
  );
}

export default App;
