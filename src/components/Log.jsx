/* eslint-disable react/prop-types */

function Log({ turns }) {

    return (
        <ol id="log">
            {turns.map((turn) => <li key={turn.turnNum}>{turn.player.symbol} SELECTED CELL: {turn.square.row+1},{turn.square.col+1}</li>)}
        </ol>
    );
}
export default Log;