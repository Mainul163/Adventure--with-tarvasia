import React from 'react';

const Reviewinfo = ({info}) => {
    return (
        <div className='col-md-4 pb-3'>
            
            <h4 className='text-style'>{info.email}</h4><br/>
            <small>{info.text}</small><br/>
            <small>Rating: {info.rating} /5</small>
        </div>
    );
};

export default Reviewinfo;