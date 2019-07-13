import React from 'react';

const Card = (params) => {
    return (
        <div style={{borderStyle:'solid', borderRadius:'20px', color:'gold', margin:'20px', padding:'20px', height:'300px',maxHeight:'300px', maxWidth:'300px',
        display:'flex', justifyContent:'center', alignItems:'center', flexFlow:'column wrap'}}>
            <div style={{color:'orange', margin:'10px'}}>{params.data.CoinInfo.FullName}</div>
            <div>Name: {params.data.CoinInfo.Name}</div>
            <div>Price : {`$${params.data.RAW.USD.PRICE}`}</div>
            <div>Proof Type: {params.data.CoinInfo.ProofType}</div>

        </div>
    )
}

export default Card