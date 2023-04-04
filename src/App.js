import Input from "./components/Input";
import Square from "./components/Square";
import { useState } from "react";
function App() {
  const [colorValue,setColorValue] = useState('');
  const [hexValue,setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState('');
  return (
    <div className="App">
       <Square
          colorValue = {colorValue}
          hexValue = {hexValue}
          isDarkText = {isDarkText}
       />
       <Input
         colorValue ={colorValue}
         setColorValue = {setColorValue}
         setHexValue = {setHexValue}
         isDarkText = {isDarkText}
         setIsDarkText ={setIsDarkText}
       />
    </div>
  );
}

export default App;
