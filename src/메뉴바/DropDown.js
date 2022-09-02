import styled from "styled-components";
import { useState } from "react";

const DropDown = () => {
    const [state, setState] = useState(false)
    const showMenu = () => {
        setState(true)
    }
    const hiddenMenu = () => {
        setState(false)
    }
    return (
        <Nav>
            <div className="dropdown">
                <div>HOME</div>
                <div>Contact</div>
                <div>About</div>
                <div className="dropdown-menu" onMouseEnter={showMenu} onMouseLeave={hiddenMenu}>DropMenu    
                    {state ?
                    <ul className="dropdowm-list" onMouseEnter={showMenu}>
                        <li>1st menu</li>
                        <li>2nd menu</li>
                        <li>3rd menu</li>
                        <li>4th menu</li>
                        </ul>
                         :
                        null
                    }
                </div>

            </div >
        </Nav>
    )
}

export default DropDown;

const Nav = styled.nav`
    display: block;

    .dropdown{
        padding-top: 2rem;
        /* height:7rem; */
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        color:black;
        /* border-bottom: 1px solid gray; */
    }

    .dropdown-menu{

    }

    `