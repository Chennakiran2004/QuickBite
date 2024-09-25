import TodaysMenuItem from ".";
import { render, screen, fireEvent } from "@testing-library/react";

const menuItem = {
  id: 1,
  name: "Test Item",
  price: 10,
  description: "Test Description",
  image: "/test-image.jpg",
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
    expect(screen.getByRole("img")).toHaveAttribute("src", menuItem.image);
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
});
