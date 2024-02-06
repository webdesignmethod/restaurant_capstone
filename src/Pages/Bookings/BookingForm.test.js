import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

// Check for static text on form
test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const labelElement = screen.getByLabelText(/choose date/i);
  expect(labelElement).toBeInTheDocument();
});

describe("Booking form tests", () => {
  const testFirstName = 'John';
  const testLastName = 'Doe';
  const availableTimes = ["17:00"];
  const defaultDate = new Date().toISOString().split("T")[0];
  const defaultGuest = 1;
  const occasions = ["Meeting"];

  const dispatch = jest.fn();
  const submitForm = jest.fn();
  const handleSubmit = jest.fn();

  test("Validate that the correct attributes are applied to the elements", () => {
    render(
      <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
    );

    const fNameInput = screen.getByLabelText(/first name/i);
    const lNameInput = screen.getByLabelText(/last name/i);
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeInput = screen.getByLabelText(/choose time/i);
    const guestInput = screen.getByLabelText(/number of guests/i);
    const occasionInput = screen.getByLabelText(/occasion/i);
    const submitBtn = screen.getByRole("button");

    expect(fNameInput).toBeInTheDocument();
    expect(fNameInput).toHaveAttribute("type", "text");
    expect(fNameInput).toHaveAttribute("id", "res-first-name");

    expect(lNameInput).toBeInTheDocument();
    expect(lNameInput).toHaveAttribute("type", "text");
    expect(lNameInput).toHaveAttribute("id", "res-last-name");

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("id", "res-date");

    expect(timeInput).toBeInTheDocument();
    expect(timeInput).toHaveAttribute("id", "res-time");

    expect(guestInput).toBeInTheDocument();
    expect(guestInput).toHaveAttribute("type", "number");
    expect(guestInput).toHaveAttribute("id", "guests");

    expect(occasionInput).toBeInTheDocument();
    expect(occasionInput).toHaveAttribute("id", "occasion");

    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toHaveAttribute("type", "submit");
    expect(submitBtn).toBeEnabled();
  });

  test("Form submits successfully with default input values", () => {
    render(
      <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
    );
    const fNameInput = screen.getByLabelText(/first name/i);
    const lNameInput = screen.getByLabelText(/last name/i);
    const occasionInput = screen.getByLabelText(/occasion/i);
    const submitBtn = screen.getByRole("button");
    
    fireEvent.change(fNameInput, { target: { value: testFirstName } });

    fireEvent.change(lNameInput, { target: { value: testLastName } });

    fireEvent.change(occasionInput, { target: { value: occasions[0] } });

    fireEvent.click(submitBtn);

    expect(submitForm).toHaveBeenCalledWith({
      firstName: testFirstName,
      lastName: testLastName,
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
    const fNameInput = screen.getByLabelText(/first name/i);
    const lNameInput = screen.getByLabelText(/last name/i);
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeInput = screen.getByLabelText(/choose time/i);
    const guestInput = screen.getByLabelText(/number of guests/i);
    const occasionInput = screen.getByLabelText(/occasion/i);

    const submitBtn = screen.getByRole("button");
    
    fireEvent.change(fNameInput, { target: { value: "" } });
    fireEvent.change(lNameInput, { target: { value: "" } });
    fireEvent.change(dateInput, { target: { value: "" } });
    fireEvent.change(timeInput, { target: { value: "" } });
    fireEvent.change(guestInput, { target: { value: "" } });
    fireEvent.change(occasionInput, { target: { value: "" } });

    fireEvent.click(submitBtn);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitBtn).toHaveAttribute("disabled");
  });
});
