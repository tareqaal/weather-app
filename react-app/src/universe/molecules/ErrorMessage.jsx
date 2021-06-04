import React from 'react';

export const ErrorMessage = props => {

  return (
    <> { props.show && 
      <div className="error" >
        <h3>You got an error!  {props.code ? props.code : ''}</h3>
        <span>
          {props.message ? props.message : ''}
        </span>
      </div>}
    </>
  );
}
