import React,{Component} from "react";
import{CoursesSection,CoursesPart,Part,Image,Title,Info,Number}from "./Style.js"
import Picture7 from "./../../Images/3.jpg"
import Picture8 from "./../../Images/4.png"
import Picture9 from "./../../Images/5.jpg"
import Picture10 from "./../../Images/6.jpg"
class Courses extends Component{
    render(){
        return(
            <CoursesSection>
                <CoursesPart to="/front">
                    <Part>
                        <center>
                    < Image src={Picture7}/>
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
                    < Image src={Picture8}/>
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
                    < Image src={Picture9}/>
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
                    < Image src={Picture10}/>
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