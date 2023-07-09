import {create} from "zustand";

interface Location {
  latitude: number ;
  longitude: number ;
}

interface LocationStoreState {
  location: Location;
  searchWindowVisible: boolean

  setLocation: (location: Location) => void;
  setSearchWindowVisible: (isvisible: boolean) => void;
}

const useWeatherStore = create<LocationStoreState>((set) => ({
  location: {
    latitude: 0,
    longitude: 0,
  },
  searchWindowVisible: false,
  setLocation: (location) => set({ location }),
  setSearchWindowVisible: (isvisible) => set({
      searchWindowVisible: isvisible
  }),
}));

export default useWeatherStore;
