import React from "react";
import { render } from "@testing-library/react-native";
import ShopItem from "@/components/ShopItem";

jest.mock("@/components/ToastSheet", () => ({
  useToast: () => ({
    startToast: () => {},
  }),
}));

describe("ShopItem component", () => {
  const product = {
    id: "234",
    name: "Product 1",
    image: "http://tapedin.com/image1.png",
    units: 5,
    price: 10,
    in_cart: false,
    created_at: 12312313123,
  };

  test("renders correctly", () => {
    const { getByText } = render(<ShopItem data={product} userId="user123" />);
    expect(getByText("Product 1")).toBeTruthy();
    expect(getByText(`5 unidades`)).toBeTruthy();
    expect(getByText(`10.00`)).toBeTruthy();
  });
});
