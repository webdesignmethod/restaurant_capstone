import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const startDate = new Date().toISOString().split("T")[0];
  const startTime = availableTimes ? availableTimes[0] : "";
  const minGuests = 1;
  const maxGuests = 8;
  const occasions = ["Birthday", "Meeting", "Anniversary", "Engagement", "None"];

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState(startDate);
  const [time, setTime] = useState(startTime);
  const [guests, setGuests] = useState(minGuests);
  const [occasion, setOccasion] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch(e.target.value);
  };

  function resetForm() {
    setFirstName('');
    setLastName('');
    setDate(startDate);
    setTime(startTime);
    setGuests(minGuests);
    setOccasion('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ firstName, lastName, date, time, guests, occasion });
    resetForm();

    console.log("Submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form grid" id="form"> 
        
      <label htmlFor="res-first-name">First Name</label>
      <input id="res-first-name" type="text" min='2' max="20" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />   

      <label htmlFor="res-last-name">Last Name</label>
      <input id="res-last-name" type="text" min='2' max="20" value={lastName} onChange={(e) => setLastName(e.target.value)} required />      
     
      <div className="date-time-group">
        <div className="date-container">
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
        </div>
        
        <div className="time-container">
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
        </div>
      </div>        
      
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
        <option data-testid="occasion-option" value=''>
              Select occasion
            </option>
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
      
    </form>
  );
};
export default BookingForm;
