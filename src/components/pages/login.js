import React from 'react'
import api from '../../api/ecommerce';

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            form: {
                username: "",
                password: ""
            }
        }
    }

    handleInput = e => {
        let { value, name } = e.target;

        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                //username: value
                [name]: value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        sessionStorage.setItem("credenciais", JSON.stringify(this.state.form))
        api.get("/perfil").then(response => {
            sessionStorage.setItem("usuario", JSON.stringify(response.data))
            this.props.history.push("/");
        }).catch(error => {
            if (401 === error.response.status) {
                return alert("Usuário ou senha não conferem");
            }
            alert("Erro não esperado");
        });
    }

    render() {
        return (
        <div onSubmit={this.handleSubmit}>
            <h2>Formulário de Login</h2>
            <form>
                <div>
                    <label>Username</label>
                    <input name="username" type="text" value={this.state.form.username} onChange={this.handleInput} />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" value={this.state.form.password} onChange={this.handleInput} />
                </div>
                <button className="btn right">Entrar</button>
            </form>
        </div>
        )
    }
}