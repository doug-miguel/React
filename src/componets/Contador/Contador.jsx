import './Contador.css'
import React, { Component } from "react"

import Display from "./Displey"
import Passoform from "./Passoform"
import Botao from "./Botao"

class Contador extends Component {

    state = {
        numero: this.props.numeroinicial || 0,
        passo: this.props.passoinicial || 1,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setpasso = (novopasso) => {
        this.setState({
            passo: + novopasso
        })
    }

    render() {
        return (
            <div className="contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <Passoform passo={this.state.passo} setpasso={this.setpasso}/>
                <Botao oninc={this.inc} ondec={this.dec}/>
            </div>
        )
    }
}

export default Contador