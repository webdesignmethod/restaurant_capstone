import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../../api.js";
import BookingForm from "./BookingForm.js";
import "../../App.css";

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialTimes) => [
  ...initialTimes,
  ...fetchAPI(new Date()),
];

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const navigate = useNavigate();

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmation");
    }
  }

  return (
    <div className="booking-section">
      <h1 className="heading-primary" data-test-id="bookingHeading">
        Reserve a Table
      </h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
};

export default BookingPage;
