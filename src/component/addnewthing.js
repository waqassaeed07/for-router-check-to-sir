import React, { Component } from 'react';
import "./addnewthing.css"



class Addnewthings extends Component {
    render() {
        return (

            <div className = "titleandname">
                <h2 id="title">Add New Thing</h2>
       

        <div class="tablee">
            <form>
                <label class="addnewthingsforms">Title:</label>
                <br />

                <input type="text" placeholder="Enter Title of to do Here" id="todotitleinput" />
                <br />
                <br />
                <br />
                <br />
                <label class="addnewthingsforms">Description:</label>
                <br />
                <textarea id="todoDescriptiontextarea"> Enter Title of to do Here
                </textarea>
                <br />
                <br />
                <input type="submit" value="Add Your Thing" id="formsubmitbutton" />
            </form>

        </div>        
 
    </div>
      
      );
    }
}

export default Addnewthings;