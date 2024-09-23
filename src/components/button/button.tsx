import React from "react";

interface GameStatsProps {
    tries: number;
    reset: () => void;
}

const GameStats: React.FC<GameStatsProps> = ({ tries, reset }) => {
    return (
        <div className="bottom">
            <h2>Tries: {tries}</h2>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default GameStats;
