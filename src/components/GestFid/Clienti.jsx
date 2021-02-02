import React, { Component } from 'react';

export default class ClientiComponent extends Component {

    state = {
        clienti: [
            {nome: 'Nicola La Rocca', bollini: '1580', data: '02/01/2020'},
            {nome: 'Mario Bianchi', bollini: '830', data: '23/12/2019'},
            {nome: 'Lucia La Rocca', bollini: '140', data: '15/01/2020'},
            {nome: 'Giuseppe Garibaldi', bollini: '560', data: '18/01/2020'},
        ] 
    }    

    render() {
        return ( 
            <div className="ClientiComponent">
                <h1>Clienti Disponibili</h1>

            <table>
                <thead>
                    <tr>
                        <th>Nominativo</th>
                        <th>Bollino</th>
                        <th>Ultima Spesa</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.clienti.map (
                            cliente => 
                            <tr>
                                <td>{cliente.nome}</td>
                                <td>{cliente.bollini}</td>
                                <td>{cliente.data}</td>
                            </tr>
                        )
                    }
                
                </tbody>
            </table>

            </div>
        )
    }
}