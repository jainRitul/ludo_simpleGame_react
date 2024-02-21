import { useState } from "react";

export default function LudoBoard(){
    let [moves , setMoves] = useState({blue : 0,yellow :0,green :0,red:0});
    let [arr,setArr] = useState(["no moves"]);

    let updateBlue = ()=>{
    //    setMoves(()=>{ 
    //     return {...moves,blue : moves.blue + 1} });

       //array or obj hum jb change krte h toh uska aadress change nhi hota isliye humko usko spread krke copy create krni pdti h or tbhi react state change hua h un smmjh ta hai

      
       setArr((prevArr)=>{return [...prevArr,"blue moves"]});
       console.log(arr); 
    }
    let updateYellow = ()=>{
       setMoves(()=>{
        return  {...moves,yellow: moves.yellow + 1 }
    });
    }
    let updateGreen = ()=>{
       setMoves(()=>{
        return {...moves,green: moves.green + 1} });
    }
    let updateRed = ()=>{
       setMoves((prevMoves)=>{
        return {...prevMoves,red : prevMoves.red + 1 }});
    }

    return(
       <div>
        <p>Game Begin!</p>
        <p>{arr}</p>
        <div className="Board">

            <p >Blue Moves ={moves.blue} </p>
            <button style={{backgroundColor :"blue"}}  onClick={updateBlue}>+1</button>

            <p>Yellow Moves = {moves.yellow}</p>
            <button onClick={updateYellow} style={{backgroundColor :"yellow" ,color:"black"}}>+1</button>

            <p>Green Moves = {moves.green}</p>
            <button onClick={updateGreen} style={{backgroundColor :"green"}}>+1</button>

            <p>Red Moves = {moves.red} </p>
            <button onClick={updateRed} style={{backgroundColor :"red"}}>+1</button>
        </div>
       </div>
    );
}