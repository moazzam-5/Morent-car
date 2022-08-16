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
        <nav className=" top-nav flex-row bg-white gap-2xl align-center wrap">
            <p className="logo fw-bold fs-3xl text-accent">MORENT</p>
            <SearchInput/>
            <div className="top-nav__right flex-row gap-regular">
                <ul className="top-nav__buttons flex-row gap-regular">
                    <li><BuSecondary className="bu-lg bu-round" LeftIcon={getIcon("heart")}></BuSecondary></li>
                    <li><BuSecondary className = " bu-lg bu-round nav-buttons__notification" LeftIcon={getIcon("bell")}></BuSecondary></li>
                    <li><BuSecondary className="bu-lg bu-round" LeftIcon={getIcon("gear")}></BuSecondary></li>

                </ul>
                <img className="top-nav__pfp round" src={avatar} alt=""></img>
            </div>
        </nav>
    );
}

export function Footer(){
    return (
        <footer className="footer bg-white">
            <nav className="bottom-nav flex-row gap-2xl align-start wrap">
                <div className="bottom-nav__col flex-col gap-xl flex-1 align-start">
                    <p className="logo fw-bold fs-3xl text-accent">MORENT</p>
                    <p>Our vision is to provide convenience<br/>and help increase your sales business.</p>
                </div>
                <div className="bottom-nav__col flex-col gap-xl align-start">
                    <p className="text-dark fw-bold fs-xl">About</p>
                    <ul className="flex-col gap-xs">
                        <li><a >How it works</a></li>
                        <li><a >Featured</a></li>
                        <li><a >Partnership</a></li>
                        <li><a >Business Relations</a></li>
                    </ul>
                </div>
                <div className="bottom-nav__col flex-col gap-xl align-start">
                    <p className="text-dark fw-bold fs-xl">Community</p>
                    <ul className="flex-col gap-xs">
                        <li><a >Events</a></li>
                        <li><a >Podcast</a></li>
                        <li><a >Blog</a></li>
                        <li><a >Invite a friend</a></li>
                    </ul>
                </div>
                <div className="bottom-nav__col flex-col gap-xl align-start">
                    <p className="text-dark fw-bold fs-xl">Socials</p>
                    <ul className="flex-col gap-xs">
                        <li><a >Discord</a></li>
                        <li><a >Instagram</a></li>
                        <li><a >Twitter</a></li>
                        <li><a >Facebook</a></li>
                    </ul>
                </div>
            </nav>
            <div className="legal flex-row gap-xl wrap">
                <p className="text-dark fw-bold flex-1">©2022 MORENT. All rights reserved</p>
                <a >Privacy Policy</a>
                <a >Terms and conditions</a>

            </div>

        </footer>
    );
}