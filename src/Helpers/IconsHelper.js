import { ReactComponent as heart } from "../assets/icons/heart.svg";
import { ReactComponent as bell} from "../assets/icons/bell.svg";
import { ReactComponent as gear} from "../assets/icons/gear.svg";
import { ReactComponent as search} from "../assets/icons/search.svg";
import { ReactComponent as settings} from "../assets/icons/settings.svg";

export  default function getIcon(iconName){
    switch(iconName){
        case "heart":
            return heart;
        case "bell":
            return bell;
        case "gear":
            return gear;
        case "search":
            return search;
        case "settings":
            return settings;
        default:
            return null;
    }
}
