import React from 'react';
import { Link } from 'react-router-dom';
export const PageNotFound = () => (

        
    <div className="not-found">
        <div>
            <div className="iconContainer">
                <div className="icon rainy">
                    <div className="cloud"></div>
                    <div className="rain"></div>
                </div>
        <h3>Page not found!</h3>
        <Link to='/'>Go back to home page 
        <i className="far fa-arrow-alt-circle-left"></i></Link>
        </div>
    </div>      
    </div>

);
