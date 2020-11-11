import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from "../Week3";

const StyledWrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center; 
`;

const StyledMenu = styled.ul`

    animation: 0.5s ${keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })} linear;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    width: 300px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    & li {
        &:hover {
            background: grey;
        }
        cursor: pointer;
        text-align: center;
        width: 80%;
        height: 10px;
        list-style: none;
        margin-top: 1rem;
        padding: 30px;
    }

`;


export const Menu = (props) => {

    const { open, onClick } = props;

    return (
        <>

            {
                open && (<StyledMenu >
                    <li onClick={() => onClick("Bike")}>Bike</li>
                    <li onClick={() => onClick("Swim")}>Swim </li>
                    <li onClick={() => onClick("Run")}>Run</li>
                </StyledMenu >)

            }

        </>
    )

}


const Week6 = () => {

    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("Walking");

    const handleClick = (item) => {

        setOpen(!open);
    }

    const handleMenClick = (item) => {
        setOpen(!open);
        setSelectedItem(item);
    }




    return (
        <StyledWrapper>

            <Button color="#1200ee" onClick={handleClick}> {selectedItem}  </Button>
            <Menu open={open} onClick={handleMenClick} />
        </StyledWrapper>)
}


export default Week6;