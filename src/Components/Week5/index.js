import React, { useState } from 'react';
import styled from "styled-components";
import closeIcon from "../../assets/close.svg";
import { Button } from "../Week3/index";
import { Swipeable } from 'react-swipeable'

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const StyleSideNav = styled.div` 
    height: 100vh;
    width: ${(props) => props.open ? '250px' : '0px'};
    position: fixed;
    top: 0;
    left: 0;
    background: #111;
    transition: 1s;
`;

const StyledCloseIcon = styled.img`
    float: right;
    width: 25px;
    height: 25px;
    fill: white;
    margin: 1rem 1rem;
    cursor: pointer;
`;

const StyledNav = styled.ul`
    display: flex;
    color: white;
    flex-direction: column;

    & li {
        text-align: center;
        list-style: none;
        margin-top: 4rem;
        cursor: pointer;
        &:hover {
            color: grey;
        }
    }
`;



const Week5 = () => {



    const [navOpen, setNavOpen] = useState(false);
    const handleOpen = () => {
        setNavOpen(true);
    }

    const handleClose = () => {
        setNavOpen(false);
    }

    const handleSwipe = (event) => {

        if (event.dir === "Right") {
            setNavOpen(true);
        }

        if (event.dir === "Left") {
            setNavOpen(false);
        }

    }

    return (
        <>
            <Swipeable onSwiped={handleSwipe}>
                <StyledWrapper >
                    <StyleSideNav open={navOpen}>
                        <StyledCloseIcon onClick={handleClose} src={closeIcon} />
                        <StyledNav>
                            <li>Home</li>
                            <li>About</li>
                            <li>Privacy</li>
                        </StyledNav>
                    </StyleSideNav>
                    <Button onClick={handleOpen} color="#1200ee"> Open Nav</Button>
                </StyledWrapper>
            </Swipeable>
        </>)
}

export default Week5;