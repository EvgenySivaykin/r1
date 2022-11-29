import { useState } from 'react';
import './App.scss';
import getRed from './Functions/getRed';
// import randColor from './Functions/randColor';
// import rand from './Functions/rand';
// import Sq from './Components/008/Sq';


function App() {

    const [sq, setSq] = useState([]);

    const addRed = () => {
        setSq(s => [...s, 1]);
    }
    const addBlue = () => {
        setSq(s => [...s, 1]);
    }
    const reset = () => {
        setSq(s => []);
    }


    return (
        <div className="App">
            <div className="App-header">
            <div className="bin">
                {
                    sq.map((sq, i) => <div className='sq' style={{
                        backgroundColor: {addRed} ? 'red' : 'blue'
                    }} key={i}></div>)
                }
            </div>
                <button onClick={addRed}>ADD RED</button>
                <button onClick={addBlue}>ADD BLUE</button>
                <button onClick={reset}>RESET</button>
            </div>
        </div>
    );
}

export default App;