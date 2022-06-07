import Styled from 'styled-components'
export const ContactSection=Styled.div`
margin-top:80px;
margin-bottom:80px;
height: auto;
overflow: hidden; 
`
export const ContactData=Styled.div`
height:350px;
width: 33.33%;
float: left;
box-sizing: border-box;
padding: 100px 0 100px 60px;
background:${props=>props.item==="1"?'#498cbf':''};
background:${props=>props.item==="2"?'#3b5998':''};
background:${props=>props.item==="3"?'#cc2127':''};
@media (max-width:991px){
    width: 100%;
    float: none;
}
`
export const Icon=Styled.img`
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    float: left;
    margin-right: 10px;
    margin-top:10px;
`
export const ContactDesc=Styled.p`
font-weight: boldj;
font-size: 20px;
color: #fff;
float:left;
`
export const SpanInfo=Styled.span`
display: block;
margin-bottom: 8px;
`
export const SpanTitle=Styled.span`
font-weight: normal;
`