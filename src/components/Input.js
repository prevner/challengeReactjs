import React from 'react'
import colorNames from 'colornames';
const Input = ({ colorValue,setColorValue, 
                 setHexValue,
                 isDarkText, setIsDarkText}) => {
  return (
    <form onClick={(e)=>e.preventDefault()}>
        <label htmlFor='ColorName'>Enter your color name:</label> 
        <input
           autoFocus
           type='text'
           id='ColorName'
           placeholder='Enter your color name'
           value={colorValue}
           onChange={(e)=>{
                setColorValue(e.target.value)
                setHexValue(colorNames(e.target.value))
            }}
        />   
        <button
            type='button'
            onClick={()=>setIsDarkText(!isDarkText)}
        >
             Toggle text color
        </button>  
    </form>
  )
}

export default Input
