// src/Pages/EjemploFechaHora.jsx
import React, { useState } from 'react';

const EjemploFechaHora = () => {
  const [date, setDate] = useState('');
  const [dateTime, setDateTime] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
          Fecha:
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="datetime">
          Fecha y Hora:
        </label>
        <input
          type="datetime-local"
          id="datetime"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    </div>
  );
};

export default EjemploFechaHora;
