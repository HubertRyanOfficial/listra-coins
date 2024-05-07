import { loginUser } from "@/services/users/auth";
import api from "@/config/api";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(api);

const mockUsers = [
  {
    id: "1",
    email: "user1@example.com",
    password: "password1",
    name: "User 1",
    balance: 100,
    created_at: Date.now(),
    profileImage: null,
    notificationToken: null,
  },
  {
    id: "2",
    email: "user2@example.com",
    password: "password2",
    name: "User 2",
    balance: 200,
    created_at: Date.now(),
    profileImage: null,
    notificationToken: null,
  },
];

describe("loginUser", () => {
  test("logs in user with correct email and password", async () => {
    mock.onGet("/users").reply(200, mockUsers);

    const email = "user1@example.com";
    const password = "password1";
    const loggedInUser = await loginUser(email, password);

    expect(loggedInUser).toEqual({
      id: "1",
      email: "user1@example.com",
      name: "User 1",
      balance: 100,
      created_at: expect.any(Number),
      profileImage: null,
      notificationToken: null,
    });
  });

  test("throws error for incorrect password", async () => {
    mock.onGet("/users").reply(200, mockUsers);

    const email = "user1@example.com";
    const password = "wrongpassword";

    await expect(
      loginUser(email, password)
    ).rejects.toThrowErrorMatchingSnapshot("incorrect-password");
  });

  test("throws error for user not exists", async () => {
    mock.onGet("/users").reply(200, mockUsers);

    const email = "nonexistentuser@example.com";
    const password = "password";

    await expect(
      loginUser(email, password)
    ).rejects.toThrowErrorMatchingSnapshot("user-not-exists");
  });
});
