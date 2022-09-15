import Styled from 'styled-components'
import { Link } from 'react-router-dom'
export const CoursesSection=Styled.div`
height: 375px;
overflow: hidden;
`
export const CoursesPart=Styled(Link)`
text-decoration:none;
width: 300px;
float: left;
height: 305px;
box-sizing: border-box;
margin-left: 30px;
@media (max-width: 575px){
        width: 100%;
        float: none;
        margin-left: 0      
}
@media (min-width: 576px )and (max-width:768px) {
    width: 47%; 
}
`
export const Part=Styled.div`
width:300px;
height:305px;
background-color:#F7F7F7;
border-radius:20px;
border-color:grey;
border-style:solid;
`
export const Image=Styled.img`
width:200px;
height:150px;
margin-top:10px;
border-radius:10px;
`
export const Title=Styled.h5`
color:black;
text-align:center;
margin-top:20px;
`
export const Info=Styled.button`
background-color:red;
color:white;
width:150px;
border-radius:25px;
border-color:transparent;
margin-top:20px;
`
export const Number=Styled.span`
color:white;
text-decoration-line:line-through;
padding-left:10px;
`