import { render, screen } from "@testing-library/react";
import HomeCarousel from ".";

jest.mock("../WelcomePage", () => () => (
  <div data-testid="welcome-page">Welcome Page</div>
));
jest.mock("../AllYourFavorites", () => () => (
  <div data-testid="all-your-favorites">All Your Favorites</div>
));
jest.mock("../ChooseYourFood", () => () => (
  <div data-testid="choose-your-food">Choose Your Food</div>
));

let sliderProps: any;
jest.mock("react-slick", () => {
  return function MockSlider(props: any) {
    sliderProps = props;
    return <div data-testid="slider-container">{props.children}</div>;
  };
});

describe("Home carousel component", () => {
  const renderComponent = () => {
    return render(<HomeCarousel />);
  };

  it("renders correctly", () => {
    renderComponent();
    expect(screen.getByTestId("slider-container")).toBeInTheDocument();
  });

  it("renders all child components", () => {
    renderComponent();
    expect(screen.getByTestId("welcome-page")).toBeInTheDocument();
    expect(screen.getByTestId("all-your-favorites")).toBeInTheDocument();
    expect(screen.getByTestId("choose-your-food")).toBeInTheDocument();
  });

  it("passes correct settings to Slider", () => {
    renderComponent();
    expect(sliderProps).toMatchObject({
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  });

  it("applies responsive settings for small screens", () => {
    renderComponent();
    expect(sliderProps.responsive).toEqual([
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]);
  });

  it("applies custom dots styles", () => {
    renderComponent();
    expect(sliderProps.appendDots).toBeDefined();
    expect(sliderProps.dotsClass).toBe("slick-dots custom-dots");
  });
});
