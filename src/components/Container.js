import { CityList } from "./CityList";
import { Content } from "./Content";

export const Container = () => {


    return (
        <div className={`app`}>
            <CityList></CityList>
            <Content></Content>
        </div>
    );
}