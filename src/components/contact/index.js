import React,{Component} from "react";
import{ContactSection,ContactData,Icon,ContactDesc,SpanInfo,SpanTitle} from './style.js'
class Contact extends Component{
    render(){
        return(
            <ContactSection>
            <ContactData item="1">
            <Icon src="images/9.png" />
            <ContactDesc>
                <SpanInfo>Shaimaa Moamen</SpanInfo>
                <SpanTitle>Facebook</SpanTitle>
            </ContactDesc>
           </ContactData>
           <ContactData item="2">
            <Icon src="images/10.png" />
            <ContactDesc>
                <SpanInfo>shaimaamoamen86@gmail.com
                </SpanInfo>
                <SpanTitle>Gmail</SpanTitle>
            </ContactDesc>
            
           </ContactData>
           <ContactData item="3">
            <Icon src="images/11.png" />
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