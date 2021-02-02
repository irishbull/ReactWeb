import React, { Component } from 'react';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomeComponent from './Welcome';
import ClientiComponent from './Clienti';

export default class GestFidApp extends Component {

    render() {
        return ( 
            <div className="GestFidApp">
                
                <Router>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome/:userid" component={WelcomeComponent} />
                        <Route path="/clienti" component={ClientiComponent} />
                        <Route  component={ErrorComponent} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

function ErrorComponent() {
    return <div>Errore. Pagina non Trovata!</div>
}

class LoginComponent extends Component {

    state = {
        userid: '',
        password: '',
        isLogged: false,
        noLogged: false
    }

    render() {
        return ( 
            <div>
                <p>Accedi alla App GestFid</p>
                Nome Utente: <input type="text" name="userid" value={this.state.userid} onChange={this.GestMod} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.GestMod} />
                <button onClick={this.Login}>Accedi</button>
                <ConnexOkMsg isLogged={this.state.isLogged}  /> 
                <ConnexKoMsg isNoLogged={this.state.noLogged}  /> 
            </div>
        )
    }

    Login = () => {
        console.log(this.state.userid, this.state.password);

        if (this.state.userid === "Nicola" &&  this.state.password === "123_Stella")
        {
            this.props.history.push(`/welcome/${this.state.userid}`); //ALT + 0096 | ALT GR + '
            /*
            this.setState({isLogged: true})
            this.setState({noLogged: false})
            */
        }
        else
        {
            this.setState({isLogged: false})
            this.setState({noLogged: true})
        }

    }

    GestMod = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }
}

function ConnexOkMsg(props) { 
    if (props.isLogged) {
        return <div><h3>Connessione Eseguita con Successo</h3></div>
    }

    return null;
}

function ConnexKoMsg(props) { 
    if (props.isNoLogged) {
        return <div><h3>Connessione Fallita</h3></div>
    }

    return null;
}



