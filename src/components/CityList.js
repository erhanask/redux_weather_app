import { useDispatch} from "react-redux";
import { cities } from "../data/Cities";
import { changeCoords } from "../redux/WeatherSlice";

export const CityList = () => {
  const dispatch = useDispatch();

  return (
    <div className={`dropdownSection`}>
      <div className={`dropdownWrapper`}>
        <select
          className={`cityDropdown`}
          onChange={(event) => {
            dispatch(changeCoords(event.target.value))
          }}
        >
          {cities.map((city) => {
            return (
              <option key={city.id} value={[city.lat,city.long]}>
                {city.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
