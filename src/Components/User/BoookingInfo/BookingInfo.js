import React from 'react';

const BookingInfo = ({info}) => {
    return (
        
            <tr>
             <td>{info.name}</td>
            <td>{info.card.brand}</td>
            <td>{info.status}</td>
            </tr>
          
        
    );
};

export default BookingInfo;