// TODO important steps
/*
* Does:
* getByText 
* render()
* expect().toBe()
*/

import CustomButton, { ButtonState } from "./CustomButton"
import {fireEvent, render} from "@testing-library/react"
import "@testing-library/jest-dom"


// describe beskriver vad teset ska göra (Collection of tests)
describe("Easy Examples", () => {
    // test number 1
    test("2 + 2 = 4", () => {
        expect(2+2).toBe(4)
    })
    

    // test number 2
    test("is 2 + 4 greater then 0", () => {
        expect(2+4).toBeGreaterThan(0)
    })
    

    // test number 3
    test("is 2 + 4 greater then 0", () => {
        expect(2-2).toBe(0)
    })
    
    

})

describe("CustomButtonComponentState", () => {

    // idle
    test("check if ButtonComponent starts with idle ", () => {
        const buttonText: string = "signup"
        const { getByText } = render(<CustomButton Buttontext={buttonText} />)
        const CustomButtonComponent = getByText(buttonText)

        expect (CustomButtonComponent).toHaveClass(ButtonState.idle)
        
       
    })

    // hover
    test("Check if ButtonComponent on hover state changes ", () => {
        const buttonText: string = "signup"
        const { getByText } = render(<CustomButton Buttontext={buttonText} />) 
        const CustomButtonComponent = getByText(buttonText)

        expect (CustomButtonComponent).toHaveClass(ButtonState.idle)
        fireEvent.mouseEnter(CustomButtonComponent)
        expect (CustomButtonComponent).toHaveClass(ButtonState.hover)

    })
    
    // clicked
    test("Custom Button Component on click state change", () => {
        const buttonText: string = "signup"
        const { getByText } = render(<CustomButton Buttontext={buttonText} />)
        const CustomButtonComponent = getByText(buttonText)

        expect (CustomButtonComponent).toHaveClass(ButtonState.idle)
        fireEvent.click(CustomButtonComponent)
        expect (CustomButtonComponent).toHaveClass(ButtonState.clicked)
})
})
