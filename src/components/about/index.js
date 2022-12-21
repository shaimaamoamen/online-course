import React,{Component} from "react";
import{AboutSection,AboutData,AboutInfo,AboutTitle,AboutDesc} from './Style.js'
import Picture1 from "./../../Images/2.jpg"
class About extends Component{
    render(){
        return(
            <AboutSection>
                
                <AboutData>
                    <AboutInfo>
                        <AboutTitle>
                            Online Course
                        </AboutTitle>
                        <AboutDesc>
                            It is a website that offers a course in programming for free,
                            and upon completion of the course,certificates in the same
                            specialty are granted at specific prices for reservation. 
                        </AboutDesc>
                    </AboutInfo>
                </AboutData>
                <AboutData>
                    <img src={Picture1}/>
                </AboutData>
                
            </AboutSection>
            
        )
    }
}
export default About;