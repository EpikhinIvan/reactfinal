import React from 'react';
import './booking.css';

const BookingPage = () => {
  return (
    <div>
      <h2>Запись на тренировку у тренера</h2>
      <table>
        <tr>
          <th>DATE</th>
          <th>TYPE</th>
          <th>TRAINER</th>
        </tr>
        <td>
          <th>{}</th>
          <th>{}</th>
          <th>{}</th>
        </td>
      </table>
    </div>
  );
};

export default BookingPage;
