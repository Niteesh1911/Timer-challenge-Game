import { useState , useRef } from "react";

export default function Player() {
const playerName = useRef();  
const [enterName , setenterName] = useState(null);

function handleClick(){
  setenterName(playerName.current.value);
}

  return (
    <section id="player">
      <h2>Welcome {enterName ? enterName :''}</h2>
      <p>
        <input  ref ={playerName} 
        type="text" />
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  );
}
