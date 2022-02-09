import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddProductForm from "../components/AddProductForm";
import axios from "axios"
import Button from "../components/Button";

describe("AddProductForm", () => {
  let func;
  let inputTitle;
  let inputQuantity;
  let inputPrice;
  // let submitButton;
  beforeEach(async () => {
    func = jest.fn();
    render(<AddProductForm onSubmit={func} />);
    inputTitle = screen.getByRole("textbox", { name: "Product Name" });
    inputQuantity = screen.getByRole("textbox", { name: "Quantity" });
    inputPrice = screen.getByRole("textbox", { name: "Price" });
    // submitButton = screen.getByText(/Add/i);
    // submitButton = await screen.findByRole('Button', {name: /submit-button/i})
  });
  it("changes the input state when product title is changed", () => {
    userEvent.type(inputTitle, "iPad");
    expect(inputTitle).toHaveValue("iPad");
  });
  it("changes the quantity state when product quantity is changed", () => {
    userEvent.type(inputQuantity, "20");
    expect(inputQuantity).toHaveValue("20");
  });
  it("changes the price state when product price is changed", () => {
    userEvent.type(inputPrice, "100");
    expect(inputPrice).toHaveValue("100");
  });

  it("calls onSubmit when form is submitted", () => {
   userEvent.click(screen.getByTestId("submit"));
    // userEvent.click(submitButton);
    // expect(func.mock.calls.length).toBe(1);
    expect(axios.get).toHaveBeenCalledTimes(1);
  }); 
  // // it("calls onSubmit with the new comment passed in", () => {
  //   userEvent.type(inputTitle, "Srdjan");
  //   userEvent.type(inputQuantity, "My Comment");
  //   const newComment = { author: inputTitle.value, body: inputQuantity.value };
  //   userEvent.click(submitButton);
  //   expect(func.mock.calls[0][0]).toEqual(newComment);
  // // });
  // it("finds input group div", () => {
  //   const inputDiv = screen.getByTestId("input-group");
  // });
});