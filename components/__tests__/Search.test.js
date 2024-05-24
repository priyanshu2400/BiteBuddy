import Body from "../Body";
import MOCK_DATA from "../mockData/mockResList.json";
import { fireEvent, render,screen} from "@testing-library/react";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import "@testing-library/jest-dom";
global.fetch = jest.fn( () => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});


it("should search for the text input icr in the restaurant list",async () => {
    await act( async () => render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));
    const cardItemsbeforeSearch = screen.getAllByTestId("resCard");
    const searchbtn = screen.getByRole("button", {name : "Search"});
    const searchInput = screen.getByTestId("search-box");
    fireEvent.change(searchInput, { target : { value : "ice"}});
    fireEvent.click(searchbtn);
    const cardItems = screen.getAllByTestId("resCard");
    expect(cardItems.length).toBe(1);
})