import React,{Component} from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Index.js"
import Index from "./Components/Index/Index.js"
import Courses from "./Components/Courses/Index.js";
import Certificates from "./Components/Certificates/Index.js";
import Contact from "./Components/Contact/Index.js";
import Front from "./Components/Front/Index.js";
import Back from "./Components/Back/Index.js";
import Java from "./Components/Java/Index.js";
import Ios from "./Components/Ios/Index.js";
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