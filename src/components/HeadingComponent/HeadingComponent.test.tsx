import HeadingComponent from ".";
import { render, screen } from "@testing-library/react";

describe("Heading component", () => {
  const renderComponent = () => {
    return render(<HeadingComponent />);
  };
  it("render the component correctly", () => {
    renderComponent();
    expect(screen.getByTestId("HeadingContainer")).toBeInTheDocument();
  });

  it("should render logo", () => {
    renderComponent();
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });

  it("should display heading", () => {
    renderComponent();
    expect(screen.getByTestId("logo-heading")).toBeInTheDocument();
  });
});
