import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const time = '1s';
const funkyBackground = 'linear-gradient(-45deg, #ee7752, #e73c7e, #23d4ab)';
const setAnimation = (from, to) => keyframes({ from: from, to: to })

const StyledWrapper = styled.div`
    animation: ${time} ${({ showBackground }) => showBackground && setAnimation({ background: 'white' }, { background: funkyBackground })} linear;
    animation-fill-mode: forwards;
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

const StyledSwitch = styled.div`
    border-radius: 5rem;
    animation: ${time} ${({ active }) => active && setAnimation({ marginLeft: 0 }, { marginLeft: '180px' })} linear;
    animation-fill-mode: forwards;
    border: solid 0.3125rem;
    height: 9rem;
    width: 8.125rem;
    margin: 0.7rem;
    background: linear-gradient(180deg, #4b4a49, #313130);
    margin: 0.4rem 0 0.2rem 0.1rem;
     
`;


const Toggle = (props) => {
    const [active, setActive] = useState(false);
    const { onActive, onNotActive } = props;

    useEffect(() => {
        if (!active) {
            onNotActive();
            return;
        }

        onActive();

    }, [active])


    const handleClick = () => setActive(!active);

    return (<StyledButton> <StyledSwitch active={active} onClick={handleClick} /> </StyledButton>)
}


const Week9 = () => {

    const [showBackground, setShowBackground] = useState(false);
    const handleNotActive = () => setShowBackground(false);
    const handleActive = () => setShowBackground(true);

    return (<StyledWrapper showBackground={showBackground}>
        <Toggle onNotActive={handleNotActive} onActive={handleActive} />
        
    </StyledWrapper>)
}

export default Week9;