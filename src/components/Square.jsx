//import { useState } from "react";
//rimuovo value
export default function Square({value, onSquareClick}) {

    //imposto var di stato che deve ricordare che la casella é stata cliccata valore inziale 'null'
    //const [value, setValue] = useState(null)

    // funzione che mi ritona un log allévento click
    //function handleClick() {
    // setValue ('X')//setvalore cambia la var di sato valore in modo dimanico
    //console.log('hai cliccato!!');

    //}

    return (
        <button onClick={onSquareClick} //esegue la funzione handleclick passata con le props
            className='square'>
            {value}
        </button>
    )
}