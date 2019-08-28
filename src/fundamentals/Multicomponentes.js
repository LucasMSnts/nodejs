import React, { Fragment } from "react";
import ComponenteFuncao from "./ComponenteFuncao";
import ComponenteClasse from "./ComponenteClasse";

// export default () => (
//     <>
//         <ComponenteFuncao />
//         <ComponenteClasse />
//     </>
// );

// export default () => [<ComponenteFuncao />, <ComponenteClasse />];

export default () => (
    <Fragment>
        <ComponenteFuncao />
        <ComponenteClasse />
    </Fragment>
);