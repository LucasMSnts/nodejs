import React, { Component } from 'react'
import ComponenteComEstado from './ComponenteComEstado'

class ComponenteControlado extends Component {
    state = {
        inputValue: ''
    }

    render() {
        console.log('estamos no render', this.state)
        return (
            <div style={{ padding: 10 }}>
                <h2>Insira o Texto do Painel</h2>
                <input type='text' placeholder='Insira o texto...' 
                    value={this.state.inputValue}
                    onChange={event => (
                        //console.log(this.state.inputValue), 
                        this.setState({ inputValue : event.target.value})
                        )
                    }
                />
                <br />
                <br />
                <ComponenteComEstado text={this.state.inputValue}/>
            </div>
        )
    }
}

export default ComponenteControlado