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
    

    const handleToBookmark =()=>{
        const info ={
            strCutout, 
            strPlayer, 
            idPlayer,
            price: 115,
            bookmark: 'true'
        };
        
        // Bookmark e kono kisu rakhar shomoi strigify kore rakhai r nebar shomoi json parse kore nei
        // Bookmark k age kono jisnish set kore rakhsi kina ekhn eita check korbo
        const prevBookmark = localStorage.getItem('bookmark');
        const oldBookmark = JSON.parse(prevBookmark);
        // console.log(JSON.parse(prevBookmark)); null hosse ekta falsy value
        if(oldBookmark){
            // jodi jeita bookmark e add korbo oita jodi theke thake tahole
            
            const isExist = oldBookmark.find((p) => p.idPlayer === idPlayer );
            if(isExist){ /* eita jodi shotti hoi */
                alert('Already Bookmarked');
                return;
            }
            else{
                localStorage.setItem('bookmark', JSON.stringify
                ([...oldBookmark, info])); 
            }

        }
        else{
            localStorage.setItem('bookmark', JSON.stringify([info]));
            console.log('nai');
        }
        

    }




    return (
        <div className='card' data-aos="fade-up">
            <img src={strCutout} alt="" />
            <h6>{strPlayer}</h6>
            <p>{strDescriptionEN?strDescriptionEN.slice(0,60): 'lorem valo nai lorem valo nai lorem valo nai lorem valo nai'}</p>
            <button onClick={handleAddToCart} className='card-btn'>Add to cart</button>
            <button onClick={handleToBookmark} className='card-btn'>Bookmark</button>
            <button className='card-btn'>Details</button>
        </div>
    );
};

export default SinglePlayer;