 import React, { Component } from 'react';
// import React from 'react-dom';
import  './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';


                class Avatar extends Component{
                    constructor()
                        {
                        super();
                

                        this.state={
                            name:"welcome to shayan react App"
                        }
                            }
                            namechange()
            {
                this.setState({
                name:"Kya ukharlya click karkey hehehee !"
                })

                
            }

                    render()
                    {
                        const Avatarlistarray = [
                            {
                                id:1,
                                name:"Hammad Ayoob",
                                work:"Python Developer"
                            
                            
                            
                            },
                            {
                                id:2,
                                name:"Zeeshan",
                                work:"Javascript Developer"
                            
                            
                            
                            },
                            {
                                id:3,
                                name:"Shayan Ali",
                                work:"React Developer"
                            
                            
                            
                            },
                            {
                                id:4,
                                name:"Mohib bin wasey",
                                work:"Senior React D"
                            
                            
                            
                            }
                            
                            
                            ]
                            const avatararraylist = Avatarlistarray.map(( avatarmaping , i) => {

                                return  <Avatarlist  key={i}   id={Avatarlistarray[i].name} 
                                                        name={Avatarlistarray[i].name} 
                                                        work={Avatarlistarray[i].work}/>
                                                        }
                                                        )

                        return (
                            <div className="avatar tc bg-light-gray">
                            <div>
                            <h1 className="avatar tc " >{this.state.name}</h1>
                                                        {avatararraylist}
                        
                        </div>
                        <button onClick={()=> this.namechange()}> Click Now !</button>
                        </div>
                            )
                                        
                    }
                }
            export default Avatar;