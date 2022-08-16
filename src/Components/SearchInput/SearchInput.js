import getIcon from "../../Helpers/IconsHelper";
import "./SearchInput.css";

export function SearchInput(){
    const IconSearch = getIcon("search");
    const IconSettings = getIcon("settings");
    return (
        <form className="search-form round flex-row gap-lg">
            <button className="search-form__btsearch flex-row align-center">
                <IconSearch/>
            </button>
            <input type="text" className="" placeholder="Search something here"/>
            <button className="search-form__btsearch flex-row align-center">
                <IconSettings/>
            </button>
        </form>
    )
}