import React, { Component } from 'react';


class Education extends Component{
    render(){
        return (
            <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{width:'30%'}}>
                    <br/>
                    <p style={{fontSize:'20px',color:'tomato'}}>{this.props.startYear} - {this.props.endYear }</p>
                </div>
                <div style={{width:'80%'}}>
                    <br/>
                    <h4 style={{marginTop:'0px',fontSize:'35px'}}>{this.props.schoolName}</h4>
                    <p style={{fontSize:'20px',color:'tomato'}}>{this.props.exam}</p>
                    <p style={{color:'tan'}}>{this.props.results}</p>
                    <p style={{color:'tan'}}>{this.props.schoolDescription}</p>
                </div>
            </div>
         
        )
    }
}
export default Education;