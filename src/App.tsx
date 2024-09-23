import React, {useState} from "react";
import GameStats from "./components/button/button.tsx";
import GameBoard from "./components/gameboard/gameBoard.tsx";

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


    const changeColor = (id:number) => {
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
                    });
            }
            setTries(tries + 1)
        }
        setItems(copyitems);
    };

    const reset= () => {
        setTries(0)
        setItems(createItems());
    };

    return (
        <div className='container'>
            <GameBoard items={items} changeColor={changeColor} />
                <GameStats tries={tries} reset={reset} />
        </div>

    )

};

export default App