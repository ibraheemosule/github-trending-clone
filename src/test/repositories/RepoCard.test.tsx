import { render, screen, within } from "@testing-library/react";
import RepoCard from "../../components/repositories/RepoCard";
import { userRepository } from "../fakeData";

const mockUserRepository = userRepository;
const repoText =
  "A fully functional Android app built entirely with Kotlin and Jetpack Compose";
jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: mockUserRepository,
    }),
  },
}));

test("repo card should contain some texts and elements after loading", async () => {
  await render(<RepoCard repo={mockUserRepository} />);
  const card = screen.getByTestId("repo-card");

  expect(card).toHaveTextContent(/android\/ nowinandroid/i);
  expect(card).toHaveTextContent(repoText);
  const userLink = screen.getAllByTestId("user-link");
  userLink.forEach((link, i) => {
    expect(within(link).getByRole("img")).toBeTruthy();
  });
});
