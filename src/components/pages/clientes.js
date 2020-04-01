import React from 'react'
import api from './../../api/ecommerce';
export default class Clientes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clientes: []
        };
    }

    componentDidMount() {
        api.get("/clientes").then(response => {
            this.setState({
                ...this.state,
                clientes: response.data
            });
        });
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>EMAIL</th>
                        <th>TELEFONE</th>
                        <th>CPF</th>
                        <th>RG</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.clientes.length ? this.state.clientes.map(cli => (
                        <tr key={cli.id}>
                            <td>{cli.id}</td>
                            <td>{cli.nome}</td>
                            <td>{cli.email}</td>
                            <td>{cli.telefone}</td>
                            <td>{cli.cpf}</td>
                            <td>{cli.rg}</td>
                        </tr>
                    )) : <tr><td colSpan="6">Nenhum cliente encontrado</td></tr>}
                    
                </tbody>
            </table>
        )
    }
}