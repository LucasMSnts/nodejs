import React, { useState, useEffect } from 'react'

export default () => {
    const [ count, setCount ] = useState(0);
    const [ texto, setTexto] = useState("Eu uso hooks e sou doidão");
    const [objeto, setObjeto] = useState({nome: "teste"});
    
    useEffect(() => {
        console.log("Rolou o Mount");

        return () => {
            console.log("Isso é o Unmount");
        }
    }, []);

    useEffect(() => {
        console.log("Rolou o Update");
        document.title = `Você clicou ${count} vezes`;
    }, [count, texto]);


    return(
        <div>
            {objeto.nome}
            <h3>{texto}</h3>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>Mais um</button>
        </div>
    );
};

// class ContadorClasse extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             count: 0
//         };
//     }
//     render(){
//         return (
//             <div>
//                 <p>Você clicou {this.state.count} vezes</p>
//                 <button onClick={() => this.setState({ count: this.state.count + 1 })}>Mais um</button>
//             </div>
//         );
//     }
// }