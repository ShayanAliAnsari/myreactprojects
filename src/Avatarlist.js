import React, { Component } from 'react';
import react from 'react-dom';

const Avatarlist = (props)=>{


        return(
          

            <div className="avatar ma4 bg-light-purple dib pa4 tc b grow shadow-4">
              <center>
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} />
            <h1 className=""> {props.name}</h1>
            <p> {props.work}</p>
            
            </center>
            
            </div>
           
        )

    
}
export default Avatarlist;