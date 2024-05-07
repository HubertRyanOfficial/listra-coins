import { getAllProducts } from "@/services/products";
import api from "@/config/api";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(api);

const mockProducts = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
];

const mockShoppingItems = [
  { product_id: 1, user_id: "user1" },
  { product_id: 3, user_id: "user1" },
];

describe("getAllProducts", () => {
  test("fetches all products and updates with shopping cart status correctly", async () => {
    mock.onGet("/products").reply(200, mockProducts);
    mock.onGet("/shopping").reply(200, mockShoppingItems);

    const userId = "user1";
    const productsWithCartStatus = await getAllProducts(userId);

    expect(mock.history.get.length).toBe(2);
    expect(mock.history.get[0].url).toBe("/products");
    expect(mock.history.get[1].url).toBe("/shopping");

    expect(productsWithCartStatus).toEqual([
      { id: 1, name: "Product 1", price: 10, in_cart: true },
      { id: 2, name: "Product 2", price: 20, in_cart: false },
    ]);
  });
});
