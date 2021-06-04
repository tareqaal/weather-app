import React  from 'react';

export const LocationSpinner = () => {

return (
  
    <div className="iconContainer">
        <div className="icon sunny">
            <div className="sun">
                <div className="rays"></div>
            </div>
        </div>
        <h2>Detecting your location....</h2>
        <span>Your current location will be automatically detected if you allow it in your browser. Otherwise, you can enter your location in the search box.</span>
    </div>  
);
}