import { render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import "@testing-library/jest-dom"
// can write it or test both are same
it("should load header",() => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const listElements = screen.getByText(/contact Us/)

    expect(listElements).toBeInTheDocument();
})

it("should load cart",() => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cart = screen.getByText(/Cart/)

    expect(cart).toBeInTheDocument();
})

it("should have 6 list elements",() => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const listItems = screen.getAllByRole("listitem")
    expect(listItems.length).toBe(7);
})
