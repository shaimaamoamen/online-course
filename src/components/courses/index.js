import React,{Component} from "react";
import{CoursesSection,CoursesPart}from "./style.js"
class Courses extends Component{
    render(){
        return(
            <CoursesSection>
                <CoursesPart to="/front">
                    <img src="images/3.png"/>
                </CoursesPart>
                <CoursesPart to="/back">
                    <img src="images/4.png"/>
                </CoursesPart>
                <CoursesPart to="/java">
                    <img src="images/5.png"/>
                </CoursesPart>
                <CoursesPart to="/ios">
                    <img src="images/6.png"/>
                </CoursesPart>
            </CoursesSection>
        )
    }
}
export default Courses;