import React from 'react';
import { FaHome } from "react-icons/fa";
import styled from 'styled-components'


const Logo = () => {
    const LogoLayout = styled.div`
        font-size:44px ;
    
    `
    return (
        <LogoLayout>
            <a href='http://localhost:3000' id='top'><FaHome /></a> 
        </LogoLayout>
    )
}

export default Logo;