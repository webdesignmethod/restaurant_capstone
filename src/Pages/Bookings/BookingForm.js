import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const startDate = new Date().toISOString().split("T")[0];
  const startTime = availableTimes ? availableTimes[0] : "";
  const minGuests = 1;
  const maxGuests = 8;
  const occasions = ["Birthday", "Meeting", "Anniversary", "None"];

  const [date, setDate] = useState(startDate);
  const [time, setTime] = useState(startTime);
  const [guests, setGuests] = useState(minGuests);
  const [occasion, setOccasion] = useState(occasions[0]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch(e.target.value);
  };

  function resetForm() {
    setDate(startDate);
    setTime(startTime);
    setGuests(minGuests);
    setOccasion(occasions[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ date, time, guests, occasion });
    resetForm();

    console.log("Submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form grid" id="form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        name="res-date"
        min={startDate}
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required={true}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required={true}
      >
        {availableTimes?.map((times, i) => {
          return (
            <option data-testid="time-option" key={i} value={times}>
              {times}
            </option>
          );
        })}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min={minGuests}
        max={maxGuests}
        name="guests"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required={true}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        name="occasion"
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required={true}
      >
        {occasions?.map((occasion, i) => {
          return (
            <option data-testid="occasion-option" key={i} value={occasion}>
              {occasion}
            </option>
          );
        })}
      </select>
      <button
        type="submit"
        className="submit-btn"
        aria-label="Submit button"
        disabled={!date && !time && !guests && !occasion}
      >
        Make your reservation
      </button>

      <p className="reservation-description">
        Your reservation is for: {date} at {time}, for a total of {guests}
        guests with the occasion of {occasion}.
      </p>
    </form>
  );
};
export default BookingForm;
