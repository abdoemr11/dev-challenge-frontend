import Ajv from "ajv"
import { weatherSchema } from "./schema";
const ajv = new Ajv();

export const validateWeather = ajv.compile(weatherSchema);

