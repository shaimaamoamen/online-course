import React,{Component} from "react";
import{ContactSection,ContactData,Icon,ContactDesc,SpanInfo,SpanTitle} from './Style.js'
import Picture4 from "./../../Images/9.png"
import Picture5 from "./../../Images/10.png"
import Picture6 from "./../../Images/11.png"
class Contact extends Component{
    render(){
        return(
            <ContactSection>
            <ContactData item="1">
            <Icon src={Picture4} />
            <ContactDesc>
                <SpanInfo>Shaimaa Moamen</SpanInfo>
                <SpanTitle>Facebook</SpanTitle>
            </ContactDesc>
           </ContactData>
           <ContactData item="2">
            <Icon src={Picture5} />
            <ContactDesc>
                <SpanInfo>shaimaamoamen86@gmail.com
                </SpanInfo>
                <SpanTitle>Gmail</SpanTitle>
            </ContactDesc>
            
           </ContactData>
           <ContactData item="3">
            <Icon src={Picture6} />
            <ContactDesc>
                <SpanInfo>01156629797
                </SpanInfo>
                <SpanTitle>Mobile</SpanTitle>
            </ContactDesc>
            
           </ContactData>
            </ContactSection>
        )
    }
}
export default Contact;