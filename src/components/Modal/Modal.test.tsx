import { fireEvent, screen, render } from "@testing-library/react";
import Modal from ".";

const mockCartItems = [
  {
    id: 1,
    name: "Pizza",
    quantity: 2,
    price: 200,
    description: "Cheese Burst",
  },
  {
    id: 2,
    name: "Burger",
    quantity: 1,
    price: 100,
    description: "Veggie Burger",
  },
];

const mockOnClose = jest.fn();
const mockTotalPrice = 500;

const renderComponent = (
  showModal: boolean,
  cartItems = mockCartItems,
  totalPrice = mockTotalPrice
) => {
  return render(
    <Modal
      showModal={showModal}
      onClose={mockOnClose}
      cartItems={cartItems}
      totalPrice={totalPrice}
    />
  );
};

describe("Modal Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("render component correctly", () => {
    renderComponent(true);
    expect(screen.getByTestId("modal-container")).toBeInTheDocument();
  });

  it("does not render the model", () => {
    renderComponent(false);
    expect(screen.queryByTestId("modal-container")).not.toBeInTheDocument();
  });

  it("should render close button", () => {
    renderComponent(true);
    const closeButton = screen.getByTestId("close-button");
    expect(closeButton).toBeInTheDocument();
  });

  it("renders correctly when showModal is true and items exist", () => {
    renderComponent(true);

    expect(screen.getByText("Selected Items")).toBeInTheDocument();
    expect(screen.getByText("Pizza")).toBeInTheDocument();
    expect(screen.getByText("Cheese Burst")).toBeInTheDocument();
    expect(screen.getByText("Burger")).toBeInTheDocument();
    expect(screen.getByText("Veggie Burger")).toBeInTheDocument();
    expect(screen.getByText("Place Order: ₹500")).toBeInTheDocument();
  });

  it("renders message when no items are selected", () => {
    renderComponent(true, [], 0);

    expect(screen.getByTestId("no-items-selected")).toBeInTheDocument();
    expect(screen.getByText("Place Order: ₹0")).toBeInTheDocument();
  });

  it("calls onClose when close button or overlay is clicked", () => {
    renderComponent(true);

    const closeButton = screen.getByText("×");
    const overlay = screen.getByTestId("modal-overlay");

    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);

    fireEvent.click(overlay);
    expect(mockOnClose).toHaveBeenCalledTimes(2);
  });

  it("correctly calculates and displays the total price", () => {
    renderComponent(true);

    expect(screen.getByText("Place Order: ₹500")).toBeInTheDocument();
  });
});
