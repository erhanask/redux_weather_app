
export const Content = () => {

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
