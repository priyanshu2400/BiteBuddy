import Contact from "../Contact";
import React from "react";
import { screen ,render} from "@testing-library/react";
import "@testing-library/jest-dom";

test("contact page should render",() => {
    render(<Contact/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("no of input boxes should be 1",() => {
    render(<Contact/>);
    const inputbox = screen.getAllByRole("textbox");
    expect(inputbox.length).toBe(1);
});
