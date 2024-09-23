import React, {useState} from "react";
import GameStats from "./components/button/button.tsx";
import GameBoard, { ClickBlock } from "./components/gameboard/gameBoard.tsx";

const App = () => {

    const createItems = () => {
        const arrblock = [];
        for (let i = 0; i < 36; i++) {
            arrblock.push({ hasItem: false, clicked: false, id: i , color:'gray', name:''});
        };
        const random = Math.floor(Math.random() * arrblock.length);
        arrblock[random ].hasItem = true;

        return arrblock;
    };

    const [items, setItems] = useState(createItems());
    const [tries, setTries] = useState(0);
    let n = 'Вы выйиграли'


    const changeColor = (id:number ) => {
        const index = items.findIndex((block) => block.id === id);
     const getF = ClickBlock(items, id);
     const Items = [...items]
     const item = Items[index]
        setItems(getF);

        if(!item.hasItem === true) {
            setTries(tries + 1)
        }else {
            let n;
        }


    };

    const reset= () => {
        setTries(0)
        setItems(createItems());
    };

    return (
        <div className='container'>
            <GameBoard items={items} changeColor={changeColor} />
                <GameStats tries={tries} reset={reset} />
            <h2>{n}</h2>
        </div>

    )

};

export default App