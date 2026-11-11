
import { useState } from 'react';
import './App.css';

// Дочерний компонент аудитории
function RoomCard({
  room,
  capacity,
  equipment,
  booked,
  onBook,
  onCancel
}) {
  return (
    <div className="room-card">
      <h2>Аудитория №{room}</h2>

      <p>Вместимость: {capacity} человек</p>

      <p>Оборудование: {equipment}</p>

      <p className={booked ? 'booked' : 'available'}>
        Статус: {booked ? 'Забронирована' : 'Свободна'}
      </p>

      {booked ? (
        <button className="cancel-button" onClick={onCancel}>
          Отменить бронь
        </button>
      ) : (
        <button onClick={onBook}>
          Забронировать
        </button>
      )}
    </div>
  );
}

// Родительский компонент
function RoomBooking() {
  const [bookedRooms, setBookedRooms] = useState([]);

  // Бронирование аудитории
  function bookRoom(room) {
    setBookedRooms(rooms => {
      if (rooms.includes(room)) {
        return rooms;
      }

      return [...rooms, room];
    });
  }

  // Отмена бронирования
  function cancelBooking(room) {
    setBookedRooms(rooms =>
      rooms.filter(r => r !== room)
    );
  }

  return (
    <div className="container">
      <h1>Лабораторная работа №11</h1>

      <h2>Вариант №17 — Бронирование аудиторий</h2>

      <p>React: Props и State</p>

      <div className="rooms">

        <RoomCard
          room="101"
          capacity={30}
          equipment="Проектор, компьютер"
          booked={bookedRooms.includes('101')}
          onBook={() => bookRoom('101')}
          onCancel={() => cancelBooking('101')}
        />

        <RoomCard
          room="202"
          capacity={25}
          equipment="Компьютеры, проектор"
          booked={bookedRooms.includes('202')}
          onBook={() => bookRoom('202')}
          onCancel={() => cancelBooking('202')}
        />

        <RoomCard
          room="303"
          capacity={40}
          equipment="Интерактивная доска"
          booked={bookedRooms.includes('303')}
          onBook={() => bookRoom('303')}
          onCancel={() => cancelBooking('303')}
        />

      </div>

      <div className="booking-info">
        <h2>Информация о бронировании</h2>

        <p>
          Количество забронированных аудиторий:
          {' '}{bookedRooms.length}
        </p>

        <p>
          Забронированные аудитории:
          {' '}
          {bookedRooms.length > 0
            ? bookedRooms.join(', ')
            : 'Нет бронирований'}
        </p>
      </div>
    </div>
  );
}

// Главный компонент
export default function App() {
  return <RoomBooking />;
}
