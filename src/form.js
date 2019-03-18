import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';




 class Form1 extends Component {

     constructor(props) {

         super(props);

         this.state = { 

             keyword:'',

             keyword1:'',

             keyword2:''

          }

        }

    handelchange=(event)=>{

        this.setState({keyword:event.target.value})

        this.props.tapeNumber(event.target.value)

     }

     handelchange2=(event)=>{

        this.setState({keyword1:event.target.value})

        this.props.tapeName(event.target.value)

    }

    handelchange3=(event)=>{

        this.setState({keyword2:event.target.value})

        this.props.tapeValidThru(event.target.value)

    }

     render() { 

         return ( 
        
         
             <div className='form'>

            <br/>  <br/>
            <div>  <input type='text' onChange={this.handelchange} maxLength='16' placeholder="Your RIP"/></div>
           <br/>
            <div>  <input type='text' onChange={this.handelchange2} maxLength='20' placeholder="Your Name"/> </div>
            <br/>
            <div>  <input type='text' onChange={this.handelchange3} maxLength='4' placeholder="Date Exp"/>  </div>

             </div>

        
     

          );

     }

 }

export default Form1;