import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';


const StyledWrapper = styled.div`
    background:  ${({ showBackground }) => showBackground && 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)'};
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;

const StyledButton = styled.div`
   
    border-radius: 5rem;
    border: solid 0.5rem;
    background-color: #313130;
    color: #b95951;
    height: 10rem;
    width: 20rem;
    
`;

const StyledSwitch = styled.span`
    box-sizing: border-box;
    display: block;
    animation:  1s ${({ active }) => active && keyframes({ from: { marginLeft: 0 }, to: { marginLeft: '180px' } })} linear;
    animation-fill-mode: forwards;
    height: 9rem;
    margin: 0.7rem;
    width: 8.125rem;
    background: linear-gradient(180deg, #4b4a49, #313130);
    top: 0.3125rem;
    left: 0.3125rem;
    border: solid 0.3125rem;
    border-radius: 5rem;
    

`;


/*

import Week8 from "./Components/Week8";
https://codepen.io/jrsinclair/pen/KqZBWM
*/

const Toggle = (props) => {

    const { onActive, onNotActive } = props;
    const [active, setActive] = useState(false);

    useEffect(() => {

        if (!active) {
            onNotActive();
            return;
        }

        onActive()

    }, [active])



    const handleClick = () => setActive(!active);
    return (<StyledButton> <StyledSwitch active={active} onClick={handleClick}></StyledSwitch> </StyledButton>)
}

const Week9 = () => {

    const [showBackground, setShowBackGround] = useState(false);

    const handleActive = () => {
        setShowBackGround(true);
    }

    const handleNotActive = () => {
        setShowBackGround(false);
    }

    return <><StyledWrapper showBackground={showBackground}> <Toggle onNotActive={handleNotActive} onActive={handleActive} /></StyledWrapper></>
}

export default Week9;