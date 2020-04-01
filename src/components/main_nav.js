import React from "react";

import {
    BrowserRouter as Router,
    Link,
    withRouter
  } from 'react-router-dom'

class MainNav extends React.Component {

    handleLogoutClick = (e) => {
        e.preventDefault();

        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('credencias');

        this.props.history.push("/login");
    }

    render() {
        return (
        <nav>
            <div className="container">
              <ul>
                <li>
                  <Link to="/">Página principal</Link>
                </li>
                <li>
                  <Link to="/clientes">Clientes</Link>
                </li>
                <li className="right">
                  {sessionStorage.getItem('usuario') 
                  ? <a href="#" onClick={this.handleLogoutClick} className="right">Logout</a>
                  : <Link to="/login" className="right">Login</Link> }
                  
                </li>
              </ul>
            </div>
            
          </nav>
          )
    }
}

export default withRouter(MainNav)