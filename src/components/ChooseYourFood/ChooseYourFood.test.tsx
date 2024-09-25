import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import * as router from "react-router-dom";
import ChooseYourFood from ".";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("ChooseYourFood", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
  });

  const renderComponent = () => {
    return render(
      <MemoryRouter>
        <ChooseYourFood />
      </MemoryRouter>
    );
  };

  it("should render", () => {
    renderComponent();
    expect(screen.getByTestId("ChooseYourFoodContainer")).toBeInTheDocument();
  });

  it("should render heading and description", () => {
    renderComponent();
    const descriptionContainer = screen.getByTestId("description-container");
    const heading = screen.getByTestId("description-heading");
    const description = screen.getByTestId("description");
    expect(descriptionContainer).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("should render image", () => {
    renderComponent();
    const image = screen.getByTestId("ChooseYourFoodImage");
    expect(image).toHaveAttribute("src", "/Images/ChooseYourFood.svg");
  });

  it("The page should navigate to signIn page when 'GET STARTED' button clicks", () => {
    renderComponent();
    const getStartedButton = screen.getByTestId("get-started-button");
    fireEvent.click(getStartedButton);
    expect(mockNavigate).toHaveBeenCalledWith("/signIn");
  });
});
