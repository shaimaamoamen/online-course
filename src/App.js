import React,{Component} from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar"
import Index from "./components/index"
import Courses from "./components/courses";
import Certificates from "./components/certificates";
import Contact from "./components/contact";
import Front from "./components/front";
import Back from "./components/back";
import Java from "./components/java";
import Ios from "./components/ios";
class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="App">
         <Navbar/>
         <Routes>
         <Route exact path="/" element={<Index/>}/>
         <Route  path="/courses" element={<Courses/>}/>
         <Route  path="/certificates" element={<Certificates/>}/>
         <Route  path="/contact" element={<Contact/>}/>
         <Route  path="/front" element={<Front/>}/>
         <Route  path="/back" element={<Back/>}/>
         <Route  path="/java" element={<Java/>}/>
         <Route  path="/ios" element={<Ios/>}/>
         </Routes>
      </div>
      </BrowserRouter>
    )
  }
}
export default App;