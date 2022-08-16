import { cloneElement } from "react"
import "./Buttons.css"

export function BuPrimary(props){

}

export function BuSecondary(props){
    return (
        <button disabled = {props.disabled} className={`button bu-sm bu-secondary round flex-row gap-xs align-center ${props.className}`}>
            {props.LeftIcon ? <props.LeftIcon className="button__left-icon icon" /> : null }
            {props.text ? <p className="button__text fw-semibold">{props.text}</p> : null}
            {props.RightIcon ? <props.RightIcon className="button__right-icon icon" /> : null }
        </button>
    )
}

export function BuMinimal(props){

}