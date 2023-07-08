interface Weather {
    location: string
    temp: {
        F: number
        C: number
    }
    condition: {
        text: string
        icon: string
    }
    wind: {
        mph: number
        kph: number
        direction: string
        degree: number
    }

    humidity: number
    visibility: {
        mile: number
        km: number
    }
    airPressure: number

}
interface ApiData {
    location: {
        name: string
    }
    current: {
        date: string;
        temp_c: number;
        temp_f: number;
        is_day: number;
        condition: {
          text: string;
          icon: string;
          code: number;
        };
        wind_mph: number;
        wind_kph: number;
        wind_degree: number;
        wind_dir: string;
        pressure_mb: number;
        pressure_in: number;
        humidity: number;
        vis_km: number;
        vis_miles: number;

    }
}
const validateData = <Data>(data: ApiData): Weather =>{
    const currentDay : Weather = {
        location: data.location.name,
        temp: {
            F: data.current.temp_f,
            C: data.current.temp_c
        },
        condition: {
            text: data.current.condition.text,
            icon: data.current.condition.icon
        },
        wind: {
            mph: data.current.wind_mph,
            kph: data.current.wind_kph,
            direction: data.current.wind_dir,
            degree: data.current.wind_degree,
        }
    }
}