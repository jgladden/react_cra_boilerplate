import React from "react";
import { render, waitForElement } from "@testing-library/react";
import { ReduxPage } from "./ReduxPage";

const props = {
  match: { params: { type: "print" } },
  portfolioTypes: ["online"],
  getPortfolio: jest.fn(),
  items: {
    print: {
      15: {
        id: 15,
        title: "test title",
        description: "<p>test description</p>"
      }
    }
  }
};

const queryByLabelText = render(<ReduxPage {...props} />);

describe("Redux Page Component Tests", () => {
  it("displays portfolio item", () => {
    const titleNode = waitForElement(() => queryByLabelText(/test title/i));
    expect(titleNode).toBeTruthy();
  });
});
