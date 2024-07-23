'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useFlightStore from '../store/useFlightStore';

const FlightSearch = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const router = useRouter();
  const setFlights = useFlightStore((state) => state.setFlights);

  const searchFlights = async () => {
    const flights = [
      {
        id: '1',
        airline: 'Airline A',
        from,
        to,
        departure: '10:00 AM',
        arrival: '12:00 PM',
        price: 100,
      },
      {
        id: '2',
        airline: 'Airline B',
        from,
        to,
        departure: '01:00 PM',
        arrival: '03:00 PM',
        price: 150,
      },
    ];
    setFlights(flights);
    router.push('/flight/results');
  };

  return (
    <div className="border p-2 space-y-2">
      <h2 className='py-4'>Search Flights</h2>
      <div className='flex flex-col w-6/12 space-y-4'>

      <input
        type="text"
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        className="border rounded p-2"
      />
      <input
        type="text"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="border rounded p-2"
      />
      <button onClick={searchFlights} className="bg-green-400 rounded p-2">
        Search
      </button>
      </div>

    </div>
  );
};

export default FlightSearch;
