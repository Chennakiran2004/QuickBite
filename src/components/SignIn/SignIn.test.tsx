import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SignIn from "../SignIn";
import * as router from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("SignIn component", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
  });

  const renderComponent = () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
  };

  it("should render correctly", () => {
    renderComponent();
    expect(screen.getByTestId("signInContainer")).toBeInTheDocument();
  });

  it("should render main heading and back image", () => {
    renderComponent();
    const mainHeading = screen.getByTestId("heading-container");
    const signInText = screen.getByTestId("signIn-text");
    const backImage = screen.getByTestId("backImage");
    expect(mainHeading).toBeInTheDocument();
    expect(backImage).toBeInTheDocument();
    expect(signInText).toBeInTheDocument();
  });

  it("should render heading and description", () => {
    renderComponent();
    const textContainer = screen.getByTestId("text-container");
    const heading = screen.getByTestId("text-heading");
    const description = screen.getByTestId("text-description");
    expect(textContainer).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("displays error message for empty fields", () => {
    renderComponent();
    const signInButton = screen.getByTestId("signIn-button");
    fireEvent.click(signInButton);

    const emailError = screen.getByTestId("email-error");
    const passwordError = screen.getByTestId("password-error");
    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });

  it("displays an error message for an invalid email", () => {
    renderComponent();

    const emailInput = screen.getByTestId("email-input");
    const signInButton = screen.getByTestId("signIn-button");

    fireEvent.change(emailInput, { target: { value: "invalid_email" } });
    fireEvent.click(signInButton);

    const emailError = screen.getByTestId("email-error");
    expect(emailError).toBeInTheDocument();
    expect(emailError.textContent).toBe("Invalid email");
  });

  it("displays an error message for an invalid password", () => {
    renderComponent();

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const signInButton = screen.getByTestId("signIn-button");

    fireEvent.change(emailInput, { target: { value: "Q" } });
    fireEvent.change(passwordInput, { target: { value: "invalid_password" } });
    fireEvent.click(signInButton);

    const passwordError = screen.getByTestId("password-error");
    expect(passwordError).toBeInTheDocument();
    expect(passwordError.textContent).toBe("Invalid password");
  });

  it("successful sign in with valid credentials", () => {
    renderComponent();

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const signInButton = screen.getByTestId("signIn-button");

    fireEvent.change(emailInput, { target: { value: "Q" } });
    fireEvent.change(passwordInput, { target: { value: "Q" } });
    fireEvent.click(signInButton);

    expect(mockNavigate).toHaveBeenCalledWith("/TodaysMenu");
  });

  it("should navigate to '/' path when clicks back image", () => {
    renderComponent();
    const backImage = screen.getByTestId("backImage");
    fireEvent.click(backImage);
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("keeps the hidden password input in sync with visible input", () => {
    renderComponent();

    const passwordInput = screen.getByTestId("password-input");

    fireEvent.change(passwordInput, { target: { value: "test_password" } });

    const hiddenInput = screen.getByDisplayValue("test_password");
    expect(hiddenInput).toBeInTheDocument();
  });
});
