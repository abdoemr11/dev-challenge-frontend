import { create } from "zustand";
import { Country } from "./types";
import { devtools } from "zustand/middleware";
interface StoreType {
    allCountries: Country[]
    roundQuestions: Country[]
    gameStatus: 'playing' | 'lose'
    score: number
    setCountries: (countries: Country[])=> void
    restart: ()=> void
    lose: ()=> void
    increaseScore: ()=> void
    setRoundQuestion: () => void
}

const useCountryStore = create<StoreType>()(devtools(set => ({
    allCountries: [],
    roundQuestions: [],
    gameStatus: 'playing',
    score: 0,
    setCountries: (countries)=> set((state) => {
        const roundCountries: Country[] = [];
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * state.allCountries.length);
            roundCountries.push(state.allCountries[randomIndex]);
        }
        return ({...state, allCountries: countries, roundQuestions : roundCountries})
    }),
    restart: ()=> set(state=> ({...state, score: 0, gameStatus: 'playing'})),
    lose: ()=> set(state=> ({...state, gameStatus: 'lose'})),
    increaseScore: ()=> set(state=> ({...state, score: state.score + 1})),
    setRoundQuestion: ()=> set(state=> {
        const newRoundCountries: Country[] = [];
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * state.allCountries.length);
            newRoundCountries.push(state.allCountries[randomIndex]);
        }
        console.log(newRoundCountries, state.roundQuestions);
        
        return ({...state, roundQuestions: newRoundCountries})
    })
})))

export default useCountryStore