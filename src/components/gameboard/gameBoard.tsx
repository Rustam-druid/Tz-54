import React from "react";
import Board from "../Board/Board.tsx";

interface GameBoardProps {

    changeColor: (id: number) => void;
    items: { hasItem: boolean; clicked: boolean; id: number; color: string; name: string }[];

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

export default GameBoard;
