export default function Board({ position }) {

    return (
        <div id="board">
            <span id="player" style={{left: `${position.left}%`, top: `${position.top}%`}}>🐞</span>
        </div>
    );
}