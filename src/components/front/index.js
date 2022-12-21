import React,{Component} from "react";
import{FrontSection,FrontSectionTitle,FrontTitle,FrontDesc} from './Style.js'
class Front extends Component{
    render(){
        return(
              <FrontSection>
                  <div className="container">
                  <FrontSectionTitle>
                      Front-End Development
                  </FrontSectionTitle>
                  <FrontTitle>
                    Technical Skills
                  </FrontTitle>
                  <FrontDesc>
                      Learn HTML&Css,
                      JavaScript,
                      Modern JavaScript:ES6 and Beyond,
                      TypeScript Fundamentals.
                  </FrontDesc>
                  <a href="https://maharatech.gov.eg/mod/page/view.php?id=206">
                  https://maharatech.gov.eg/mod/page/view.php?id=206 
                  </a>
                  </div>
              </FrontSection>
        )
    }
}
export default Front;