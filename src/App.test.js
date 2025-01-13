import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders home page and load the customer data", async () => {
    render(<App />);
    const linkElement = screen.getByText("Home");
    expect(linkElement).toBeInTheDocument();
  });

  test("navigates to about page", async () => {
    render(<App />);
    fireEvent.click(screen.getByText("About"));
    await waitFor(() => screen.getByText("About"));
    expect(screen.getByText("About")).toBeInTheDocument();
  });
});
