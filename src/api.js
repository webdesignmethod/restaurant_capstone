const seededRandom = (seed) => {
  const a = 2 ** 35 - 31;
  const b = 185852;
  let s = seed % a;

  return () => (s = (s * b) % a) / a;
};

const fetchAPI = (date) => {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 22; i++) {
    if (random() < 0.5) result.push(i + ":00");
    if (random() < 0.5) result.push(i + ":30");
  }

  return result;
};

const submitAPI = (formData) => true;

export { fetchAPI, submitAPI };
