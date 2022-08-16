import "./SearchInput.css";
import searchIcon from "../../assets/icons/search.svg";
import settingsIcon from "../../assets/icons/settings.svg";

export function SearchInput(){
    return (
        <form className="search-form round flex-row gap-lg">
            <button className="search-form__btsearch">
                <img src={searchIcon} alt=""/>
            </button>
            <input type="text" className="" placeholder="Search something here"/>
            <button className="search-form__btsearch">
                <img src={settingsIcon} alt=""/>
            </button>
        </form>
    )
}