import React from 'react'
import spinner from '../../img/spinner.gif'

const Spinner = () => {
    return (
        <img 
            className="spinner"
            src={spinner}
            alt="loading"
        />
    )
}

export default Spinner