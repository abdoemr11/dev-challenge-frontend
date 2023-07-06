export interface Country {
    name: string
    capital: string
    flag: string
}

export const isCountry = (data: unknown): data is Country => {

    
    return (
        data.name && data.capital && data.flags && data.flags.svg && data.name.common &&
      typeof data.name.common === 'string' &&
      typeof data.capital[0] === 'string' &&
      typeof data.flags.svg === 'string'
    );
  };