/*
TODO - Have we interacted with the Button
check for states, for hover, clicked and idle
CLASSNAME-TEST
*/

import { useState } from "react"

// ENUM - 3 different states for Button
// IDLE / HOVER / CLICKED
export enum ButtonState {  
    idle = "idle",
    hover = "hover",
    clicked = "clicked"
}

// you lose on: Refactor capabilities, imutability 
type ButtonStateTwo = "idle" | "hover" | "clicked"


//INTERFACE - PROPS
interface CustomButtonProps{
    Buttontext: string
}

export default function CustomButton(props: CustomButtonProps) {

    const [buttonState, setButtonState] = useState<ButtonState>(ButtonState.idle)
   

    return <input 
    type="button" 
    value={props.Buttontext}
     className={buttonState} 
     onMouseEnter={() => {
        setButtonState(ButtonState.hover)
        
     } }
    onClick={() => {
        setButtonState(ButtonState.clicked)
    }}
    />

}