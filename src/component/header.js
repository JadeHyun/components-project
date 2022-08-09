import React from 'react';
import styled from 'styled-components'
import Modal from './header/Modal';
import Logo from './header/Logo';

const Header = () => {
    const Header = styled.header`
        padding: 20px 30px;
        width:85vw;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    `
    
    return (
        <Header id='top'>
            <Logo />
            <Modal />
        </Header>

    )
}

export default Header;