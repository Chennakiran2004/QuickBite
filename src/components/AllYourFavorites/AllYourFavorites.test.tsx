import * as router from "react-router";
import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AllYourFavorites from ".";

describe("AllYourFavorites Component", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
  });

  const renderComponent = () => {
    return render(
      <MemoryRouter>
        <AllYourFavorites />
      </MemoryRouter>
    );
  };

  it("renders correctly", () => {
    renderComponent();
    expect(screen.getByTestId("AllYourFavoritesContainer")).toBeInTheDocument();
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
    const image = screen.getByTestId("AllYourFavoritesImage");
    expect(image).toHaveAttribute("src", "/Images/AllYourFavorites.svg");
  });

  it("The page should navigate to signIn page when 'GET STARTED' button clicks", () => {
    renderComponent();
    const getStartedButton = screen.getByTestId("get-started-button");
    fireEvent.click(getStartedButton);
    expect(mockNavigate).toHaveBeenCalledWith("/signIn");
  });
});
