import { addToCart } from "@/services/Shopping";
import api from "@/config/api";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(api);

const mockProduct = {
  id: "1",
  name: "Product 1",
  price: 10,
  units: 10,
  image: "https://tapedin.com.br/image.png",
  created_at: 123123123,
};
const mockUserId = "user1";
const mockResponse = {
  id: "123456",
  product_id: "1",
  user_id: "user1",
  quantity: 1,
  total_paid: 10,
  created_at: 12381293812,
};

describe("addToCart", () => {
  test("adds product to cart correctly", async () => {
    mock.onPost("/shopping").reply(200, mockResponse);

    const addedProduct = await addToCart(mockProduct, mockUserId);

    expect(addedProduct).toEqual(mockResponse);
  });
});
