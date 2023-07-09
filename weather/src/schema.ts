export const weatherSchema = {
    
  "type": "object",
  "properties": {
    "location": {
      "type": "object",
      "properties": {
        "name": { "type": "string" }
      },
      "required": ["name"]
    },
    "current": {
      "type": "object",
      "properties": {
        "last_updated": { "type": "string" },
        "temp_c": { "type": "number" },
        "temp_f": { "type": "number" },
        "is_day": { "type": "number" },
        "condition": {
          "type": "object",
          "properties": {
            "text": { "type": "string" },
            "icon": { "type": "string" },
            "code": { "type": "number" }
          },
          "required": ["text", "icon", "code"]
        },
        "wind_mph": { "type": "number" },
        "wind_kph": { "type": "number" },
        "wind_degree": { "type": "number" },
        "wind_dir": { "type": "string" },
        "pressure_mb": { "type": "number" },
        "pressure_in": { "type": "number" },
        "humidity": { "type": "number" },
        "vis_km": { "type": "number" },
        "vis_miles": { "type": "number" }
      },
      "required": [
        "last_updated",
        "temp_c",
        "temp_f",
        "is_day",
        "condition",
        "wind_mph",
        "wind_kph",
        "wind_degree",
        "wind_dir",
        "pressure_mb",
        "pressure_in",
        "humidity",
        "vis_km",
        "vis_miles"
      ]
    },
    "forecast": {
      "type": "object",
      "properties": {
        "forecastday": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "date": { "type": "string" },
              "day": {
                "type": "object",
                "properties": {
                  "maxtemp_c": { "type": "number" },
                  "maxtemp_f": { "type": "number" },
                  "mintemp_c": { "type": "number" },
                  "mintemp_f": { "type": "number" },
                  "condition": {
                    "type": "object",
                    "properties": {
                      "text": { "type": "string" },
                      "icon": { "type": "string" },
                      "code": { "type": "number" }
                    },
                    "required": ["text", "icon", "code"]
                  }
                },
                "required": ["maxtemp_c", "maxtemp_f", "mintemp_c", "mintemp_f", "condition"]
              }
            },
            "required": ["date", "day"]
          }
        }
      },
      "required": ["forecastday"]
    }

  },
  "required": ["location", "current", "forecast"]
}