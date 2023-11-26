// import './App.css';
// import { useState } from 'react';
// function App() {
//   const [num,setNum] = useState(0)
//   const [text,setText] = useState("hello")

//   function myFunc(){
//    setNum(num + 1)
//    console.log(num);
//   }
//   function changeText(){
//     setText("world")
//   }
//   return (
//     <div>
// <button onClick={myFunc}> Click</button>
// <button onClick={changeText} >Change text</button>
// <br/>
// {num}
// <br/>
// {text}
//     </div>
//   );
// }

// export default App;
import React from 'react'
import UserLogin from './UserLogin/UserLogin'
const App = () => {
  return (
    <div>
      <UserLogin/>
      </div>
   
  )
}

export default App