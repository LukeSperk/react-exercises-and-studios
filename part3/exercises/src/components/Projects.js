import data from './../data.json';
import { useState } from 'react';



export default function MyProjects () {
    const [index, setIndex] = useState(0);
    let holesList = data;
    let selectedHole = holesList[index];
    function handleClick() {
        if (index < holesList.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     };
    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <h2>{`Hole ${selectedHole.hole}`}</h2>
            <h3>{`Distance: ${selectedHole['distance/par']}`}</h3>
            <img src={selectedHole.photoUrl} alt={selectedHole.alt}></img>
        </div>
    );
};