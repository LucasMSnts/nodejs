import React from 'react';
import ItemDaLista from "./ItemList";

const List = props => {

    // const objeto = {
    //     para: "bonito",
    //     jaque: "Linda de morrer e boleira",
    //     lua: "Namorada do Nakamuta",
    //     amigos: {
    //         nakamuta: "tchutchucão"
    //     }
    // }

    // const data = props.data;
    // const { data } = props;

    // const { jaque, para, lua } = objeto
    // const { nakamuta } = objeto.amigos

    const { data = [] } = props;

    const gerarItems= () => {
        // return data.map(dataItem => <ItemDaLista text={dataItem} />);
        return data.map(dataItem => <ItemDaLista>{dataItem}</ItemDaLista>);
    };
    
    return <ul>{gerarItems()}</ul>;
};

export default List;