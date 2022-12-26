import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = ({player}) => {
    const {strCutout, strPlayer, idPlayer, strDescriptionEN}= player
    return (
        <div className='card'>
            <img src={strCutout} alt="" />
            <h6>{strPlayer}</h6>
            <p>{strDescriptionEN?strDescriptionEN.slice(0,60): 'lorem valo nai lorem valo nai lorem valo nai lorem valo nai'}</p>
        </div>
    );
};

export default SinglePlayer;