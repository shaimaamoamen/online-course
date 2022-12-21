import React  from "react";
import { NavbarSection,LogoText,Logo,UlList,ListItem,Page,SamePage } from "./Style.js";
import Courses from './../Courses/Index.js';
import Certificates from './../Certificates/Index.js';
import Contact from './../Contact/Index.js';
const Navbar=()=>{
    return(
       <NavbarSection>
           <div className="container">
               <Logo>
                   <LogoText>
                       Online Course
                   </LogoText>
               </Logo>
               <UlList>
                   <ListItem>
                   <Page to="/">Home</Page>
                   </ListItem>
                   <ListItem>
                       <SamePage to="/courses">Courses</SamePage>
                   </ListItem>
                   <ListItem>
                       <SamePage to="/certificates">Certificates</SamePage>
                   </ListItem>
                   <ListItem>
                       <SamePage to="/contact">Contact</SamePage>
                   </ListItem>
                   
               </UlList>

           </div>
       </NavbarSection>
    )
}
export default Navbar;