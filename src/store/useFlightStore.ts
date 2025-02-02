import { create } from 'zustand';
import { Flight } from '../types';

interface FlightStoreState {
  flights: Flight[];
  setFlights: (flights: Flight[]) => void;
}

const useFlightStore = create<FlightStoreState>((set) => ({
  flights: [],
  setFlights: (flights: Flight[]) => set({ flights }),
}));

export default useFlightStore;
