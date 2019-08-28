import React from "react";

//export default function(){
//    return <h1>Primeiro Componente Maroto</h1>
//}

// const ComponenteFuncao = () => <h1>Primeiro Componente Maroto</h1>;
const ComponenteFuncao = props => <h4>{props.children}</h4>;
export default ComponenteFuncao;
