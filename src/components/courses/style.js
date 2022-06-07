import Styled from 'styled-components'
import { Link } from 'react-router-dom'
export const CoursesSection=Styled.div`
height: 375px;
overflow: hidden;
`
export const CoursesPart=Styled(Link)`
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