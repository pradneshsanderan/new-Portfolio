import React,{Component} from 'react'
import {Grid, Cell,Button} from 'react-mdl';
import Navbar from './Navbar';
import { Typography, Box } from '@material-ui/core';
import Education from './education';

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
                    <div style={{textAlign:'left', paddingLeft:'3em'}} >
                    <h2 style={{paddingTop:'2em',fontSize:'25px'}}> Pradnesh Sanderan</h2>
                    <h4 style={{color:'grey',fontSize:'18px'}}>Programmer</h4>
                    <hr style={{borderTop:'3px solid #833fb2',width: '95%'}}/>
                    <p  style={{fontSize:"15px"}}>Self-assured computer science student and team leader, currently studying in the University of Edinburgh ,with diverse experience utilizing programming languages 
                        for assignments and projects. Highly trained in various technology environments with fluid understanding of object 
                        oriented programming languages and functional programming languages.</p>
                    <hr style={{borderTop:'3px solid #833fb2',width: '95%'}}/>
                    <h5 style={{fontSize:'18px'}}>Country of Residence</h5>
                    <p style={{fontSize:'15px'}}>Malaysia / United Kingdom</p>
                    <h5 style={{fontSize:'18px'}}>Degree</h5>
                    <p style={{fontSize:'15px'}}>BSc Computer Science</p>
                    <h5 style={{fontSize:'18px'}}>Objective</h5>
                    <p style={{fontSize:'15px'}}>To obtain a full time software development position after graduation</p>
                    <h5 style={{fontSize:'18px'}}>Email</h5>
                    <p style={{fontSize:'15px'}}>pradneshsanderan@gmail.com</p>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <Button />
                        <Button />
                    </div>
                </div>
                
                <hr style={{borderTop:'3px solid #833fb2',width: '95%'}}/>
                </div>
                    </div>
                    <div style={{width:'50%'}} className="resume-right-col">
                        <h1 style={{fontSize:"40px", color:"tomato",textTransform: "uppercase"}}>
                            Education
                        </h1>
                        <Education 
                        startYear={2019}
                        endYear={2023}
                        exam="BSc Computer Science"
                        schoolName="The University of Edinburgh"
                        schoolDescription="Courses Taken:
                         Introduction to Computation, 
                         Object Oriented Programming, 
                         Introduction to Algorithms and Data structures, 
                         Foundations of Data Science, 
                         Introduction to Computer Systems, 
                         Reasoning and agents, Computational Logic, 
                         Discrete Mathematics and Probability, 
                         Calculus, 
                         Linear algebra"/>
                         <Education 
                        startYear={2019}
                        endYear={2018}
                        exam="A-Levels"
                        schoolName="Help Academy, Malaysia"
                        results="4A"
                        schoolDescription="Subjects Taken: Additional Mathematics, Mathematics, Physics, Chemistry"/>
                         <Education 
                        startYear={2013}
                        endYear={2017}
                        results="7A+ 2A 1B+"
                        exam="School Leaving Certificate"
                        schoolName="Methodist Boys' Secondary School Kuala Lumpur"
                        schoolDescription="Subjects Taken: Physics, Chemistry,Biology, Further Mathematics
                        Mathematics, Moral Studies, Histroy, Malay Language, English, Litereature in English"/>
                        <hr style={{borderTop:'3px solid tomato'}}/>

                        <h1 style={{fontSize:"40px", color:"tomato",textTransform: "uppercase"}}>
                            Skills
                        </h1>
                        <h2>
                            languages
                        </h2>
                        <h2>
                            Frameworks
                        </h2>
                        <h2>
                            Others
                        </h2>
                        <h2>
                            Spoken Languages
                        </h2>
                        <hr style={{borderTop:'3px solid tomato'}}/>

                        <h1 style={{fontSize:"40px", color:"tomato",textTransform: "uppercase"}}>
                            Achievements
                        </h1>

                    </div>
                </div>
                
               
               
        </div>
        )
    }
}

export default Skills;
