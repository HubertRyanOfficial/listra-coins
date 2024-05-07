import { createUser, updateUser } from "@/services/users";
import api from "@/config/api";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(api);
const date = new Date().valueOf();

const mockUsers = [
  {
    id: "1",
    email: "user1@example.com",
    password: "password1",
    name: "User 1",
    balance: 100,
    created_at: date,
    profileImage: null,
    notificationToken: null,
  },
  {
    id: "2",
    email: "user2@example.com",
    password: "password2",
    name: "User 2",
    balance: 200,
    created_at: date,
    profileImage: null,
    notificationToken: null,
  },
];

describe("createUser", () => {
  test("creates new user correctly", async () => {
    const newUser = {
      email: "newuser@example.com",
      password: "password",
      name: "New User",
      balance: 0,
      created_at: date,
      profileImage: null,
      notificationToken: null,
    };

    mock.onGet("/users").reply(200, mockUsers);
    mock.onPost("/users").reply(200, { id: "3", ...newUser });

    const createdUser = await createUser(newUser);
    expect(createdUser).toEqual({ id: "3", ...newUser });
  });

  test("throws error for existing user", async () => {
    mock.onGet("/users").reply(200, mockUsers);

    let existingUser = mockUsers[0];
    delete existingUser.id;

    await expect(createUser(existingUser)).rejects.toThrowErrorMatchingSnapshot(
      "user-already-exists"
    );
  });
});

describe("updateUser", () => {
  test("updates user correctly", async () => {
    const userId = "1";
    const updatedData = { name: "Updated User" };

    mock.onGet(`/users/${userId}`).reply(200, { data: mockUsers[0] });
    mock
      .onPut(`/users/${userId}`)
      .reply(200, { id: userId, ...mockUsers[0], ...updatedData });

    const updatedUser = await updateUser(updatedData, userId);

    expect(updatedUser).toEqual({
      id: userId,
      ...mockUsers[0],
      ...updatedData,
    });
  });
});
