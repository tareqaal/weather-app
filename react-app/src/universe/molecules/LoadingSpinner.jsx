import React  from 'react';

export const LoadingSpinner = () => {

return (
    <div className="loading-spinner">
        <div className="icon thunder-storm">
                <div className="cloud"></div>
                <div className="lightning">
                    <div className="bolt"></div>
                    <div className="bolt"></div>
                </div>
        </div>
        <h2>Loading....</h2>
    </div>  
);
}