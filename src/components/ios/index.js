import React,{Component} from "react";
import{FrontSection,FrontSectionTitle,FrontTitle,FrontDesc} from './Style.js'
class Ios extends Component{
    render(){
        return(
              <FrontSection>
                  <div className="container">
                  <FrontSectionTitle>
                      Ios Application Development
                  </FrontSectionTitle>
                  <FrontTitle>
                    Technical Skills
                  </FrontTitle>
                  <FrontDesc>
                      Ios Architecture Design Patterns,
                      Ios Application Development using Objective-c,
                      Ios Application Development using Swift.
                  </FrontDesc>
                  <a href="https://maharatech.gov.eg/mod/page/view.php?id=206">
                  https://maharatech.gov.eg/mod/page/view.php?id=206 
                  </a>
                  </div>
              </FrontSection>
        )
    }
}
export default Ios;