import {cities} from "../data/Cities";


export const CityList = () => {

    //todo : options will be filled with value of Cities.js
    return (
        <div className={`dropdownSection`}>
            <div className={`dropdownWrapper`}>
                <select className={`cityDropdown`} >
                    {
                        cities.map((city) => {
                            return <option key={city.id} value={[city.lat,city.long]}>{city.name}</option>
                    })
                    }
                </select>
            </div>
        </div>
        // <div>
        //     Header Active Theme: {data.theme}
        //     <br />
        //     <button onClick={() => {data.setTheme(data.theme === "light" ? "dark" : "light")}}>
        //         Change Theme
        //     </button>
        // </div>
    );
}
