import { render,screen } from "@testing-library/react";
import Contact from "../Contact ";
import "@testing-library/jest-dom"
describe("",()=>{
    test(" should load contact us Componenet",()=>{
        render(<Contact/>)
        const heading= screen.getByRole("heading")
        expect(heading).toBeInTheDocument();
        })
        test(" shoud button screen or not",()=>{
            render(<Contact/>)
        const button=screen.getByPlaceholderText("name")
        expect(button).toBeInTheDocument()
        })
        test(" shoud renser all input in dom",()=>{
            render(<Contact/>)
        const input=screen.getAllByRole("textbox")
        expect(input.length).toBe(2)
        })
})