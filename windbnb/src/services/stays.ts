import { Stay } from "../types";
import allstays from '../services/stays.json'
export function getStays(): Stay[] {
    return allstays;
}