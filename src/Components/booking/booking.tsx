import React, { useState } from 'react';
import './booking.css';

interface Booking {
  date: string;
  time: string;
  type: string;
  trainer: string;
}

const BookingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    const formData = {
      date: selectedDate,
      time: selectedTime,
    };

    console.log('Отправленная форма:', formData);
  };

  const bookings: Booking[] = [
    { date: '2024-04-30', time: '10:00', type: 'Private Session', trainer: 'John Doe' },
    { date: '2024-05-01', time: '15:00', type: 'Group Class', trainer: 'Jane Smith' },
  ];

  return (
    <div>
      <div className='background-contacts'><h1>Запись на тренировку у тренера</h1></div>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="date">Дата:</label>
          <input type="date" id="date" value={selectedDate} onChange={handleDateChange} />
          <label htmlFor="time">Время:</label>
          <select id="time" value={selectedTime} onChange={handleTimeChange}>
            <option value="10:00">10:00</option>
            <option value="12:00">12:00</option>
            <option value="15:00">15:00</option>
          </select>
          <button type="submit" className='submit'>Отправить</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Дата</th>
              <th>Время</th>
              <th>Тип тренировки</th>
              <th>Тренер</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={`${booking.date}-${booking.time}`}>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.type}</td>
                <td>{booking.trainer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ); 
};

export default BookingPage;
