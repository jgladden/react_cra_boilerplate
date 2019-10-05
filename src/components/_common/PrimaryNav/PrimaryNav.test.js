import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PrimaryNav } from "./PrimaryNav";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

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

const history = createMemoryHistory();
history.push("/portfolio/print");
const { getByText } = render(
  <Router history={history}>
    <PrimaryNav {...props} />
  </Router>
);

describe("Redux Page Component Tests", () => {
  it("navigates to correct route when nav clicked", () => {
    expect(history.location.pathname).toBe("/portfolio/print");
    fireEvent.click(getByText(/ONLINE/i));
    expect(history.location.pathname).toBe("/portfolio/online");
  });
});
