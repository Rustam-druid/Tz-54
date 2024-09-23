import React from "react";
import Board from "../Board/Board.tsx";

interface GameBoardProps {

    changeColor: (id: number) => void;
    items: { hasItem: boolean; clicked: boolean; id: number; color: string; name: string }[];

}

const ClickBlock = (items, id: number)=> {
    const index = items.findIndex((block) => block.id === id);

    const copyitems = [...items];
    const copyitem = copyitems[index];
    if (!copyitem.clicked) {
        copyitems[index] = {
            ...copyitem,
            color: 'white',
            clicked: true,
        };
        if (copyitems[index].hasItem) {
            copyitems[index].name = "O";
            copyitems[index].color = "";
            copyitems.forEach((item) => {
                item.clicked = true;
                item.hasItem = true;
            });
        }
    }
        return copyitems
}

const GameBoard: React.FC<GameBoardProps> = ({ items, changeColor }) => {
    return (
        <div className="board">
            {items.map((item) => (
                <Board
                    key={item.id}
                    color={item.color}
                    name={item.name}
                    onClick={() => changeColor(item.id)}
                />
            ))}
        </div>
    );
};
    export { ClickBlock };
export default GameBoard;

