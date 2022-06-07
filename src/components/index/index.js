import React,{Component} from "react";
import Home from './../home'
import About from './../about'
import Courses from './../courses'
import Certificates from './../certificates'
import Contact from './../contact'
import Video from './../video'
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
