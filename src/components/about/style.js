import Styled from 'styled-components'
export const AboutSection=Styled.div`
height: auto;
overflow: hidden; 
`
export const AboutData=Styled.div`

width: 50%;
float: left;
box-sizing: border-box;
padding: 100px 0px 100px 60px;
@media (max-width:991px){
    width: 100%;
    float: none;
}
`
export const AboutInfo=Styled.div`
width: 50%;
float: left;
@media (max-width:768px) {
    width: 100%;
    float: none;
}
`
export const AboutTitle=Styled.h4`
font-size: 40px; 
margin-bottom: 20px;
font-weight:bold;
`
export const AboutDesc=Styled.p`
font-size: 15px;
color: #888;
line-height: 1.5;
margin-bottom: 20px;
`