import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingPage from "./BookingPage";

// Test For Static Text = Passes
test("Renders the BookingForm heading", () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );
  const headingElement = screen.getByText(/reserve a table/i);
  expect(headingElement).toBeInTheDocument();
});

// Validate initial times to return the expected value
test("Initial times returns expected value", async () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );

  const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

  const times = await screen.findAllByTestId("time-option");

  times.map((time) => expect(time.value).toMatch(timeFormat));
});

// Update Time Function outputs provided value
test("Update Time Function outputs provided value", async () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );

  const testDate = "2024-10-01";
  const dateInputEl = screen.getByLabelText(/choose date/i);
  const initialTimes = await screen.findAllByTestId("time-option");
  fireEvent.change(dateInputEl, { target: { value: testDate } });

  const updatedTimes = await screen.findAllByTestId("time-option");

  expect(dateInputEl).toHaveValue(testDate);

  expect(initialTimes.length).not.toBe(updatedTimes.length);
});
