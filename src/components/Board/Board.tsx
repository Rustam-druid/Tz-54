import './Board.css'
import * as React from "react";
import {MouseEventHandler} from "react";

interface BoardProps {
    onClick:MouseEventHandler;
    color:string;
    name: string;
}

const Board:React.FC<BoardProps> = ({onClick , color , name}) => {


    return (

        <div className={color} onClick={onClick} ><h1>{name}</h1></div>

    )
}
export default Board;