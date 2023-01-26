import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import ArticlesList, { initialArticlesCount } from "./pages/articles/ArticlesList";

const renderArticlesCount = 5;

describe("ArticlesList", () => {
  it("should render list of same number as initial count", () => {
    render(<ArticlesList />);
    const list = screen.getByRole("list", {
      name: /articles/i,
    });
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(initialArticlesCount);
  });

  it("should able to type in input and cards count should be same", () => {
    render(<ArticlesList />);
    const inputElem = screen.getByTestId("count-input");
    const buttonElem = screen.getByTestId("render-count-button");

    fireEvent.change(inputElem, {
      target: {
        value: renderArticlesCount,
      },
    });

    fireEvent.click(buttonElem);

    const list = screen.getByRole("list", {
      name: /articles/i,
    });

    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(renderArticlesCount);
  });
});
