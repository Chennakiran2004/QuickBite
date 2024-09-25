import { fireEvent, render, screen } from "@testing-library/react";
import WelcomePage from ".";
import { MemoryRouter } from "react-router-dom";
import * as router from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("WelcomePage component", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
  });

  const renderComponent = () => {
    return render(
      <MemoryRouter>
        <WelcomePage />
      </MemoryRouter>
    );
  };

  it("renders correctly", () => {
    renderComponent();
    expect(
      screen.getByTestId("welcomePage-main-container")
    ).toBeInTheDocument();
  });

  it("should have correct heading and description", () => {
    renderComponent();
    const Heading = screen.getByText("Welcome");
    const Description = screen.getByText(
      "It’s a pleasure to meet you. We are excited that you’re here so let’s get started!"
    );

    expect(Heading).toBeInTheDocument();
    expect(Description).toBeInTheDocument();
  });

  it("renders background image", () => {
    renderComponent();
    const BackgroundImage = screen.getByTestId("welcomePage-background-image");
    expect(BackgroundImage).toHaveAttribute(
      "src",
      "/Images/Circle Background.jpg"
    );
  });

  it("renders carousel Image", () => {
    renderComponent();
    const CarouselImage = screen.getByTestId("welcomePage-carousel-image");
    expect(CarouselImage).toHaveAttribute("src", "/Images/welcomePage.svg");
  });

  it("The page should navigate to signIn page when 'GET STARTED' button clicks", () => {
    renderComponent();
    const getStartedButton = screen.getByTestId("get-started-button");
    fireEvent.click(getStartedButton);
    expect(mockNavigate).toHaveBeenCalledWith("/signIn");
  });
});
