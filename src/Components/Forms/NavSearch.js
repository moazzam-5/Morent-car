import getIcon from "../../Helpers/IconsHelper";
import { BuMinimal } from "../Buttons/Buttons";
import "./NavSearch.css";

export function NavSearch(props){
    const IconSearch = getIcon("search");
    const IconSettings = getIcon("settings");
    return (
        <form className={"search-form flex gap-5 bg-white w-f " + props.className}>
            <BuMinimal className="search-form__btsearch" hasfill="false" LeftIcon={getIcon("search")}>
            </BuMinimal>
            <input type="text" className="min-w-0" placeholder="Search something here" />
            <BuMinimal className="search-form__btsearch ml-auto" hasfille="false" LeftIcon={getIcon("settings")}>
            </BuMinimal>
        </form>
    )
}