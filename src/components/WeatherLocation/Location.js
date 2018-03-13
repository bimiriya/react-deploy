import React from 'react';
import PropTypes from 'prop-types'; // under react

// const Location = () => (
//     <div>
//         <h2>Santiago</h2>
//         <WeatherData/>
//     </div>
// )

// const Location = (props) => {
//     const city = props.city;
//     return (
//         <div>
//             <h1>{city}</h1>
//         </div>
//     )
// }

const Location = ({city}) => {
    return (
        <div>
            <h1>{city}</h1>
        </div>
    )
}

Location.propTypes = { // before export
    city: PropTypes.string.isRequired,
}

export default Location;