import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const startDate = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(startDate);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate("");
    setTime("");
    setGuests("");
    setOccasion("");

    submitForm({ date, time, guests, occasion });
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
        <option value="">Select a time</option>
        {availableTimes.map((time, i) => {
          return (
            <option key={i} value={time}>
              {time}
            </option>
          );
        })}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
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
        <option value="">Select an occasion</option>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>
      <input
        disabled={!date || !time || !guests || !occasion}
        type="submit"
        value="Make Your reservation"
        className="submit-btn"
      />
      <p className="reservation-description">
        Your reservation is for: {date} at {time}, for a total of {guests}{" "}
        guests with the occasion of {occasion}.
      </p>
    </form>
  );
};

export default BookingForm;
