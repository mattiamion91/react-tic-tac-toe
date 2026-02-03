import Square from "./square"

export default function Board () {
    return (
    <>
      <div className="riga-griglia">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="riga-griglia">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="riga-griglia">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}
