import React,{Component} from "react";
import{CoursesSection,CoursesPart,Part,Image,Title,Info,Number}from "./style.js"
class Courses extends Component{
    render(){
        return(
            <CoursesSection>
                <CoursesPart to="/front">
                    <Part>
                        <center>
                    < Image src="images/3.jpg"/>
                        </center>
                         <Title>
                            Front-End Development
                        </Title>
                        <center>
                        <Info>
                            Free<Number>2000 EGP</Number>
                        </Info>
                        </center>
                    </Part>
                </CoursesPart>
                <CoursesPart to="/back">
                <Part>
                        <center>
                    < Image src="images/4.png"/>
                        </center>
                         <Title>
                            Back-End Development
                        </Title>
                        <center>
                        <Info>
                            Free<Number>750 EGP</Number>
                        </Info>
                        </center>
                    </Part>
                </CoursesPart>
                <CoursesPart to="/java">
                <Part>
                        <center>
                    < Image src="images/5.jpg"/>
                        </center>
                         <Title>
                          Java Mobile Development
                        </Title>
                        <center>
                        <Info>
                            Free<Number>1500 EGP</Number>
                        </Info>
                        </center>
                    </Part> 
                </CoursesPart>
                <CoursesPart to="/ios">
                <Part>
                        <center>
                    < Image src="images/6.jpg"/>
                        </center>
                         <Title>
                            Ios App Development
                        </Title>
                        <center>
                        <Info>
                            Free<Number>2500 EGP</Number>
                        </Info>
                        </center>
                    </Part>
                </CoursesPart>
            </CoursesSection>
        )
    }
}
export default Courses;