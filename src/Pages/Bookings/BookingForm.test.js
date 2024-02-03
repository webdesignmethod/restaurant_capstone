import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

// Check for static text on form
test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const labelElement = screen.getByLabelText(/choose date/i);
  expect(labelElement).toBeInTheDocument();
});

describe("Booking form tests", () => {
  const availableTimes = ["17:00"];
  const defaultDate = new Date().toISOString().split("T")[0];
  const defaultGuest = 1;
  const occasions = ["Birthday"];

  const dispatch = jest.fn();
  const submitForm = jest.fn();
  const handleSubmit = jest.fn();

  test("Validate that the correct attributes are applied to the elements", () => {
    render(
      <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
    );

    const dateInputEl = screen.getByLabelText(/choose date/i);
    const timeInputEl = screen.getByLabelText(/choose time/i);
    const guestInputEl = screen.getByLabelText(/number of guests/i);
    const occasionInputEl = screen.getByLabelText(/occasion/i);
    const submitBtn = screen.getByRole("button");

    expect(dateInputEl).toBeInTheDocument();
    expect(dateInputEl).toHaveAttribute("type", "date");
    expect(dateInputEl).toHaveAttribute("id", "res-date");

    expect(timeInputEl).toBeInTheDocument();
    expect(timeInputEl).toHaveAttribute("id", "res-time");

    expect(guestInputEl).toBeInTheDocument();
    expect(guestInputEl).toHaveAttribute("type", "number");
    expect(guestInputEl).toHaveAttribute("id", "guests");

    expect(occasionInputEl).toBeInTheDocument();
    expect(occasionInputEl).toHaveAttribute("id", "occasion");

    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toHaveAttribute("type", "submit");
    expect(submitBtn).toBeEnabled();
  });

  test("Form submits successfully with default input values", () => {
    render(
      <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
    );
    const submitBtn = screen.getByRole("button");

    fireEvent.click(submitBtn);

    expect(submitForm).toHaveBeenCalledWith({
      date: defaultDate,
      time: availableTimes[0],
      guests: defaultGuest,
      occasion: occasions[0],
    });
  });

  test("Submit button is disabled when input fields are invalid and form isn't submitted", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        onSubmit={handleSubmit}
      />
    );

    const dateInputEl = screen.getByLabelText(/choose date/i);
    const timeInputEl = screen.getByLabelText(/choose time/i);
    const guestInputEl = screen.getByLabelText(/number of guests/i);
    const occasionInputEl = screen.getByLabelText(/occasion/i);
    const submitBtn = screen.getByRole("button");

    fireEvent.change(dateInputEl, { target: { value: "" } });
    fireEvent.change(timeInputEl, { target: { value: "" } });
    fireEvent.change(guestInputEl, { target: { value: "" } });
    fireEvent.change(occasionInputEl, { target: { value: "" } });

    fireEvent.click(submitBtn);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitBtn).toHaveAttribute("disabled");
  });
});
