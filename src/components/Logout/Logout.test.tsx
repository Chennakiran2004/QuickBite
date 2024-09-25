import { fireEvent, screen, render } from "@testing-library/react";
import Logout from ".";
import { MemoryRouter } from "react-router-dom";
import * as router from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Logout Component", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
  });

  const renderComponent = () => {
    return render(
      <MemoryRouter>
        <Logout />
      </MemoryRouter>
    );
  };

  it("renders component correctyl", () => {
    renderComponent();

    expect(screen.getByTestId("LogoutMainContainer")).toBeInTheDocument();
  });

  it("should render logout image and text", () => {
    renderComponent();
    expect(screen.getByTestId("logout-image")).toBeInTheDocument();
    expect(screen.getByTestId("logout-text")).toBeInTheDocument();
  });

  it("should navigate to signin page when clicks the logout", () => {
    renderComponent();

    const logout = screen.getByTestId("LogoutMainContainer");
    fireEvent.click(logout);
    expect(mockNavigate).toHaveBeenCalledWith("/signIn");
  });
});
