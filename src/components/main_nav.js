import React from "react";

import {
    Link,
    withRouter
  } from 'react-router-dom'

class MainNav extends React.Component {

    handleLogoutClick = (e) => {
        e.preventDefault();
        
        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('credencias');
        
        //Emite um evento que é capturado pelo componente pai.
        this.props.onLogout();

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
                  {this.props.usuario
                  ? <a href="#" onClick={this.handleLogoutClick} className="right">Logout</a>
                  : <Link to="/login" className="right">Login</Link> }
                  
                </li>
                { this.props.usuario ?
                <li className="right">
                    <b>{this.props.usuario.email}</b>
                </li>
                : ""}
              </ul>
            </div>
            
          </nav>
          )
    }
}

export default withRouter(MainNav)