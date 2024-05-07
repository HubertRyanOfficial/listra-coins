import React from "react";
import { render } from "@testing-library/react-native";
import ColumnList from "@/components/ColumnList";
import ShopItem from "@/components/ShopItem";

jest.mock("@/components/ToastSheet", () => ({
  useToast: () => ({
    startToast: () => {},
  }),
}));

const mockData = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

const mockShopData = [
  {
    id: "0231",
    name: "Copo Stanley",
    price: 200,
    created_at: 1293812398,
    in_cart: false,
    units: 30,
    image:
      "https://stanley.fbitsstatic.net/img/p/copo-termico-de-cerveja-stanley-473ml-78082/264566-5.jpg?w=495&h=500&v=no-value",
  },
  {
    id: "0232",
    name: "Notebook L24",
    price: 4000,
    created_at: 231231231,
    in_cart: false,
    units: 40,
    image: "https://i.zst.com.br/thumbs/12/3d/34/-1162794238.jpg",
  },
];

describe("ColumnList component", () => {
  test("renders correctly with given title list", () => {
    const renderItem = jest.fn();
    const { getByText } = render(
      <ColumnList
        componentKey="test-list"
        data={mockData}
        renderItem={renderItem}
        title="Test Title"
      />
    );

    expect(getByText("Test Title")).toBeTruthy();
  });

  test("renders items using provided renderItem function", () => {
    const renderItem = jest.fn();
    const { getByText } = render(
      <ColumnList
        componentKey="test-list"
        data={mockData}
        renderItem={renderItem}
        title="Test Title Shop"
      />
    );

    expect(getByText("Test Title Shop")).toBeTruthy();
    expect(renderItem).toHaveBeenCalledTimes(mockData.length);
  });

  test("renders shop items with given data", () => {
    const renderItem = jest.fn(({ item }) => (
      <ShopItem data={item} userId="user123" />
    ));

    const { getByText, getByTestId } = render(
      <ColumnList
        componentKey="shop-list"
        data={mockShopData}
        renderItem={renderItem}
        title="Shop"
      />
    );

    expect(getByText("Shop")).toBeTruthy();

    mockShopData.map((item, index) => {
      expect(getByTestId(`item-list-child-${index + 1}`)).toBeTruthy();
      expect(getByTestId(`shop-item-${item.id}-name`).props.children).toContain(
        item.name
      );
      expect(
        getByTestId(`shop-item-${item.id}-units`).props.children
      ).toContain(item.units);
      expect(
        getByTestId(`shop-item-${item.id}-price`).props.children
      ).toContain(item.price.toFixed(2));
    });
  });
});
