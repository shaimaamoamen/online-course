import React,{Component} from "react";
import Home from "./../Home/Index.js"
import About from './../About/Index.js'
import Courses from './../Courses/Index.js'
import Certificates from './../Certificates/Index.js'
import Contact from './../Contact/Index.js'
import Video from './../Video/Index.js'
class Index extends Component{
    render(){
        return(
            <div>
                <Home/>
                <About/>
                <Courses/>
                <Certificates/>
                <Contact/>
                <Video/>
            </div>
        )
    }
}
export default Index
