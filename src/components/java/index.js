import React,{Component} from "react";
import{FrontSection,FrontSectionTitle,FrontTitle,FrontDesc} from './Style.js'
class Java extends Component{
    render(){
        return(
              <FrontSection>
                  <div className="container">
                  <FrontSectionTitle>
                      Java Mobile Development
                  </FrontSectionTitle>
                  <FrontTitle>
                    Technical Skills
                  </FrontTitle>
                  <FrontDesc>
                      Java Development SE,
                      Developing Mobile Applicaions for Android using Java.
                  </FrontDesc>
                  <a href="https://maharatech.gov.eg/mod/page/view.php?id=206">
                  https://maharatech.gov.eg/mod/page/view.php?id=206 
                  </a>
                  </div>
              </FrontSection>
        )
    }
}
export default Java;