export interface Weather {
    location: string
    date: string
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
export interface ApiData {
    location: {
        name: string
    }
    current: {
        last_updated: string;
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
export const isValidApiData = (data: unknown): data is ApiData => {
    if (
        data &&
        "name" in (data as ApiData).location &&
        (data as ApiData).location.name &&
        typeof (data as ApiData).location.name === "string" &&
        "current" in (data as ApiData) &&
        "last_updated" in (data as ApiData).current &&
        typeof (data as ApiData).current.last_updated === "string" &&
        "temp_c" in (data as ApiData).current &&
        typeof (data as ApiData).current.temp_c === "number" &&
        "temp_f" in (data as ApiData).current &&
        typeof (data as ApiData).current.temp_f === "number" &&
        "is_day" in (data as ApiData).current &&
        typeof (data as ApiData).current.is_day === "number" &&
        "condition" in (data as ApiData).current &&
        "text" in (data as ApiData).current.condition &&
        typeof (data as ApiData).current.condition.text === "string" &&
        "icon" in (data as ApiData).current.condition &&
        typeof (data as ApiData).current.condition.icon === "string" &&
        "code" in (data as ApiData).current.condition &&
        typeof (data as ApiData).current.condition.code === "number" &&
        "wind_mph" in (data as ApiData).current &&
        typeof (data as ApiData).current.wind_mph === "number" &&
        "wind_kph" in (data as ApiData).current &&
        typeof (data as ApiData).current.wind_kph === "number" &&
        "wind_degree" in (data as ApiData).current &&
        typeof (data as ApiData).current.wind_degree === "number" &&
        "wind_dir" in (data as ApiData).current &&
        typeof (data as ApiData).current.wind_dir === "string" &&
        "pressure_mb" in (data as ApiData).current &&
        typeof (data as ApiData).current.pressure_mb === "number" &&
        "pressure_in" in (data as ApiData).current &&
        typeof (data as ApiData).current.pressure_in === "number" &&
        "humidity" in (data as ApiData).current &&
        typeof (data as ApiData).current.humidity === "number" &&
        "vis_km" in (data as ApiData).current &&
        typeof (data as ApiData).current.vis_km === "number" &&
        "vis_miles" in (data as ApiData).current &&
        typeof (data as ApiData).current.vis_miles === "number"
      ) {
        return true;
      }
      console.log('its false');

      return false;
    
    
}
export const getWeatherFromApi = (data: ApiData): Weather =>{
    const currentDay : Weather = {
        location: data.location.name,
        date: data.current.last_updated,
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
        },
        humidity: data.current.humidity,
        visibility: {
            mile: data.current.vis_miles,
            km: data.current.vis_km
        },
        airPressure: data.current.pressure_mb

    }

    return currentDay
}