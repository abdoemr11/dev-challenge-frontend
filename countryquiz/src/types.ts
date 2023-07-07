export interface Country {
    name: string
    capital: string
    flag: string
}
export interface RestCountry {
  name: {common: string}
  capital: string[]
  flags: {svg: string}
}
export const isCountry = (data: unknown): data is RestCountry => {

  return typeof (data as RestCountry)?.name?.common ==='string' && (data as RestCountry)?.capital &&
  typeof (data as RestCountry)?.capital[0] ==='string' &&
  typeof (data as RestCountry)?.flags?.svg ==='string' 

  };