import { useState } from 'react';

const AppointmentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      date,
      time,
    };

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name*</label>
      <input
        id="name"
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email Address*</label>
      <input
        id="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="date">Date*</label>
      <input
        id="date"
        type="date"
        required
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="time">Time*</label>
      <input
        id="time"
        type="time"
        required
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AppointmentForm;
