
import logo from '../images/logo.svg'
import hamburger_show from '../images/icon-menu.svg'
import hamburger_hide from '../images/icon-close-menu.svg'
import caret_down from '../images/icon-arrow-down.svg'
import caret_up from '../images/icon-arrow-up.svg'
import todoIcon from '../images/icon-todo.svg'
import calendarIcon from '../images/icon-calendar.svg'
import remindersIcon from '../images/icon-reminders.svg'
import planningIcon from '../images/icon-planning.svg'
import { useState } from "react"
import './NavBar.css'


function Dropdown1(props) {
    let [isPanelVisible, setIsPanelVisible] = useState('false')
    function togglePanel() {
        setIsPanelVisible((prevIsPanelVisible)=>{
            return !prevIsPanelVisible
        })
    }
    return (
        <>
            <a href="#" className="display_flex flex_direction_row" onClick={togglePanel}>Features &nbsp;<picture><img src={isPanelVisible ? caret_down : caret_up} /></picture></a>
            <ul className={isPanelVisible ? "panel display_none" : "panel display_block"}>
                <li><picture><img src={todoIcon} /></picture><a href="#">Todo List</a></li>
                <li><picture><img src={calendarIcon} /></picture><a href="#">Calendar</a></li>
                <li><picture><img src={remindersIcon} /></picture><a href="#">Reminders</a></li>
                <li><picture><img src={planningIcon} /></picture><a href="#">Planning</a></li>
            </ul>
        </>
    )
}

function Dropdown2(props) {
    let [isPanelVisible, setIsPanelVisible] = useState('false')
    function togglePanel() {
        setIsPanelVisible((prevIsPanelVisible)=>{
            return !prevIsPanelVisible
        })
    }
    return (
        <>
            <a href="#" className="display_flex flex_direction_row" onClick={togglePanel}>Company &nbsp;<picture><img src={isPanelVisible ? caret_down : caret_up} /></picture></a>
            <ul className={isPanelVisible ? "panel display_none" : "panel display_block"}>
                <li><a href="#">History</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </>
    )
}


function NavBar() {
    let [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false)
    function showMobileMenu() {
        setIsMobileMenuVisible((prevIsMobileMenuVisible)=>{
            return !prevIsMobileMenuVisible
        })
    }
    function hideMobileMenu() {
        setIsMobileMenuVisible((prevIsMobileMenuVisible)=>{
            return !prevIsMobileMenuVisible
        })
    }
    return (
        <nav className="nav">
            <picture className="logo">
                <img src={logo} />
            </picture>


            <div className={isMobileMenuVisible ? "nav_links display_none" : "nav_links display_flex"}>

                <picture className="hamburger_hide" onClick={hideMobileMenu}>
                    <img src={hamburger_hide} />
                </picture>
                <ul className="nav_links_a">
                    <li className="position_relative">
                        <Dropdown1 />
                    </li>
                    <li className="position_relative">
                        <Dropdown2 />
                    </li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">About</a></li>
                </ul>

                <ul className="nav_links_b">
                    <li><a href="#">Login</a></li>
                    <li><a href="#" className="register">Register</a></li>
                </ul>
            </div>


            <picture className="hamburger_show" onClick={showMobileMenu}>
                <img src={hamburger_show} />
            </picture>
        </nav>
    )
}

export default NavBar