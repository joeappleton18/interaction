import React from 'react';

const Togggle = () => {
    return (

        <>
            <p> Test </p>
            <input type="checkbox" />
            <label class="toggle-switch-label" for="toggleSwitch">
                <span class="toggle-switch-inner"></span>
                <span class="toggle-switch-switch"></span>
            </label>


        </>

    );
}


const Week7 = () => {

    return <Togggle />
}

export default Week7;