import {useState} from "react";

export default function Player({initialName, symbol}) {
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(initialName)

    function handlerClick() {
        setIsEditing(wasEditing => !wasEditing)
    }

    function handleChange(evt) {
        setPlayerName(evt.target.value)
    }

    return (
        <>
            <li>
                    <span className={"player"}>
                   {isEditing ? <input required type="text" value={playerName} onChange={handleChange}/> : (
                       <span className={"player-name"}>{playerName}</span>)}
                        </span>
                <span className={"player"}>
                    <span className={"player-symbol"}>{symbol}</span>
                        </span>
                <button onClick={handlerClick}>{isEditing ? "Save" : "Edit"}</button>
            </li>
        </>
    )
}