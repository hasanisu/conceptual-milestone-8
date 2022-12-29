import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = ({player, cart, setCart}) => {
    const {strCutout, strPlayer, idPlayer, strDescriptionEN }= player;

    const handleAddToCart =()=>{
        const info ={
            strCutout, 
            strPlayer, 
            idPlayer,
            price: 115
        };
        // eikhane ami chekc koreci je cart tate kisu ase kina jodi theke tahole
        // new ekta variable e cart ta niyeci copy kore spread operator diye and info 
        // diye ekta object add koreci. setCart e newplayer ta set koreci. 
        if(cart){
            const newPlayer = [...cart, info];
            setCart(newPlayer);
        }
    };
    // console.log(cart);
    return (
        <div className='card'>
            <img src={strCutout} alt="" />
            <h6>{strPlayer}</h6>
            <p>{strDescriptionEN?strDescriptionEN.slice(0,60): 'lorem valo nai lorem valo nai lorem valo nai lorem valo nai'}</p>
            <button onClick={handleAddToCart} className='card-btn'>Add to cart</button>
            <button className='card-btn'>Bookmark</button>
            <button className='card-btn'>Details</button>
        </div>
    );
};

export default SinglePlayer;