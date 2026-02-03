import { useState } from "react";
//rimuovo value
export default function Square() {

    //imposto var di stato che deve ricordare che la casella é stata cliccata valore inziale 'null'
    const [valore, setValore] = useState(null)

    // funzione che mi ritona un log allévento click
    function handleClick() {
        setValore ('X')//setvalore cambia la var di sato valore in modo dimanico
        console.log('hai cliccato!!');

    }

    return (
        <button onClick={handleClick} 
        className='quadrato'>{valore}</button>
    )
}