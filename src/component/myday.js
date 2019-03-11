import React, { Component } from 'react';
import "./myday.css"
import whitelogo from "./photo/main-logo-white.png"
import star from "./photo/star.png"
import ticklogo from "./photo/main-logo-tick.png"


class Myday extends Component {
    render() {
        return (
      
            
                <div className="titleandname">
                    <h2 id="title">my day</h2>
                    <h5 id="times">Saturday 15 Sep 2018</h5>
                   

                    <div className="tablee">

                        <div className="addrow">
                            <img src={whitelogo} className="whitepic"/>
                            <p className="tdpera">Meeting With Doctor</p>
                            <img src={star} className="starpic"/>
                        </div>


                        <div className="addrow">
                            <img src={ticklogo} className="whitepic"/>
                            <p className="tdpera"><s>Meeting With Client</s></p>
                            <img src={star} className="starpic"/>
                        </div>

                    </div>
                     </div>
   
      
      );
    }
}

export default Myday;