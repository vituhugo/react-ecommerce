import React, { Component } from 'react';
import Home from './components/pages/home';
import Clientes from './components/pages/clientes';
import Login from './components/pages/login';
import "materialize-css/dist/css/materialize.min.css";
import MainNav from './components/main_nav';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
class App extends Component {

  constructor(props) {
    super(props)
  }
  
  handleLogoutClick = (e) => {
    e.preventDefault();

    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('credencias');

    this.props.history.push("/login");
  }
  render() {
    return (
        <div className="App">
            <Router>
              <MainNav />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/clientes" component={Clientes}></Route>
                  <Route exact path="/login" component={Login}></Route>
                </Switch>
              </div>
            </Router>
        </div>
    );
  }
}

export default App;
