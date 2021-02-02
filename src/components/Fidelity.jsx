import React, {Component} from 'react';
import Cliente from './Clienti'

export default class Fidelity extends Component{


    constructor(props){
        console.log("Avviato il costruttore");
        super(props)
    
        
    }


    shouldComponentUpdate(){
        return false;
    }

    state = {
        clienti:[
                {nome:'Beppe', bollini: '29393', data:'03/03/1989'}, 
                {nome:'Beppe2', bollini: '293293', data:'03/03/1989'},
                {nome:'Beppe3', bollini: '293923', data:'23/03/1989'},
            ]
    }

    modifcaDati = (Bollini) => {

        console.log("hai cliccato un tasto");{}

        this.setState(
            {
                clienti:[
                    {nome:'Beppe', bollini: Bollini, data:'13/12/2020'}, 
                    {nome:'Beppe2', bollini: '4040404040', data:'03/03/1989'},
                    {nome:'Beppe3', bollini: '293923', data:'23/03/1989'},
                ]
            }
        )

    }

    modifcaDati2 = (event) =>{
        this.setState(
            {
                clienti:[
                    {nome:'Beppe', bollini: 1500, data:'13/12/2020'}, 
                    {nome: event.target.value, bollini: '4040404040', data:'03/03/1989'},
                    {nome:'Beppe3', bollini: '293923', data:'23/03/1989'},
                ]
            }
        )

    }
    render () {

        console.log("REnder avviato")
    return (
        <div>
            <Cliente modifica={this.modifcaDati.bind(this,1000)} nome = {this.state.clienti[0].nome} bollini= {this.state.clienti[0].bollini} data={this.state.clienti[0].data}></Cliente>    
            <Cliente modifcaNome={this.modifcaDati2} nome = {this.state.clienti[1].nome} bollini= {this.state.clienti[1].bollini} data={this.state.clienti[1].data}>Prova</Cliente>
            <Cliente nome = {this.state.clienti[2].nome} bollini= {this.state.clienti[2].bollini} data={ this.state.clienti[2].data}></Cliente>
        <button onClick={this.modifcaDati.bind(this,2000)}>Modifica</button>
        </div>
        )
    }

    componentDidMount(){
        console.log("ultimo componente");
    }

    componentWillMount(){

    }

    componentWillUnmount(){
        console.log("componente chiuso");
    }
}