import React  from 'react';

export const SearchInput = (props) => {

    const classNames = `fas fa-search fa-2x ${props.validationMsg ? 'not-valid' : ''}`;

    return(
        <div className="search-box ">
              <input type="text" className="search-bar" placeholder="Enter city name" onChange={props.onChange} />
              <i className={classNames}></i>
              {props.validationMsg && <p className='validation-message'>{props.validationMsg}</p> }
        </div>
    )
}