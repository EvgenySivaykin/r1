import { useState } from 'react';
import rand from './Functions/rand';
import './App.scss';


// Third task:
// Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0. Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus minus- sumažėja 3

// function App() {
  
//   const [count, setCount] = useState(0);
  
  
//   const add = () => {
//     setCount(c => c + 1);
//   }

//   const less = () => {
//     setCount(c => c - 1);
//     setCount(c => c - 1);
//     setCount(c => c - 1);     
//   }
//   const less = () => {
//     setCount(c => c - 3);    
//   }


     
//   return (
//     <div className="App">
//       <div className="App-header">
//         <h1 style={{color: 'skyblue'}}>{count}</h1>
//         <button onClick={add}>PLUS</button>
//         <button onClick={less}>MINUS</button>
//       </div>
//     </div>
//   );
// }

// export default App;


// Second task:
// Sukurti aplikaciją, kuri turi mygtukus change ir random bei atvaizduoja apskritimą su random skaičiumi viduje. Paspaudus change mygtuką apskritimas keičiasi į stačiakampį kaip pirmame uždavinyje, o paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25

// function App() {
//   const [form, setForm] = useState(true);
//   const [numeris, setNr] = useState(rand(5, 25));

//   const change = () => {
//     setForm(form => !form); // REDAGAVIMUI
//   }
  
//   const random = () => {
//     const rnd = rand(5, 25);
//     setNr(rnd);
//   }

//   const kvadratas = {borderRadius: '0', width: '200px', height: '100px', backgroundColor: '#61dafb', lineHeight: '100px'};

//   const rutulys = {borderRadius: '50%', width: '100px', height: '100px', backgroundColor: '#61dafb', lineHeight: '100px'};
     
//   return (
//     <div className="App">
//       <div className="App-header">
//         <div style={{form: form ? {rutulys} : {kvadratas}}}>{numeris}</div>
//         <button onClick={change}>Change form</button>
//         <button onClick={random}>Random nr</button>
//       </div>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [form, setForm] = useState(true);
//   const [numeris, setNr] = useState(rand(5, 25));

//   const change = () => {
//     setForm(form => !form); // REDAGAVIMUI
//   }
  
//   const random = () => {
//     const rnd = rand(5, 25);
//     setNr(rnd);
//   }
     
//   return (
//     <div className="App">
//       <div className="App-header">
//         <div style={{'border-radius': form ? '50%' : '0', width: '100px', height: '100px', backgroundColor: '#61dafb', lineHeight: '100px'}}>{numeris}</div>
//         <button onClick={change}>Change form</button>
//         <button onClick={random}>Random nr</button>
//       </div>
//     </div>
//   );
// }

// export default App;

// First task:
// Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja apskritimą. Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą, o paspaudus dar kartą vėl pavirsti apskritimu.

function App() {
  const [form, setForm] = useState(true);

  const change = () => {
    setForm(form => !form);
  }


  return (
    <div className="App">
      <div className="App-header">
        {/* <div style={{form: form ? 'apskr' : 'kvadr'}}></div> */}
        <div style={{borderRadius: form ? '50%' : '0', width: '100px', height: '100px', backgroundColor: '#61dafb'}}></div>
        <button onClick={change}>Change form</button>
      </div>
    </div>
  );
}
export default App;



