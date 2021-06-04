import React  from 'react';
import { useStore } from '../../hooks';

export const NavMenu = () => {
    const {state, setState} = useStore();
    
    const handleClick = (value) => {
        setState({...state, menu: value})
    };

    return(
        <nav>
            <ul >
                <li className={state.menu === 'current' ? 'active' : ''}>
                    <a onClick={() => handleClick('current')}>Current Weather</a>
                </li>
                <li className={state.menu === 'forecast' ? 'active' : ''}>
                    <a onClick={() => handleClick('forecast')}>Weather Forcast</a>
                </li>
            </ul>
        </nav>
    )
}