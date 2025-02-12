import './App.css';

function App() {
  return <h1> Hello from App </h1>;
}

// function App() {
//   const [num, setNum] = useState(1);
//   const [show, setShow] = useState(true);
//   const message = `The number is ${num}`;

//   useEffect(() => {
//     console.log(num);
//   });

//   return (
//     <>
//       <h1> {message} </h1> 

//       <button onClick={() => setNum(prevNum => prevNum + 1)}>
//         Add 1!
//       </button>
//       <button onClick={() => setShow(prevShow => !prevShow)}>
//         {show ? "Hide" : "Show"} {num} Doubled
//       </button>

//       {show && <p> {num} doubled is {num*2} </p>}
//     </>
//   );
// }

export default App;
