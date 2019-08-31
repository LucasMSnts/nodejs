import React from 'react'

class ComponenteComEstado extends React.Component {
    constructor(props){
        super(props); //NÃO INTERESSA, APENAS COLOQUE

        //O this é o CARA para se acessar funções e atributos da classe
        this.state ={
            infoText: "Componente fechado",
            height: 35
        };
    }

    componentDidMount() {
        // chamadas de API/endpoints eh aqui e atualiza o estado
        console.log('--- passou no componentDidMount ---')
        setTimeout(() => {
            this.setState({
                infoText: 'TESTE MOUNT'
            })
        }, 2000)
    }

    // Isso aqui é consequencia da mudança de estado ou de props
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            this.fechar("fechou");
        }
    }

    componentWillUnmount() {
        console.log("--- Passou no componentWillUnmount ---")
    }

    abrir =() => {
        //a causa
        // O setState SEMPRE chama o render novamente
        this.setState({height: 200, infoText: "Componente Aberto" });
    }

    // fechar = texto => {
    //     this.setState({height: 35, infoText: "Componente Aberto" });
    // }

    fechar = texto => {
        // O setState SEMPRE chama o render novamente
        this.setState({height: 35, infoText: texto });
    }
    
    render(){
        const objetoStilo = {
            width: 400, 
            height: this.state.height, 
            padding: 10,
            color: "black",
            backgroundColor: "lightGray",
            overflow: "hidden"
        };

       return( 
            <div style={{ padding: 10 }}>
            <p>{this.props.text}</p>
            <div style={objetoStilo}>
                {this.state.infoText}
            </div>              
            
                <button type="button" onClick={this.abrir}>
                    Abrir
                </button>           
                {/* <button type="button" onClick={this.fechar}>
                    Fechar
                </button>            */}
                <button type="button" onClick={() =>this.fechar("rejdha")}>
                    Fechar
                </button>
            </div>
       );
    }
}

export default ComponenteComEstado;