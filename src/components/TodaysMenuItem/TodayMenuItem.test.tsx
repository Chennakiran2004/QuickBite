import TodaysMenuItem from ".";
import { render, screen, fireEvent } from "@testing-library/react";

const menuItem = {
  item_id: "1",
  name: "Test Item",
  price: 10,
  description: "Test Description",
  item_image_url: "/test-image.jpg",
};

const mockOnAddItem = jest.fn();
const mockOnRemoveItem = jest.fn();

describe("TodayMenuItem component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = (quantity: number) => {
    return render(
      <TodaysMenuItem
        item={menuItem}
        onAddItem={mockOnAddItem}
        onRemoveItem={mockOnRemoveItem}
        quantity={quantity}
      />
    );
  };

  it("render the component correctly", () => {
    renderComponent(0);
    expect(screen.getByTestId("TodayMenuItemContainer")).toBeInTheDocument();
  });

  it("renders correclty with initial quantity of 0", () => {
    renderComponent(0);

    expect(screen.getByText(menuItem.name)).toBeInTheDocument();
    expect(screen.getByText(`₹${menuItem.price}`)).toBeInTheDocument();
    expect(screen.getByText(menuItem.description)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      menuItem.item_image_url
    );
    expect(screen.getByText("ADD")).toBeInTheDocument();
    expect(screen.queryByText("0")).not.toBeInTheDocument();
  });

  it("renders correclty with initial quantity of 1", () => {
    renderComponent(1);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.queryByText("ADD")).not.toBeInTheDocument();
  });

  it("calls onAddItem when ADD button is clicked", () => {
    renderComponent(0);

    fireEvent.click(screen.getByTestId("add-button"));
    expect(mockOnAddItem).toHaveBeenCalledWith(menuItem);
  });

  it("calls onAddItem when plus button is clicked", () => {
    renderComponent(1);

    fireEvent.click(screen.getByTestId("plus-button"));
    expect(mockOnAddItem).toHaveBeenCalledWith(menuItem);
  });

  it("calls onRemoveItem when minus button is clicked", () => {
    renderComponent(1);

    fireEvent.click(screen.getByTestId("minus-button"));
    expect(mockOnRemoveItem).toHaveBeenCalledWith(menuItem);
  });

  it("does not calls onRemoveItem when minus button is clicked and quantity is 0", () => {
    renderComponent(0);

    expect(screen.queryByTestId("minus-button")).not.toBeInTheDocument();
  });

  it("renders the correct quantity when it is greater than 1", () => {
    renderComponent(3);

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.queryByText("ADD")).not.toBeInTheDocument();
  });

  it("displays the 'ADD' button when quantity is 0", () => {
    renderComponent(0);

    expect(screen.getByText("ADD")).toBeInTheDocument();
    expect(screen.queryByText("0")).not.toBeInTheDocument();
  });

  it("increases the quantity when the plus button is clicked", () => {
    renderComponent(2);

    fireEvent.click(screen.getByTestId("plus-button"));
    expect(mockOnAddItem).toHaveBeenCalledWith(menuItem);
  });

  it("does not call onAddItem or onRemoveItem when the component is rendered without interaction", () => {
    renderComponent(1);

    expect(mockOnAddItem).not.toHaveBeenCalled();
    expect(mockOnRemoveItem).not.toHaveBeenCalled();
  });

  it("handles rapid add and remove clicks correctly", () => {
    renderComponent(1);

    fireEvent.click(screen.getByTestId("plus-button"));
    fireEvent.click(screen.getByTestId("minus-button"));
    fireEvent.click(screen.getByTestId("plus-button"));

    expect(mockOnAddItem).toHaveBeenCalledTimes(2);
    expect(mockOnRemoveItem).toHaveBeenCalledTimes(1);
  });
});
