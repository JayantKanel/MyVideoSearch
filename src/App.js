import "bootstrap/dist/css/bootstrap.min.css";
import Search from './component/searchbar';
import Login from "./component/login";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <Router>
     <Route exact path='/'>
       <Redirect to="login" />
     </Route>
      <Route path="/login" component={Login}/>
      <Route path="/search" component={Search}/>
      </Router>
      {/* <Login></Login> */}
    </>
  );
}

export default App;
