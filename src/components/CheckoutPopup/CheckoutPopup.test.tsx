import { render, screen } from "@testing-library/react";
import CheckoutPopup from ".";

describe("CheckoutPopup component", () => {
  const renderComponent = (totalItems: number, totalPrice: number) => {
    return render(
      <CheckoutPopup totalItems={totalItems} totalPrice={totalPrice} />
    );
  };

  it("render the component correctly", () => {
    renderComponent(1, 10);

    expect(
      screen.getByTestId("CheckoutPopupMainContainer")
    ).toBeInTheDocument();
  });

  it("renders correctly with zero items and price", () => {
    renderComponent(0, 0);

    expect(screen.getByText("0 Item")).toBeInTheDocument();
    expect(screen.getByText("₹ 0")).toBeInTheDocument();
    expect(screen.getByText("Check Out")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "/Images/shopping-bag-02.svg"
    );
  });

  it("renders correctly with items and price", () => {
    renderComponent(1, 10);
    expect(screen.getByText("1 Item")).toBeInTheDocument();
    expect(screen.getByText("₹ 10")).toBeInTheDocument();
    expect(screen.getByText("Check Out")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "/Images/shopping-bag-02.svg"
    );
  });

  it("renders correctly with multiple items", () => {
    renderComponent(3, 30);

    expect(screen.getByText("3 Item")).toBeInTheDocument();
    expect(screen.getByText("₹ 30")).toBeInTheDocument();
  });

  it("renders correctly with large items", () => {
    renderComponent(100, 1000);

    expect(screen.getByText("100 Item")).toBeInTheDocument();
    expect(screen.getByText("₹ 1000")).toBeInTheDocument();
  });

  it("checkout button is present", () => {
    render(<CheckoutPopup totalItems={1} totalPrice={10} />);

    // eslint-disable-next-line testing-library/no-node-access
    const checkoutButton = screen.getByText("Check Out").closest("div");
    expect(checkoutButton).toBeInTheDocument();
    expect(checkoutButton).toContainElement(screen.getByRole("img"));
  });
});
