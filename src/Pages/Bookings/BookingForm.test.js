import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

// Test Passes
test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const labelElement = screen.getByLabelText(/choose date/i);
  expect(labelElement).toBeInTheDocument();
});
