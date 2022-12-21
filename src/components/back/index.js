import React,{Component} from "react";
import{FrontSection,FrontSectionTitle,FrontTitle,FrontDesc} from './Style.js'
class Back extends Component{
    render(){
        return(
              <FrontSection>
                  <div className="container">
                  <FrontSectionTitle>
                      Back-End Development
                  </FrontSectionTitle>
                  <FrontTitle>
                    Technical Skills
                  </FrontTitle>
                  <FrontDesc>
                      Building Web,
                      Application using PHP&MYSQL.
                  </FrontDesc>
                  <a href="https://maharatech.gov.eg/mod/page/view.php?id=206">
                  https://maharatech.gov.eg/mod/page/view.php?id=206 
                  </a>
                  </div>
              </FrontSection>
        )
    }
}
export default Back;