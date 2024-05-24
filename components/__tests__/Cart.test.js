import { render, renderHook } from "@testing-library/react"
import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { act } from "@testing-library/react"
import MOCK_DATA from "../mockData/mockResMenu.json"
import RestaurantMenu from "../RestaurantMenu";
global.fetch = jest.fn( () => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
}); 

it("should load cart component" ,async () => {
    
})