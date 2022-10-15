import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../redux/WeatherSlice";

export const Content = () => {

    const dispatch = useDispatch();
    const items = useSelector(state => state.weather.items)
    const status = useSelector(state => state.weather.status)
    const coords = useSelector(state => state.weather.coords);



    useEffect(() => {
        if (status === 'idle') 
            dispatch(fetchWeatherData(['41.015137','28.979530']));
    },[status,dispatch])

    useEffect(() => {
        dispatch(fetchWeatherData(coords))
    },[coords,dispatch])

    console.log(items);
    return (
        <div className={`daysListWrapper`}>
            <ul className={`daysList`}>
       
                        <li  className={`activeDay`}>
                            <div>
                                Monday
                            </div>
                            <div>
                                img
                            </div>
                            <div>
                                20C
                            </div>
                        </li>
                
            </ul>
        </div>

    );
}
/* <img alt={"icon"} width={"100%"} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} /> */

// {Math.ceil(item.temp.day)}&#176;

// new Date(item.dt * 1000).toLocaleDateString('en', { weekday: 'long', })
