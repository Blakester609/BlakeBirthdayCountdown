import React from 'react';

const changeDate = (title, callback) => {
    return (
        <button className="change-date" onClick={callback}>
            <i className="far fa-calendar-alt"></i>
            {title}
        </button>
    )
}

export default changeDate;