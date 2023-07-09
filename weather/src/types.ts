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
export interface SummaryWeaher {
    date: string
    temp: {
        F: {
            max: number
            min: number
        }
        C: {
            max: number
            min: number
        }
    }
    condition: {
        text: string
        icon: string
    }
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
    forecast: {
        forecastday: {
            date: string
            day: {
                maxtemp_c: number,
                maxtemp_f: number,
                mintemp_c: number,
                mintemp_f: number,
                condition: {
                    text: string;
                    icon: string;
                    code: number;
                  }
            }
        }[]
    }
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

export const getForecastFromApi = (data: ApiData): SummaryWeaher[] => {
    const nexDays: SummaryWeaher[] = data.forecast.forecastday.map(day => ({
        date: day.date,
        temp: {
            F: {
                max: day.day.maxtemp_f,
                min: day.day.mintemp_f
            },
            C: {
                max: day.day.maxtemp_c,
                min: day.day.mintemp_c,
            }
        },
        condition: {
            text: day.day.condition.text,
            icon: day.day.condition.icon,
        }
    })) 
return nexDays
}