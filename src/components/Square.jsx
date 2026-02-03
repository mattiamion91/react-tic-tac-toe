export default function Square({ value }) {

    // funzione che mi ritona un log allévento click
    function handleClick() {
        console.log('hai cliccato!!');

    }

    return (
        <button onClick={handleClick} 
        className='quadrato'>{value}</button>
    )
}