import React  from "react";
import { NavbarSection,LogoText,Logo,UlList,ListItem,Page,SamePage } from "./style.js";
import Courses from './../courses/index';
import Certificates from './../certificates/index';
import Contact from './../contact/index';
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