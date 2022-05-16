import { render, screen, within } from "@testing-library/react";
import DevCard from "../../components/developers/DevCard";
import { developerData } from "../fakeData";

const mockDeveloperData = developerData;

jest.mock("axios", () => ({
  esModule: true,
  default: {
    get: () => ({
      data: mockDeveloperData,
    }),
  },
}));

describe("developer card content", () => {
  test("present in the dom", async () => {
    await render(<DevCard dev={mockDeveloperData} index={0} />);
    const card = screen.getByTestId("dev-card");
    expect(within(card).getByTestId("avatar")).toBeTruthy();
    expect(card).toHaveTextContent(developerData.repo.description);
  });
});
