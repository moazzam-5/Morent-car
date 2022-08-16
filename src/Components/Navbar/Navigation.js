import { BuSecondary } from "../Buttons/Buttons";
import { SearchInput } from "../SearchInput/SearchInput";
import  heartIcon from "../../assets/icons/heart.svg"
import  bellIcon from "../../assets/icons/bell.svg"
import  gearIcon from "../../assets/icons/gear.svg"
import avatar from "../../assets/avatar.png"
import "./Navigation.css";
import getIcon from "../../Helpers/IconsHelper";


export function NavbarTop(){
    return (
        <nav className=" nav-bar flex-row bg-white gap-2xl align-center">
            <p className="logo fw-bold fs-3xl text-accent">MORENT</p>
            <SearchInput/>
            <div className="nav-bar__right flex-row gap-regular">
                <ul className="nav-bar__buttons flex-row gap-regular">
                    <li><BuSecondary disabled={true} LeftIcon={getIcon("heart")} text="Heart"></BuSecondary></li>
                    <li><BuSecondary className = "nav-buttons__notification" LeftIcon={getIcon("bell")}></BuSecondary></li>
                    <li><BuSecondary LeftIcon={getIcon("gear")}></BuSecondary></li>

                </ul>
                <img className="nav-bar__pfp round" src={avatar} alt=""></img>
            </div>
        </nav>
    );
}