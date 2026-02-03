import { useState } from "react"
import Square from "./square"

export default function Board() {

    //imposto varaibile di stato
    const [squares, setSquares] = useState(Array(9).fill(null)) //crea un array di 9 elementi con value null
    //const [squares, setSquares] = useState([1,2,3,4,5,6,7,8,9])

    //imposto var di stato che gestisce se nel quadrato cé una x oppure una o (booleana)
    const [xIsNext, SetXIsnext] = useState(true)

    //funzione che gestisce il click
    function handleClick(i) {  //'i' funge sa segna posto
        if (squares[i]) { //se la casella é gua occupata il return blocca la funzione e il codice che viene dopo non é eseguiti
            
            return;
        }
        const nextSquares = squares.slice(); // con il metodo slice mi creo una copia dell'array orginale
        if (xIsNext) {
            nextSquares[i] = 'X'
        } else {
            nextSquares[i] = 'O'
        }
        //nextSquares[i] = 'X'; // e nella copia alla posizione i esama il valore non sara null ma x 
        setSquares(nextSquares); //con il setter cambio dinamicamente ma mia var di stato squares
        SetXIsnext(!xIsNext); //setter mi imposta il contrario dello state boolean della var in questo modo ad ogni click avro sempre prima una 'x' e poi una 'o'
    }
    return (
        <>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    )
}
