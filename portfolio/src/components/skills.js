import React,{Component} from 'react'
import {Grid, Cell} from 'react-mdl';
import Navbar from './Navbar';

class Skills extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <div style={{textAlign:'center'}}>
                        <img src="" alt="avatar"
                        style={{height:'200px'}} />
                        </div>



                    </Cell>
                    <Cell className="resume-right-col" col={8}>Right Side</Cell>
                </Grid>
            </div>
        )
    }
}

export default Skills;
