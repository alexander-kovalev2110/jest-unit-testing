/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Hello from "./hello";

let container = null;
beforeEach(() => {
    // Preparing the DOM element to render to
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // Clean up after completion
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with or without a name", () => {
    act(() => {
        render(<Hello />, container);
    });
    expect(container.textContent).toBe("Hey, stranger");

    act(() => {
        render(<Hello name="Jenny" />, container);
    });
    expect(container.textContent).toBe("Hello, Jenny!");

    act(() => {
        render(<Hello name="Margaret" />, container);
    });
    expect(container.textContent).toBe("Hello, Margaret!");
});
