'use client';
import { useEffect } from 'react';
import useBookingStore from '../store/useBookingStore';

interface BookingDetailsProps {
  id: string;
}

const BookingDetails = ({ id }: BookingDetailsProps) => {
  const selectedFlight = useBookingStore((state) => state.selectedFlight);
  const selectFlight = useBookingStore((state) => state.selectFlight);

  useEffect(() => {
    if (!selectedFlight || selectedFlight.id !== id) {
    }
  }, [id, selectedFlight, selectFlight]);

  if (!selectedFlight || selectedFlight.id !== id) {
    return <p>No flight selected</p>;
  }

  return (
    <div>
      <h2 className='py-2'>Booking Details</h2>
      <div className='flex flex-col space-y-2 border p-4 w-6/12'>
        <p>Airline: {selectedFlight.airline}</p>
        <p>From: {selectedFlight.from}</p>
        <p>To: {selectedFlight.to}</p>
        <p>Departure: {selectedFlight.departure}</p>
        <p>Arrival: {selectedFlight.arrival}</p>
        <p>Price: ${selectedFlight.price}</p>
      </div>

      <button onClick={() => alert('Flight booked successfully!')} className='border bg-green-400 py-1 px-4 rounded mt-2'>
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingDetails;
