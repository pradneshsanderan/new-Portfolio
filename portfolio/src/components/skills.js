import React,{Component} from 'react'
import {Grid, Cell,Button} from 'react-mdl';
import Navbar from './Navbar';
import { Typography, Box } from '@material-ui/core';

class Skills extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <div style={{display:'flex',flexDirection:'row'}}>
                    <div style={{width:'50%'}} className="resume-left-col">

                    <div style={{textAlign:'center'}}>
                    <img
                    src ='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Happy&eyebrowType=Default&mouthType=Twinkle&skinColor=Brown'
                    alt="avatar"
                    style={{height:'300px'}}
                    />
                     <h2 style={{paddingTop:'2em'}}> Pradnesh Sanderan</h2>
                <h4 style={{color:'grey'}}>Programmer</h4>
                <hr style={{borderTop:'3px solid #833fb2',width: '50%'}}/>
                <p>Self-assured computer science student and team leader, currently studying in the University of Edinburgh ,with diverse experience utilizing programming languages 
                    for assignments and projects. Highly trained in various technology environments with fluid understanding of object 
                    oriented programming languages and functional programming languages.</p>
                <hr style={{borderTop:'3px solid #833fb2',width: '50%'}}/>
                <h5>Country of Residence</h5>
                <p>Malaysia / United Kingdom</p>
                <h5>Degree</h5>
                <p>BSc Computer Science</p>
                <h5>Objective</h5>
                <p>To obtain a full time software development position after graduation</p>
                <h5>email</h5>
                <p>pradneshsanderan@gmail.com</p>
                
                <hr style={{borderTop:'3px solid #833fb2',width: '50%'}}/>
                </div>
                    </div>
                    <div style={{width:'50%'}} className="resume-right-col">
                        <h1 style={{fontSize:"40px", color:"tomato",textTransform: "uppercase"}}>
                            Education
                        </h1>

                        <h2>University</h2>
                        <div >
                            <div style={{width:'50%'}}><h4>The University of Edinburgh</h4></div>
                            <div style={{width:'50%'}}><h4>2019-2023</h4></div>
                        </div>
                        <h4>BSc Computer Science</h4>
                        <h5>Courses Taken</h5>
                    </div>
                </div>
                
               
               
        </div>
        )
    }
}

export default Skills;
