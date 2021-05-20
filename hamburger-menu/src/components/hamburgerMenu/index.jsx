import React, { useState } from 'react';
import styled from 'styled-components';
import { MenuToggle } from './menuToggle';


const HamburgerMenuContainer = styled.div`
    display: flex;
`;

const HamburgerIcon = styled.div`
  color: ${({ reverseColor }) => (reverseColor ? "#000" : "#fff")};
  cursor: pointer;
  z-index: 99;
  transition: all  250ms ease-in-out;
`;

const MenuContainer = styled.div`
    min-width: 300px;
    width: 100%;
    max-width: 44%;
    background-color: #fff;
    box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
    z-index: 90;
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(4em);
    user-select: none;
    padding: 1em 2.5em;
`;

export function HamburgerMenu(props) {

    const [isOpen, setOpen] = useState(false);
    const toggleMenu =() => {
        setOpen(!isOpen);
    }

    return (
        <HamburgerMenuContainer>
            <HamburgerIcon>
                <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
                Icon
            </HamburgerIcon>

        </HamburgerMenuContainer>


    )
    

}