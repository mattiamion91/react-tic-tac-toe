import { useState } from "react"
import Square from "./square"

export default function Board() {

    //imposto varaibile di stato
    const [squares, setSquares] = useState(Array(9).fill(null)) //crea un array di 9 elementi con value null
    //const [squares, setSquares] = useState([1,2,3,4,5,6,7,8,9])

    //imposto var di stato che gestisce se nel quadrato cé una x oppure una o (booleana)
    const [xIsNext, SetXIsnext] = useState(true)

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    //funzione che gestisce il click
    function handleClick(i) {  //'i' funge sa segna posto
        if (squares[i] || calculateWinner(squares)) {
            //se la casella é gua occupata il return blocca la funzione e il codice che viene dopo non é eseguiti
            //oppure se la funzione calculatewineer ritorna un vincitore

            return;
        }
        const nextSquares = squares.slice(); // con il metodo slice mi creo una copia dell'array orginale
        if (xIsNext) {
            nextSquares[i] = 'X'
        } else {
            nextSquares[i] = 'O'
        }
        //nextSquares[i] = 'X'; // e nella copia alla posizione i-esima il valore non sara null ma x 
        setSquares(nextSquares); //con il setter cambio dinamicamente ma mia var di stato squares
        SetXIsnext(!xIsNext); //setter mi imposta il contrario dello state boolean della var in questo modo ad ogni click avro sempre prima una 'x' e poi una 'o'
    }

    function calculateWinner(squares) { //funzione che calocla il vincitore 
        const lines = [ //var lines rappresenta una array di array le tre righe le tre colonne e le due diagonali 
            [0, 1, 2], //ogni combinzaione possibile per la vittoria
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) { //ciclo for attraverso tutte e 8 le combinazioni per ogni combinazione estrae 3 numeri a, b, c
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                //tre condizioni che deveno essere vere contemporanemente
                //squares[a] non deve essere null
                //squares[a] e squares[b] devono avere lo stesso valore es 'x'
                //squares[a] e squares[c] devono avere lo stesso valore es 'x'
                return squares[a];
                //se sono tutte e tre vere allora ritorna squares[a] cioe 'x' o 'o' cioe il simbolo del vincitore
            }
        }
        return null;
        //dopo avere ciclato tutte e 8 le combinazioni in nessuna si verifcano tytte e3 le condizioni contemporaneamnte ritorna null
    }
    return (
        <>
            <div className="status">{status}</div>
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
