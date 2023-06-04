/* eslint-disable no-unused-vars */
import BlogDetails from "./BlogDetails";
import Create from "./Create";
import NavBar from "./NavBar";
import Notfund from "./Notfund";
import Pocetna from "./Pocetna";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
 
 return (
    <Router>
    <div className="App">
      <NavBar/>
      <div className="sadrzaj"> 
      <Switch>
        <Route exact path="/">
          <Pocetna/>
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
        <Route path="/blog/:id">
          <BlogDetails/>
        </Route>
        <Route path="*">
          <Notfund/>
        </Route>
      </Switch>
      </div>
  </div>
  </Router>
  );
}

export default App;
