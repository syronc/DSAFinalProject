import './Input.css';
import { useState } from 'react';
import Loading from "./Loading";
import BFS from "./BFS";
import BFSGreedy from "./BFSGreedy";

function Input() {
// defines react useStates for the file
    const [toID, setToID] = useState('')
    const [fromID, setFromID] = useState('')
    const [bfs, setBfs] = useState(true)
    const [bfsG, setBfsG] = useState(false)
    const [sear, setSear] = useState(false)
    const [fromVar, setFromVar] = useState('')
    const [toVar, setToVar] = useState('')
// method calls for seting states
    const bfsButton = () => {
      
      setBfs(true);
      setBfsG(false);

    };

    const bfsGButton = () => {
      
      setBfsG(true);
      setBfs(false);

    };

    const search = () => {
      setToVar(toID);
      setFromVar(fromID);
      setSear(true);
      
    };

    const searchFalse = () => {
        setSear(false);
    }

    

    return (
      
        <div className='Whole'>
          {/* Displays Information dependent upon the state */}
          {sear ? bfs ?
          <div>
          <BFS src = {(Object.values(fromVar)).toString().replaceAll(',', '')} dest = {(Object.values(toVar)).toString().replaceAll(',', "")}/>
          <button onClick = {searchFalse} className='buttonDown'>Go Back</button>
           </div>
           :
           <div>
            <BFSGreedy src = {(Object.values(fromVar)).toString().replaceAll(',', '')} dest = {(Object.values(toVar)).toString().replaceAll(',', "")}/>
            <button onClick = {searchFalse} className='buttonDown'>Go Back</button>
             </div>
             : 
            //  If the user has not clicked search this displays
             <div> 
             <h2>Enter Both Steam ID Numbers</h2>
             <input 
             type="text"
             name="From Steam ID"
             className = "search"
             onChange={event => setFromID(event.target.value)}
             placeholder="From"
             />
             <input 
             type="text"
             name="To Steam ID"
             className = "search"
             onChange={event => setToID(event.target.value)}
             placeholder="To"
             />
    
             <button 
              className = "button"
              onClick={search}
              > 
              Load
              </button>
              <br></br>
              <br></br>
              {/* Toggle for algorithm type */}
              {bfs ? 
              <div>
              <button className='buttonDownActive' onClick={bfsButton}>BFS</button>
              <button className='buttonDown' onClick={bfsGButton}>Greedy BFS</button>
              </div>
              : 
              <div>
              <button className='buttonDown' onClick={bfsButton}>BFS</button>
              <button className='buttonDownActive' onClick={bfsGButton}>Greedy BFS</button>
              </div>}
              
            
               </div>
             
            
           
             
             }
      
      </div>
    
    );
  }
  
  export default Input;