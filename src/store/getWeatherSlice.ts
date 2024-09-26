import { createSlice } from "@reduxjs/toolkit";
import { getWeatherData } from "./getWeatherApi";


const getWeatherSlice = createSlice({
    name: 'weather',
    initialState: {
        data: null
    },
    reducers: {
        getWeather: (state, action) => {
            state.data = action.payload
        }
    }
})

export const getWeatherInfo = (city:string) => async (dispatch: (arg0: { payload: {city: string}; type: "weather/getWeather"; }) => void) => {
    try {
        const data = await getWeatherData(city)
        dispatch(getWeather(data))
    } catch (error) {
        console.error(error);
    }
}

export const { getWeather } = getWeatherSlice.actions
export default getWeatherSlice.reducer