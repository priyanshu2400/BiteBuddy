import { render,screen } from "@testing-library/react";
import RestaurantCard,{ResCardWithPromotedLabel} from "../RestaurantCard";
import MOCK_DATA from "../mockData/mockResData.json";
import "@testing-library/jest-dom";
import React from "react";

it("should load Restaurant card component",() => {
    render(<RestaurantCard  resdata={MOCK_DATA}/>);
    const heading = screen.getAllByRole("heading");
    expect(heading.length).toBeGreaterThan(0);
})

it("should load Restaurant card with title",() => {
    render(<RestaurantCard  resdata={MOCK_DATA}/>);
    const name = screen.getByText(/Samosa/);
    expect(name).toBeInTheDocument();
})

it("should load Restaurant with promoted label",() => {
    const PromotedRestaurant = ResCardWithPromotedLabel(RestaurantCard);
    render(<PromotedRestaurant  resdata={MOCK_DATA}/>);
    const promotedSign = screen.getByText("Promoted");
    expect(promotedSign).toBeInTheDocument();
})