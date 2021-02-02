import React, {Component} from 'react';
import './Contatore.css'
import Bottone from './Bottone'
class contatore  extends Component{

    state= {
        
        contatore:0
                

    }

    render(){

    return (
        <div className="Contatore">
      
      
        <Bottone valore ={1} modifica={this.stampa.bind(this,1)}></Bottone>
        <Bottone valore ={5} modifica = {this.stampa.bind(this,5)}></Bottone>
        <Bottone valore ={10} modifica = {this.stampa.bind(this,10)}></Bottone>
      
      
        <span className="valore">{this.state.contatore}</span>
    </div>
    )

   
    
}   

stampa = (valore) => { 

    this.setState(
        
     (prevState) =>
        {
          return { contatore: prevState.contatore + valore}
        }
    )

} 

}

export default contatore;