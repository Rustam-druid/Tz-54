
import {useState} from "react";
import Board from "./components/Board/Board.tsx";

const App = () => {

    const createItems = () => {
        const arrblock = [];
        for (let i = 0; i < 36; i++) {
            arrblock.push({ hasItem: false, clicked: false, id: i , color:'gray', name:''});
        };
        const random = Math.floor(Math.random() * arrblock.length)
        arrblock[random ].hasItem = true;

        return arrblock;
    };

    const [items, setItems] = useState(createItems())
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
                alert('найден')
                copyitems.forEach((item) => {
                    item.clicked = true;
                });
            }
            setTries(tries + 1)
        }
        setItems(copyitems);
    }

    const reset= () => {
        setTries(0)
        setItems(createItems());
    }

    return (
        <div className='container'>
            <div className="board">
                {items.map((item) => (
                    <Board
                        color={item.color}
                        name={item.name}
                        onClick={() => changeColor(item.id)}
                    />
                ))}
            </div>
            <div className='bottom'>
                <h2>Tries: {tries}</h2>
                <button onClick={reset}>Reset</button>
            </div>

        </div>


    )

}

export default App