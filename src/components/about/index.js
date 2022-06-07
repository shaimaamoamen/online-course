import React,{Component} from "react";
import{AboutSection,AboutData,AboutInfo,AboutTitle,AboutDesc} from './style.js'
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
                    <img src="images/2.jpg" />
                </AboutData>
                
            </AboutSection>
            
        )
    }
}
export default About;