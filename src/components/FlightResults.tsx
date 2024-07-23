'use client';
import { useRouter } from 'next/navigation';
import useFlightStore from '../store/useFlightStore';
import { Flight } from '../types';
import useBookingStore from '../store/useBookingStore';

const FlightResults = () => {
  const flights = useFlightStore((state) => state.flights);
  const selectFlight = useBookingStore((state) => state.selectFlight);
  const router = useRouter();

  const handleBooking = (flight: Flight) => {
    selectFlight(flight);
    router.push(`/flight/booking/${flight.id}`);
  };

  return (
    <div>
      <div className="border p-2 space-y-2">
        <h2 className='py-4'>Flights search result</h2>
        <div className='flex flex-col w-6/12 space-y-4'>
          {
            flights.map((flight: Flight) => (
              <div key={flight.id}>
                <p className='pb-1 bg-black inline text-white p-1'>{flight.airline}</p>
                <div className='flex space-x-4 py-2'>
                  <div className='flex space-x-1 border-b-2'>
                    <p>from: </p> <p className='font-bold'>{flight.from}</p>
                  </div>

                  <div className='flex space-x-1'>
                    <p>to: </p> <p className='font-bold'>{flight.to}</p>
                  </div>

                  <div className='flex space-x-1'>
                    <p>price: </p> <p className='font-bold'>${flight.price}</p>
                  </div>

                </div>
                <button className='border bg-green-400 py-1 px-4 rounded' onClick={() => handleBooking(flight)}>Book</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FlightResults