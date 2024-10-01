import { render, fireEvent, screen } from "@testing-library/react";
import CategoryDropDown from ".";

interface MenuItem {
  item_id: string;
  name: string;
  price: number;
  description: string;
  item_image_url: string;
}

jest.mock("../TodaysMenuItem", () => {
  return function MockTodaysMenuItem({
    item,
    onAddItem,
    onRemoveItem,
    quantity,
  }: {
    item: MenuItem;
    onAddItem: (item: MenuItem) => void;
    onRemoveItem: (item: MenuItem) => void;
    quantity: number;
  }) {
    return (
      <div data-testid={`menu-item-${item.item_id}`}>
        <span>{item.name}</span>
        <button onClick={() => onAddItem(item)}>Add</button>
        <button onClick={() => onRemoveItem(item)}>Remove</button>
        <span>Quantity: {quantity}</span>
      </div>
    );
  };
});

const mockItems: MenuItem[] = [
  {
    item_id: "1",
    name: "Item 1",
    price: 10,
    description: "Description 1",
    item_image_url: "image1.jpg",
  },
  {
    item_id: "2",
    name: "Item 2",
    price: 20,
    description: "Description 2",
    item_image_url: "image2.jpg",
  },
];

const mockOnAddItem = jest.fn();
const mockOnRemoveItem = jest.fn();
const mockGetItemQuantity = jest.fn();

const renderComponent = () => {
  return render(
    <CategoryDropDown
      title="My Category"
      items={mockItems}
      onAddItem={mockOnAddItem}
      onRemoveItem={mockOnRemoveItem}
      getItemQuantity={mockGetItemQuantity}
    />
  );
};

describe("CategoryDropDown Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render component", () => {
    renderComponent();
    expect(
      screen.getByTestId("CategoryDrownDownMainContainer")
    ).toBeInTheDocument();
  });

  it("initially does not show menu items", () => {
    renderComponent();
    expect(screen.queryByTestId("menu-item-1")).not.toBeInTheDocument();
  });

  it("toggles menu items visibility when clicked", () => {
    renderComponent();

    fireEvent.click(screen.getByText("My Category"));
    expect(screen.getByTestId("menu-item-1")).toBeInTheDocument();

    fireEvent.click(screen.getByText("My Category"));
    expect(screen.queryByTestId("menu-item-1")).not.toBeInTheDocument();
  });

  it("renders all menu items when expanded", () => {
    renderComponent();

    fireEvent.click(screen.getByText("My Category"));
    expect(screen.getByTestId("menu-item-1")).toBeInTheDocument();
    expect(screen.getByTestId("menu-item-2")).toBeInTheDocument();
  });

  it("calls onAddItem when add button is clicked", () => {
    renderComponent();

    fireEvent.click(screen.getByText("My Category"));

    const addButtons = screen.getAllByText("Add");
    fireEvent.click(addButtons[0]);

    expect(mockOnAddItem).toHaveBeenCalledWith(mockItems[0]);
  });

  it("calls onRemoveItem when remove button is clicked", () => {
    renderComponent();

    fireEvent.click(screen.getByText("My Category"));

    const removeButtons = screen.getAllByText("Remove");
    fireEvent.click(removeButtons[0]);

    expect(mockOnRemoveItem).toHaveBeenCalledWith(mockItems[0]);
  });

  it("displays correct quantity for each item", () => {
    mockGetItemQuantity.mockReturnValueOnce(2).mockReturnValueOnce(1);

    renderComponent();

    fireEvent.click(screen.getByText("My Category"));

    expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
    expect(screen.getByText("Quantity: 1")).toBeInTheDocument();
  });

  it("rotates the dropdown icon when expanded", () => {
    renderComponent();

    const dropdownIcon = screen.getByRole("img");
    expect(dropdownIcon).toHaveAttribute("data-rotates", "false");

    fireEvent.click(screen.getByText("My Category"));
    expect(dropdownIcon).toHaveAttribute("data-rotates", "true");
  });

  it("applies isRotates prop to MenuItemsList", () => {
    renderComponent();

    const menuItemsList = screen.getByRole("list");
    expect(menuItemsList).toHaveAttribute("data-rotates", "false");

    fireEvent.click(screen.getByText("My Category"));
    expect(menuItemsList).toHaveAttribute("data-rotates", "true");
  });
});
