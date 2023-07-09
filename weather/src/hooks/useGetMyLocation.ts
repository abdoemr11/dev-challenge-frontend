import useWeatherStore from '../store';
export default function useGetMyLocation() {
    const setLocation = useWeatherStore((state) => state.setLocation);

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    function success(pos: GeolocationPosition) {
        const crd = pos.coords;


        setLocation({ latitude: crd.latitude, longitude: crd.longitude });
    }

    function error(err: GeolocationPositionError) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    const getMyLocation = ()=>{navigator.geolocation.getCurrentPosition(success, error, options)};

    return {getMyLocation}
}